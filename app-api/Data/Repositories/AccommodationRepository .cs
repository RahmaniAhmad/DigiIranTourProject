using app_api.Domain;
using app_api.Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using System;

namespace app_api.Data.Repositories
{
    public class AccommodationRepository :  IAccommodationRepository
    {
        private readonly AppDbContext DbContext;

        public AccommodationRepository(AppDbContext dbContext) { 
            this.DbContext = dbContext;
        }

        public AccommodationRepository(UnitOfWork unitOfWork)
        {
        }

        public IQueryable<Accommodation> GetAll()
        {
            return this.DbContext.Accommodations
                .Include(i => i.City)
                .ThenInclude(t => t.Province)
                .Include(i => i.AccommodationType)
                .Include(i => i.Rooms)
                .Include(i => i.Images);
        }

        public async Task<Accommodation> GetByIdAsync(long id, CancellationToken cancellationToken)
        {
            var accommodation = await this.DbContext.Accommodations
                .Include(i => i.City)
                .ThenInclude(t => t.Province)
                .Include(i => i.AccommodationType)
                .Include(i => i.Rooms)
                .Include(i => i.Images)
                .FirstOrDefaultAsync(a => a.Id == id, cancellationToken);

            if (accommodation == null)
            {
                throw new KeyNotFoundException($"Accommodation with ID {id} not found.");
            }

            return accommodation;
        }

        public async Task<Accommodation> AddAsync(Accommodation accommodation, CancellationToken cancellationToken)
        {
            var result = await this.DbContext.Accommodations.AddAsync(accommodation, cancellationToken);
            await this.DbContext.SaveChangesAsync(cancellationToken);
            return result.Entity;
        }

        public async Task<Accommodation> UpdateAsync(Accommodation accommodation, CancellationToken cancellationToken)
        {
            this.DbContext.Accommodations.Update(accommodation);
            await this.DbContext.SaveChangesAsync(cancellationToken);
            return accommodation;
        }

        public async Task DeleteAsync(long id, CancellationToken cancellationToken)
        {
            var accommodation = await this.DbContext.Accommodations.FindAsync(new object[] { id }, cancellationToken);
            if (accommodation == null)
            {
                return;
            }
            this.DbContext.Accommodations.Remove(accommodation);
            await this.DbContext.SaveChangesAsync(cancellationToken);

        }
    }
}
