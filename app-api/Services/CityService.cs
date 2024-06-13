using app_api.Contracts;
using app_api.Domain;
using app_api.Domain.Repositories;

namespace app_api.Services
{
    public class CityService
    {
        private readonly ICityRepository _cityRepository;
        private readonly IUnitOfWork _unitOfWork;

        public CityService(ICityRepository cityRepository, IUnitOfWork unitOfWork)
        {
            _cityRepository = cityRepository;   
            _unitOfWork = unitOfWork;
        }
        public async Task<IEnumerable<City>> GetAllAsync(CancellationToken cancellationToken)
        {
            return await _cityRepository.GetAllAsync(cancellationToken);
        }

        public async Task<City> GetByIdAsync(long id, CancellationToken cancellationToken)
        {
            return await _cityRepository.GetByIdAsync(id, cancellationToken);
        }
    }

}
