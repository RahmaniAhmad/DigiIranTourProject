
namespace app_api.Domain.Repositories
{
    public interface IReserveRepository
    {
        Task<(IEnumerable<Reserve> Items, int TotalCount)> GetListAsync(int skip, int take, CancellationToken cancellationToken);
        Task<Reserve> GetByIdAsync(long id, CancellationToken cancellationToken);
        Task<Reserve> AddAsync(Reserve reserve, CancellationToken cancellationToken);
    }
}
