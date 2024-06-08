using app_api.Domain;
using app_api.Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using System;

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

        public async Task<IEnumerable<City>> GetAll()
        {
            return await this.DbContext.Cities.ToListAsync();
        }
    }
}
