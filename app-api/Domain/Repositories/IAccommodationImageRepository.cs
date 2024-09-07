using app_api.Contracts;
using app_api.Domain;
using app_api.Domain.Base;

namespace app_api.Domain.Repositories
{
    public interface IAccommodationImageRepository
    {
        Task<IEnumerable<AccommodationImage>> GetByAccommodationId(long accommodationId);
        Task<AccommodationImage> GetByIdAsync(long id, CancellationToken cancellationToken);
        Task<AccommodationImage> AddAsync(AccommodationImage accommodationImage, CancellationToken cancellationToken);
        void Delete(AccommodationImage accommodationImage, CancellationToken cancellationToken);


    }
}
