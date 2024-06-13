using app_api.Contracts;
using app_api.Domain;
using app_api.Domain.Base;

namespace app_api.Domain.Repositories
{
    public interface ICityRepository
    {
        Task<IEnumerable<City>> GetAll();
        Task<City> GetById(long id, CancellationToken cancellationToken);

    }
}
