using app_api.Contracts;
using app_api.Domain;
using app_api.Domain.Base;

namespace app_api.Domain.Repositories
{
    public interface ICityRepository
    {
        Task<IEnumerable<City>> GetListAsync(CancellationToken cancellationToken);
        Task<City> GetByIdAsync(long id, CancellationToken cancellationToken);

    }
}
