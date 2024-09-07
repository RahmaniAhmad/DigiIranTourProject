using app_api.Contracts;
using app_api.Domain;
using app_api.Domain.Base;

namespace app_api.Domain.Repositories
{
    public interface IAccommodationRoomRepository
    {
        Task<IEnumerable<AccommodationRoom>> GetByAccommodationId(long accommodationId, CancellationToken cancellationToken);
        Task<AccommodationRoom> GetByIdAsync(long id, CancellationToken cancellationToken);
        Task<AccommodationRoom> AddAsync(AccommodationRoom accommodationRoom, CancellationToken cancellationToken);
        void Delete(AccommodationRoom accommodationRoom, CancellationToken cancellationToken);

    }
}
