using app_api.Contracts;
using app_api.Domain;
using app_api.Domain.Repositories;
using app_api.Model;
using app_api.Model.Accommodation;
using Microsoft.EntityFrameworkCore;

namespace app_api.Services
{
    public class AccommodationRoomService
    {
        private readonly IAccommodationRepository _accommodationRepository;
        private readonly IAccommodationRoomRepository _accommodationRoomRepository;
        private readonly IUnitOfWork _unitOfWork;

        public AccommodationRoomService(IAccommodationRoomRepository accommodationRoomRepository, IAccommodationRepository accommodationRepository, IUnitOfWork unitOfWork)
        {
            _accommodationRepository = accommodationRepository;
            _accommodationRoomRepository = accommodationRoomRepository;
            _unitOfWork = unitOfWork;
        }

        public async Task<AccommodationRoom> CreateAsync(AccommodationRoomCreateModel model, CancellationToken cancellationToken)
        {
            var accommodation = await _accommodationRepository.GetByIdAsync(model.AccommodationId, cancellationToken);

            if (accommodation == null)
            {
                throw new Exception("Accommodation not found.");
            }

            var accommodationRoom = new AccommodationRoom(accommodation, model.Title, model.BedsCount, model.Capacity, model.Price, model.Description);

            await _accommodationRoomRepository.AddAsync(accommodationRoom, cancellationToken);
            await _unitOfWork.CompleteAsync(cancellationToken);

            return accommodationRoom;
        }


        public async Task<AccommodationRoom> UpdateAsync(long id, AccommodationRoomUpdateModel model, CancellationToken cancellationToken)
        {
            var accommodationRoom = await _accommodationRoomRepository.GetByIdAsync(id, cancellationToken);
            if (accommodationRoom == null)
            {
                throw new KeyNotFoundException("Accommodation Room not found.");
            }

            accommodationRoom.UpdateDetails(model.Title, model.BedsCount, model.Capacity, model.Price, model.Description);

            await _accommodationRoomRepository.UpdateAsync(accommodationRoom, cancellationToken);
            await _unitOfWork.CompleteAsync(cancellationToken);

            return accommodationRoom;
        }

        public async Task DeleteAsync(long id, CancellationToken cancellationToken)
        {
            var accommodationRoom = await _accommodationRoomRepository.GetByIdAsync(id, cancellationToken);
            if (accommodationRoom == null)
            {
                throw new KeyNotFoundException("Accommodation Room not found.");
            }

            await _accommodationRoomRepository.DeleteAsync(id, cancellationToken);
            await _unitOfWork.CompleteAsync(cancellationToken);
        }

    }
}
