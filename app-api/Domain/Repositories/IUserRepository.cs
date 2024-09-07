
namespace app_api.Domain.Repositories
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetListAsync(CancellationToken cancellationToken);
        Task<User> GetByIdAsync(long id, CancellationToken cancellationToken);
        Task<User> AddAsync(User user, CancellationToken cancellationToken);
    }
}
