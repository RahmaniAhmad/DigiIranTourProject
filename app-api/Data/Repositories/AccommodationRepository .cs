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

        //public async Task<Accommodation> GetByIdAsync(long id, CancellationToken cancellationToken)
        //{
        //    var accommodation= await _context.Set<Accommodation>()
        //                         .Include(a => a.Rooms)
        //                         .Include(a => a.Images)
        //                         .FirstOrDefaultAsync(a => a.Id == id, cancellationToken);

        //    if (accommodation == null)
        //    {
        //        throw new KeyNotFoundException($"Accommodation with ID {id} not found.");
        //    }

        //    return accommodation;
        //}

        //public void Add(Accommodation accommodation)
        //{
        //    _context.Set<Accommodation>().Add(accommodation);
        //}

        //public void Update(Accommodation accommodation)
        //{
        //    _context.Set<Accommodation>().Update(accommodation);
        //}
    }
}
