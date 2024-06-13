using app_api.Contracts;
using app_api.Data;
using app_api.Data.Repositories;
using app_api.Domain;
using app_api.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace app_api.Data.Repositories
{

}
public class UnitOfWork : IUnitOfWork, IDisposable

{
    private readonly AppDbContext _dbContext;
    private readonly ILogger? _logger;

    public UnitOfWork(
         AppDbContext dbContext,
         ICityRepository cityRepository,
         IAccommodationTypeRepository accommodationTypeRepository,
         IAccommodationRepository accommodationRepository,
         ILogger<UnitOfWork>? logger = null)
    {
        _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
        Cities = cityRepository ?? throw new ArgumentNullException(nameof(cityRepository));
        AccommodationTypes = accommodationTypeRepository ?? throw new ArgumentNullException(nameof(accommodationTypeRepository));
        Accommodations = accommodationRepository ?? throw new ArgumentNullException(nameof(accommodationRepository));
        _logger = logger;
    }

    public ICityRepository Cities { get; }
    public IAccommodationTypeRepository AccommodationTypes { get; }
    public IAccommodationRepository Accommodations { get; }


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