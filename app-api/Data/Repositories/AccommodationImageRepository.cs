using app_api.Domain;
using app_api.Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using System;

namespace app_api.Data.Repositories
{
    public class AccommodationImageRepository :  IAccommodationImageRepository
    {
        private readonly AppDbContext DbContext;

        public AccommodationImageRepository(AppDbContext dbContext) { 
            this.DbContext = dbContext;
        }

        public AccommodationImageRepository(UnitOfWork unitOfWork)
        {
        }

        public async Task<IEnumerable<AccommodationImage>> GetByAccommodationId(long accommodationId)
        {
            return await this.DbContext.AccommodationImages.Where(w=>w.AccommodationId==accommodationId).ToListAsync();
        }

        public async Task<AccommodationImage> GetByIdAsync(long id, CancellationToken cancellationToken)
        {
            var accommodation = await this.DbContext.AccommodationImages
                .FirstOrDefaultAsync(a => a.Id == id, cancellationToken);

            if (accommodation == null)
            {
                throw new KeyNotFoundException($"Accommodation with ID {id} not found.");
            }

            return accommodation;
        }

        public async Task<AccommodationImage> AddAsync(AccommodationImage image, CancellationToken cancellationToken)
        {
            var result = await this.DbContext.AccommodationImages.AddAsync(image, cancellationToken);
            await this.DbContext.SaveChangesAsync(cancellationToken);
            return result.Entity;
        }

        public  void Delete(AccommodationImage image, CancellationToken cancellationToken)
        {
            this.DbContext.AccommodationImages.Remove(image);

        }
    }
}
