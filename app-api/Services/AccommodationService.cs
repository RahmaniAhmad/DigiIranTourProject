using app_api.Contracts;
using app_api.Domain;
using app_api.Domain.Repositories;
using app_api.Model;
using app_api.Model.Accommodation;
using Microsoft.EntityFrameworkCore;

namespace app_api.Services
{
    public class AccommodationService
    {
        private readonly IAccommodationRepository _accommodationRepository;
        private readonly ICityRepository _cityRepository;
        private readonly IAccommodationTypeRepository _accommodationTypeRepository;
        private readonly IUnitOfWork _unitOfWork;

        public AccommodationService(IAccommodationRepository accommodationRepository, ICityRepository cityRepository,IAccommodationTypeRepository accommodationTypeRepository,IUnitOfWork unitOfWork)
        {
            _accommodationRepository = accommodationRepository;
            _cityRepository = cityRepository;   
            _accommodationTypeRepository = accommodationTypeRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<Accommodation> CreateAsync(AccommodationCreateModel model, CancellationToken cancellationToken)
        {
            var city = await _cityRepository.GetByIdAsync(model.CityId, cancellationToken);
            var type = await _accommodationTypeRepository.GetByIdAsync(model.TypeId, cancellationToken);

            if (city == null)
            {
                throw new Exception("City not found.");
            }

            if (type == null)
            {
                throw new Exception("Accommodation type not found.");
            }

            var accommodation = new Accommodation(city, type, model.Title, model.Address, model.BedroomsCount, model.Rule);

            await _accommodationRepository.AddAsync(accommodation, cancellationToken);
            await _unitOfWork.CompleteAsync(cancellationToken);

            return accommodation;
        }


        public async Task<Accommodation> UpdateAsync(long id, AccommodationUpdateModel model, CancellationToken cancellationToken)
        {
            var accommodation = await _accommodationRepository.GetByIdAsync(id, cancellationToken);
            if (accommodation == null)
            {
                throw new KeyNotFoundException("Accommodation not found.");
            }
            var city = await _cityRepository.GetByIdAsync(model.CityId, cancellationToken);
            if (city == null)
            {
                throw new KeyNotFoundException("City not found.");
            }

            var type = await _accommodationTypeRepository.GetByIdAsync(model.AccommodationTypeId, cancellationToken);
            if (type == null)
            {
                throw new KeyNotFoundException("Accommodation type not found.");
            }
            accommodation.UpdateDetails(city, type, model.Title, model.Address, model.BedroomsCount, model.Rule);


            await _accommodationRepository.UpdateAsync(accommodation, cancellationToken);
            await _unitOfWork.CompleteAsync(cancellationToken);

            return accommodation;
        }

        public async Task DeleteAsync(long id, CancellationToken cancellationToken)
        {
            var accommodation = await _accommodationRepository.GetByIdAsync(id, cancellationToken);
            if (accommodation == null)
            {
                throw new KeyNotFoundException("Accommodation not found.");
            }

            await _accommodationRepository.DeleteAsync(id, cancellationToken);
            await _unitOfWork.CompleteAsync(cancellationToken);
        }

    }
}
