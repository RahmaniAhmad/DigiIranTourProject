using app_api.Contracts;
using app_api.Domain;
using app_api.Domain.Base;

namespace app_api.Domain.Repositories
{
    public interface IAccommodationRepository
    {
        IQueryable<Accommodation> GetAll();
        //IQueryable<Accommodation> GetByFilter(string filter, CancellationToken cancellationToken);
        //IQueryable<Accommodation> GetByType(string type, CancellationToken cancellationToken);
    }
}
