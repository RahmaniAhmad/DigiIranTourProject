using app_api.Domain;
using app_api.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace app_api.Data.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext DbContext;

        public UserRepository(AppDbContext dbContext) { 
            this.DbContext = dbContext;
        }

        public UserRepository(UnitOfWork unitOfWork)
        {
        }

        public async Task<IEnumerable<User>> GetListAsync(CancellationToken cancellationToken)
        {
            return await this.DbContext.Users.ToListAsync(cancellationToken);
        }

        public async Task<User> GetByIdAsync(long id, CancellationToken cancellationToken)
        {
            var accommodation = await this.DbContext.Users
                .FirstOrDefaultAsync(a => a.Id == id, cancellationToken);

            if (accommodation == null)
            {
                throw new KeyNotFoundException($"User with ID {id} not found.");
            }

            return accommodation;
        }

        public async Task<User> AddAsync(User user, CancellationToken cancellationToken)
        {
            var result = await this.DbContext.Users.AddAsync(user, cancellationToken);
            await this.DbContext.SaveChangesAsync(cancellationToken);
            return result.Entity;
        }

    }
}
