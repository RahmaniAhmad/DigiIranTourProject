using app_api.Domain;
using app_api.Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using System;

namespace app_api.Data.Repositories
{
    public class AccommodationTypeRepository :  IAccommodationTypeRepository
    {
        private readonly AppDbContext DbContext;

        public AccommodationTypeRepository(AppDbContext dbContext) { 
            this.DbContext = dbContext;
        }

        public AccommodationTypeRepository(UnitOfWork unitOfWork)
        {
        }

        public async Task<IEnumerable<AccommodationType>> GetAllAsync(CancellationToken cancellationToken)
        {
            return await this.DbContext.AccommodationTypes.ToListAsync(cancellationToken);
        }

        public async Task<AccommodationType> GetByIdAsync(long id, CancellationToken cancellationToken)
        {
            var city = await this.DbContext.AccommodationTypes
                .FirstOrDefaultAsync(a => a.Id == id, cancellationToken);

            if (city == null)
            {
                throw new KeyNotFoundException($"AccommodationType with ID {id} not found.");
            }

            return city;
        }
    }
}
