using app_api.Domain;
using app_api.Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using System;

namespace app_api.Data.Repositories
{
    public class ProvinceRepository : IProvinceRepository
    {
        private readonly AppDbContext DbContext;

        public ProvinceRepository(AppDbContext dbContext)
        {
            this.DbContext = dbContext;
        }

        public ProvinceRepository(UnitOfWork unitOfWork)
        {
        }

        public async Task<IEnumerable<Province>> GetAllAsync(CancellationToken cancellationToken)
        {
            return await this.DbContext.Provinces.ToListAsync(cancellationToken);
        }
    }
}
