using app_api.Contracts;
using app_api.Data.Repositories;
using app_api.Domain;
using app_api.Domain.Repositories;
using app_api.Model;
using Microsoft.EntityFrameworkCore;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace app_api.Services
{
    public class AccommodationService
    {
        private readonly IAccommodationRepository _accommodationRepository;
        public AccommodationService(IAccommodationRepository accommodationRepository)
        {
            _accommodationRepository = accommodationRepository;
        }

        public async Task<(IEnumerable<Accommodation> accommodations, int totalCount)> GetAll(int skip, int take, CancellationToken cancellationToken)
        {
            var query = _accommodationRepository.GetAll();

            var totalCount = await query.CountAsync();
            var accommodations = await query.Skip(skip).Take(take).ToListAsync(cancellationToken);

            return (accommodations, totalCount);
        }

        //public async Task<Accommodation> GetByIdAsync(long id, CancellationToken cancellationToken)
        //{
        //    return await _accommodationRepository.GetByIdAsync(id, cancellationToken);
        //}

        //public async Task<(IEnumerable<Accommodation> accommodations, int totalCount)> GetListAsync(int skip, int take, string filter, CancellationToken cancellationToken)
        //{
        //    var query = string.IsNullOrWhiteSpace(filter)
        //        ? _accommodationRepository.GetAll(cancellationToken)
        //        : _accommodationRepository.GetByFilter(filter, cancellationToken);

        //    var totalCount = await query.CountAsync(cancellationToken);
        //    var accommodations = await query.Skip(skip).Take(take).ToListAsync(cancellationToken);

        //    return (accommodations, totalCount);
        //}

        //public async Task<(IEnumerable<Accommodation> accommodations, int totalCount)> GetListByTypeAsync(int skip, int take, string type, CancellationToken cancellationToken)
        //{
        //    var query = string.IsNullOrWhiteSpace(type)
        //        ? _accommodationRepository.GetAll(cancellationToken)
        //        : _accommodationRepository.GetByType(type, cancellationToken);

        //    var totalCount = await query.CountAsync();
        //    var accommodations = await query.Skip(skip).Take(take).ToListAsync(cancellationToken);

        //    return (accommodations, totalCount);
        //}

        //public async Task<Accommodation> CreateAsync(AccommodationCreateModel model, CancellationToken cancellationToken)
        //{
        //    var city = await _cityRepository.GetByIdAsync(model.CityId, cancellationToken);
        //    var type = await _accommodationTypeRepository.GetByIdAsync(model.TypeId, cancellationToken);
        //    var accommodation = new Accommodation(city, type, model.Title, model.Address, model.BedroomsCount, model.Rule);

        //    foreach (var roomModel in model.Rooms)
        //    {
        //        accommodation.AddRoom(roomModel.Title, roomModel.BedsCount, roomModel.Capacity, roomModel.Price, roomModel.Description);
        //    }

        //    foreach (var imageModel in model.Images)
        //    {
        //        accommodation.AddImage(imageModel.Url);
        //    }

        //    await _accommodationRepository.AddAsync(accommodation, cancellationToken);
        //    await _unitOfWork.CompleteAsync(cancellationToken);

        //    return accommodation;
        //}

        //public async Task UpdateAsync(long id, AccommodationUpdateModel model, CancellationToken cancellationToken)
        //{
        //    var accommodation = await _accommodationRepository.GetByIdAsync(id, cancellationToken);

        //    if (accommodation == null)
        //    {
        //        throw new KeyNotFoundException("Accommodation not found.");
        //    }

        //    var city = await _cityRepository.GetByIdAsync(model.CityId, cancellationToken);
        //    var type = await _accommodationTypeRepository.GetByIdAsync(model.TypeId, cancellationToken);

        //    accommodation.UpdateDetails(city, type, model.Title, model.Address, model.BedroomsCount, model.Rule);

        //    // Update Rooms
        //    accommodation.ClearRooms();
        //    foreach (var roomModel in model.Rooms)
        //    {
        //        accommodation.AddRoom(roomModel.Title, roomModel.BedsCount, roomModel.Capacity, roomModel.Price, roomModel.Description);
        //    }

        //    // Update Images
        //    accommodation.ClearImages();
        //    foreach (var imageModel in model.Images)
        //    {
        //        accommodation.AddImage(imageModel.Url);
        //    }

        //    await _accommodationRepository.UpdateAsync(accommodation, cancellationToken);
        //    await _unitOfWork.CompleteAsync(cancellationToken);
        //}

        //public async Task DeleteAsync(long id, CancellationToken cancellationToken)
        //{
        //    var accommodation = await _accommodationRepository.GetByIdAsync(id, cancellationToken);

        //    if (accommodation == null)
        //    {
        //        throw new KeyNotFoundException("Accommodation not found.");
        //    }

        //    await _accommodationRepository.DeleteAsync(id, cancellationToken);
        //    await _unitOfWork.CompleteAsync(cancellationToken);
        //}

    }
}
