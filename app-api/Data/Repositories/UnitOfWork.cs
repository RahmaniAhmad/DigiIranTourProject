using app_api.Contracts;
using app_api.Data;
using app_api.Domain.Repositories;

namespace app_api.Data.Repositories
{

}
public class UnitOfWork : IUnitOfWork, IDisposable

{
    private readonly AppDbContext _dbContext;
    private readonly ILogger? _logger;

    public UnitOfWork(
         AppDbContext dbContext,
         IProvinceRepository provinceRepository,
         ICityRepository cityRepository,
         IAccommodationTypeRepository accommodationTypeRepository,
         IAccommodationRepository accommodationRepository,
         IAccommodationRoomRepository accommodationRoomRepository,
         IAccommodationImageRepository accommodationImageRepository,
         ILogger<UnitOfWork>? logger = null)
    {
        _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        Provinces = provinceRepository ?? throw new ArgumentNullException(nameof(provinceRepository));
        Cities = cityRepository ?? throw new ArgumentNullException(nameof(cityRepository));
        AccommodationTypes = accommodationTypeRepository ?? throw new ArgumentNullException(nameof(accommodationTypeRepository));
        Accommodations = accommodationRepository ?? throw new ArgumentNullException(nameof(accommodationRepository));
        AccommodationRooms = accommodationRoomRepository ?? throw new ArgumentNullException(nameof(accommodationRoomRepository));
        AccommodationImages = accommodationImageRepository ?? throw new ArgumentNullException(nameof(accommodationImageRepository));
        _logger = logger;
    }

    public IProvinceRepository Provinces{ get; }
    public ICityRepository Cities { get; }
    public IAccommodationTypeRepository AccommodationTypes { get; }
    public IAccommodationRepository Accommodations { get; }
    public IAccommodationRoomRepository AccommodationRooms { get; }
    public IAccommodationImageRepository AccommodationImages { get; }


    public async Task CompleteAsync(CancellationToken cancellationToken = default)
    {
        try
        {
            await _dbContext.SaveChangesAsync(cancellationToken);
        }
        catch (Exception ex)
        {
            _logger?.LogError(ex, "Error in completing the unit of work!");
            throw;
        }
    }

    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    protected virtual void Dispose(bool disposing)
    {
        if (disposing)
        {
            _dbContext.Dispose();
        }
    }


}