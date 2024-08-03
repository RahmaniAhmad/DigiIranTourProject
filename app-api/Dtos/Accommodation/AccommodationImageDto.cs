
using app_api.Domain;
using app_api.Dtos.AccommodationType;
using app_api.Dtos.City;
using app_api.Model;

namespace app_api.Dtos.Accommodation
{
    public class AccommodationImageDto
    {
        public AccommodationImageDto(Domain.AccommodationImage accommodationImage)
        {
            this.Id = accommodationImage.Id;
            this.Title = accommodationImage.Title;   
            this.Url = accommodationImage.Url;
        }
        public long Id { get; set; }
        public string? Title { get; private set; }
        public string Url { get; private set; }

    }
}
