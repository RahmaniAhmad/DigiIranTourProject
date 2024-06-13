using app_api.Contracts;
using app_api.Data.Repositories;
using app_api.Domain;
using app_api.Domain.Repositories;

namespace app_api.Services
{
    public class AccommodationTypeService
    {
        private readonly IAccommodationTypeRepository _accommodationTypeRepository;
        private readonly IUnitOfWork _unitOfWork;

        public AccommodationTypeService(IAccommodationTypeRepository accommodationTypeRepository, IUnitOfWork unitOfWork)
        {
            _accommodationTypeRepository = accommodationTypeRepository;   
            _unitOfWork = unitOfWork;
        }
        public async Task<IEnumerable<AccommodationType>> GetAllAsync(CancellationToken cancellationToken)
        {
            return await _accommodationTypeRepository.GetAllAsync(cancellationToken);
        }

        public async Task<AccommodationType> GetByIdAsync(long id, CancellationToken cancellationToken)
        {
            return await _accommodationTypeRepository.GetByIdAsync(id, cancellationToken);
        }
    }

}
