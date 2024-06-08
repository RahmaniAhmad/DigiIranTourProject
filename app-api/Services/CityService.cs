using app_api.Contracts;
using app_api.Domain;

namespace app_api.Services
{
    public class CityService
    {
        private readonly IUnitOfWork _unitOfWork;

        public CityService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        //public async Task AddAccommodationToCityAsync(long cityId,AccommodationType type, string accommodationTitle, string address, int bedroomsCount, string rule, CancellationToken cancellationToken)
        //{
        //    var city = await _unitOfWork.Cities.GetByIdAsync(cityId, cancellationToken);
        //    if (city == null)
        //    {
        //        throw new Exception("City not found");
        //    }

        //    var accommodation = new Accommodation(city,type, accommodationTitle, address, bedroomsCount, rule);
        //    city.AddAccommodation(accommodationTitle, address, bedroomsCount, rule);
        //    await _unitOfWork.CompleteAsync(cancellationToken);
        //}
    }

}
