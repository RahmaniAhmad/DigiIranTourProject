using app_api.Domain;
using app_api.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace app_api.Data.Repositories
{
    public class ReserveRepository : IReserveRepository
    {
        private readonly AppDbContext DbContext;

        public ReserveRepository(AppDbContext dbContext) { 
            this.DbContext = dbContext;
        }

        public ReserveRepository(UnitOfWork unitOfWork)
        {
        }

        public async Task<(IEnumerable<Reserve> Items, int TotalCount)> GetListAsync(int skip, int take, CancellationToken cancellationToken)
        {
            var query = this.DbContext.Reserves.AsQueryable();

            var count = await query.CountAsync(cancellationToken);

            query = query.Skip(skip).Take(take);

            var result = await query.ToListAsync(cancellationToken);

            return (result, count);
        }

        public async Task<Reserve> GetByIdAsync(long id, CancellationToken cancellationToken)
        {
            var accommodation = await this.DbContext.Reserves
                .Include(i => i.User)
                .Include(i => i.AccommodationRoom)
                .FirstOrDefaultAsync(a => a.Id == id, cancellationToken);

            if (accommodation == null)
            {
                throw new KeyNotFoundException($"Accommodation with ID {id} not found.");
            }

            return accommodation;
        }

        public async Task<Reserve> AddAsync(Reserve reserve, CancellationToken cancellationToken)
        {
            var result = await this.DbContext.Reserves.AddAsync(reserve, cancellationToken);
            await this.DbContext.SaveChangesAsync(cancellationToken);
            return result.Entity;
        }

    }
}
