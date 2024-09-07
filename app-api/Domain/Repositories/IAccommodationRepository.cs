namespace app_api.Domain.Repositories
{
    public interface IAccommodationRepository
    {
        Task<(IEnumerable<Accommodation> Items, int TotalCount)> GetListAsync(int skip, int take, CancellationToken cancellationToken);
        Task<Accommodation> GetByIdAsync(long id, CancellationToken cancellationToken);
        Task<(IEnumerable<Accommodation> Items, int TotalCount)> GetByTypeAsync(string typeId, int skip, int take, CancellationToken cancellationToken);
        Task<Accommodation> AddAsync(Accommodation accommodation, CancellationToken cancellationToken);
        void Delete(Accommodation accommodation, CancellationToken cancellationToken);
    }
}
