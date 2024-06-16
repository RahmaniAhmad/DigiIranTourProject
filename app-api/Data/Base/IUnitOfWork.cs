using app_api.Domain.Repositories;

namespace app_api.Contracts
{
    public interface IUnitOfWork : IDisposable
    {
        IProvinceRepository Provinces { get; }
        ICityRepository Cities { get; }
        IAccommodationTypeRepository AccommodationTypes { get; }
        IAccommodationRepository Accommodations { get; }
        Task CompleteAsync(CancellationToken cancellationToken);
    }
}
