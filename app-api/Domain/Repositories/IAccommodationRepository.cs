using app_api.Contracts;
using app_api.Domain;
using app_api.Domain.Base;

namespace app_api.Domain.Repositories
{
    public interface IAccommodationRepository
    {
        IQueryable<Accommodation> GetAll();
        Task<Accommodation> GetByIdAsync(long id, CancellationToken cancellationToken);
        Task<IEnumerable<Accommodation>> GetByTypeAsync(string typeId, CancellationToken cancellationToken);
        Task<Accommodation> AddAsync(Accommodation accommodation, CancellationToken cancellationToken);
        Task<Accommodation> UpdateAsync(Accommodation accommodation, CancellationToken cancellationToken);
        Task DeleteAsync(long id, CancellationToken cancellationToken);
    }
}
