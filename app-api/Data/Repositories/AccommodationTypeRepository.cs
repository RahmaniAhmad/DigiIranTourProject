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

        public async Task<IEnumerable<AccommodationType>> GetAll()
        {
            return await this.DbContext.AccommodationTypes.ToListAsync();
        }
    }
}
