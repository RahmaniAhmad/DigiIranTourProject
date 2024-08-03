using app_api.Contracts;
using app_api.Domain;
using app_api.Domain.Repositories;
using app_api.Model.Accommodation;

namespace app_api.Services
{
    public class AccommodationImageService
    {
        private readonly IAccommodationRepository _accommodationRepository;
        private readonly IAccommodationImageRepository _accommodationImageRepository;
        private readonly IUnitOfWork _unitOfWork;

        public AccommodationImageService(IAccommodationImageRepository accommodationImageRepository, IAccommodationRepository accommodationRepository, IUnitOfWork unitOfWork)
        {
            _accommodationRepository = accommodationRepository;
            _accommodationImageRepository = accommodationImageRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<AccommodationImage> CreateAsync(AccommodationImageCreateModel model, CancellationToken cancellationToken)
        {
            var accommodation = await _accommodationRepository.GetByIdAsync(model.AccommodationId, cancellationToken);

            if (accommodation == null)
            {
                throw new Exception("Accommodation not found.");
            }

            var accommodationImage = new AccommodationImage(accommodation, model.Url, model.Title);

            await _accommodationImageRepository.AddAsync(accommodationImage, cancellationToken);
            await _unitOfWork.CompleteAsync(cancellationToken);

            return accommodationImage;
        }


        public async Task<AccommodationImage> UpdateAsync(long id, AccommodationImageUpdateModel model, CancellationToken cancellationToken)
        {
            var accommodationImage = await _accommodationImageRepository.GetByIdAsync(id, cancellationToken);
            if (accommodationImage == null)
            {
                throw new KeyNotFoundException("Image not found.");
            }

            accommodationImage.UpdateDetails(model.Url,model.Title);

            await _accommodationImageRepository.UpdateAsync(accommodationImage, cancellationToken);
            await _unitOfWork.CompleteAsync(cancellationToken);

            return accommodationImage;
        }

        public async Task DeleteAsync(long id, CancellationToken cancellationToken)
        {
            var accommodationImage = await _accommodationImageRepository.GetByIdAsync(id, cancellationToken);
            if (accommodationImage == null)
            {
                throw new KeyNotFoundException("Image not found.");
            }

            await _accommodationImageRepository.DeleteAsync(id, cancellationToken);
            await _unitOfWork.CompleteAsync(cancellationToken);
        }

    }
}
