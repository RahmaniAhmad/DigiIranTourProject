using app_api.Domain;
using app_api.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

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

        public async Task<(IEnumerable<Accommodation> Items, int TotalCount)> GetListAsync(int skip, int take, CancellationToken cancellationToken)
        {
            var query = this.DbContext.Accommodations.Include(i => i.City).ThenInclude(t => t.Province).Include(i => i.AccommodationType).AsQueryable();

            var count = await query.CountAsync(cancellationToken);

            query = query.Skip(skip).Take(take);

            var result = await query.ToListAsync(cancellationToken);

            return (result, count);
        }

        public async Task<Accommodation> GetByIdAsync(long id, CancellationToken cancellationToken)
        {
            var accommodation = await this.DbContext.Accommodations
                .Include(i => i.City)
                .ThenInclude(t => t.Province)
                .Include(i => i.AccommodationType)
                .Include(i => i.AccommodationRooms)
                .Include(i => i.AccommodationImages)
                .FirstOrDefaultAsync(a => a.Id == id, cancellationToken);

            if (accommodation == null)
            {
                throw new KeyNotFoundException($"Accommodation with ID {id} not found.");
            }

            return accommodation;
        }

        public async Task<(IEnumerable<Accommodation> Items, int TotalCount)> GetByTypeAsync(string type, int skip, int take, CancellationToken cancellationToken)
        {
            var query = this.DbContext.Accommodations.Where(w => w.AccommodationType.EnTitle.ToLower() == type.ToLower()).AsQueryable();

            var count = await query.CountAsync(cancellationToken);

            query = query.Skip(skip).Take(take);

            var result = await query.ToListAsync(cancellationToken);

            return (result, count);
        }

        public async Task<Accommodation> AddAsync(Accommodation accommodation, CancellationToken cancellationToken)
        {
            var result = await this.DbContext.Accommodations.AddAsync(accommodation, cancellationToken);
            return result.Entity;
        }

        public void Delete(Accommodation accommodation, CancellationToken cancellationToken)
        {
            this.DbContext.Accommodations.Remove(accommodation);
        }
    }
}
