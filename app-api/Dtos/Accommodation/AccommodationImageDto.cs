
using app_api.Domain;
using app_api.Dtos.AccommodationType;
using app_api.Dtos.City;
using app_api.Model;

namespace app_api.Dtos.Accommodation
{
    public class AccommodationImageDto
    {
        public AccommodationImageDto(AccommodationImage accommodationImage)
        {
            this.Url = accommodationImage.Url;
        }

        public string Url { get; private set; }

    }
}
