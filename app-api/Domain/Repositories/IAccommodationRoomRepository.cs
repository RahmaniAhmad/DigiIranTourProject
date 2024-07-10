using app_api.Contracts;
using app_api.Domain;
using app_api.Domain.Base;

namespace app_api.Domain.Repositories
{
    public interface IAccommodationRoomRepository
    {
        IQueryable<AccommodationRoom> GetAll();
        Task<AccommodationRoom> GetByIdAsync(long id, CancellationToken cancellationToken);
        Task<AccommodationRoom> AddAsync(AccommodationRoom accommodation, CancellationToken cancellationToken);
        Task<AccommodationRoom> UpdateAsync(AccommodationRoom accommodation, CancellationToken cancellationToken);
        Task DeleteAsync(long id, CancellationToken cancellationToken);
    }
}
