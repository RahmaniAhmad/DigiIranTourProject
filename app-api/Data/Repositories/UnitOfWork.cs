using app_api.Contracts;
using app_api.Data;
using app_api.Data.Repositories;
using app_api.Domain;
using app_api.Domain.Repositories;

namespace app_api.Data.Repositories
{

}
public class UnitOfWork : IUnitOfWork, IDisposable

{
    private readonly AppDbContext dbContext;
    private readonly ILogger? logger;

    protected internal UnitOfWork(AppDbContext dbContext, ILogger? logger = null)
    {
        this.dbContext = dbContext;
        this.logger = logger;
        this.Cities = new CityRepository(this);
        this.AccommodationTypes = new AccommodationTypeRepository(this);
        this.Accommodations = new AccommodationRepository(this);
    }

    public ICityRepository Cities { get; }
    public IAccommodationTypeRepository AccommodationTypes { get; }
    public IAccommodationRepository Accommodations { get; }

    protected internal AppDbContext DbContext => this.dbContext;

    public async Task CompleteAsync(CancellationToken cancellationToken = default)
    {
        try
        {
            await this.dbContext.SaveChangesAsync(cancellationToken);
        }
        catch (Exception ex)
        {
            if (this.logger != null)
            {
                this.logger.LogError(ex, "Error in completing the unit of work!");
            }

            throw;
        }
    }

    public void Dispose()
    {
        this.Dispose(true);
        GC.SuppressFinalize(this);
    }

    protected virtual void Dispose(bool disposing)
    {
        if (disposing)
        {
            this.dbContext.Dispose();
        }
    }


}