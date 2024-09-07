using app_api.Domain;
using app_api.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace app_api.Data.Repositories
{
    public class CityRepository : ICityRepository
    {
        private readonly AppDbContext DbContext;

        public CityRepository(AppDbContext dbContext)
        {
            this.DbContext = dbContext;
        }

        public CityRepository(UnitOfWork unitOfWork)
        {
        }

        public async Task<IEnumerable<City>> GetListAsync(CancellationToken cancellationToken)
        {
            return await this.DbContext.Cities.Include(i => i.Province).ToListAsync(cancellationToken);
        }

        public async Task<City> GetByIdAsync(long id, CancellationToken cancellationToken)
        {
            var city = await this.DbContext.Cities
                .Include(i => i.Province)
                .FirstOrDefaultAsync(a => a.Id == id, cancellationToken);

            if (city == null)
            {
                throw new KeyNotFoundException($"City with ID {id} not found.");
            }

            return city;
        }
    }
}
