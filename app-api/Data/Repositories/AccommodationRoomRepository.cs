using app_api.Domain;
using app_api.Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using System;

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

        public async Task<IEnumerable<AccommodationRoom>> GetByAccommodationId(long accommodationId)
        {
            return await this.DbContext.AccommodationRooms.Where(w=>w.AccommodationId==accommodationId).ToListAsync();
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

        public async Task<AccommodationRoom> UpdateAsync(AccommodationRoom room, CancellationToken cancellationToken)
        {
            this.DbContext.AccommodationRooms.Update(room);
            await this.DbContext.SaveChangesAsync(cancellationToken);
            return room;
        }

        public async Task DeleteAsync(long id, CancellationToken cancellationToken)
        {
            var room = await this.DbContext.AccommodationRooms.FindAsync(new object[] { id }, cancellationToken);
            if (room == null)
            {
                return;
            }
            this.DbContext.AccommodationRooms.Remove(room);
            await this.DbContext.SaveChangesAsync(cancellationToken);

        }
    }
}
