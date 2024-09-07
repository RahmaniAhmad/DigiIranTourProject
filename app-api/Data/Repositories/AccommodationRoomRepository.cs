using app_api.Domain;
using app_api.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace app_api.Data.Repositories
{
    public class AccommodationRoomRepository :  IAccommodationRoomRepository
    {
        private readonly AppDbContext DbContext;

        public AccommodationRoomRepository(AppDbContext dbContext) { 
            this.DbContext = dbContext;
        }

        public AccommodationRoomRepository(UnitOfWork unitOfWork)
        {
        }

        public async Task<IEnumerable<AccommodationRoom>> GetByAccommodationId(long accommodationId, CancellationToken cancellationToken)
        {
            return await this.DbContext.AccommodationRooms.Where(w=>w.AccommodationId==accommodationId).ToListAsync(cancellationToken);
        }

        public async Task<AccommodationRoom> GetByIdAsync(long id, CancellationToken cancellationToken)
        {
            var accommodation = await this.DbContext.AccommodationRooms
                .FirstOrDefaultAsync(a => a.Id == id, cancellationToken);

            if (accommodation == null)
            {
                throw new KeyNotFoundException($"Accommodation with ID {id} not found.");
            }

            return accommodation;
        }

        public async Task<AccommodationRoom> AddAsync(AccommodationRoom room, CancellationToken cancellationToken)
        {
            var result = await this.DbContext.AccommodationRooms.AddAsync(room, cancellationToken);
            await this.DbContext.SaveChangesAsync(cancellationToken);
            return result.Entity;
        }

        public void Delete(AccommodationRoom room, CancellationToken cancellationToken)
        {
            this.DbContext.AccommodationRooms.Remove(room);
        }
    }
}
