using app_api.Contracts;
using app_api.Domain;
using app_api.Domain.Base;

namespace app_api.Domain.Repositories
{
    public interface IProvinceRepository
    {
        Task<IEnumerable<Province>> GetAllAsync(CancellationToken cancellationToken);
    }
}
