
using app_api.Dtos.AccommodationType;
using app_api.Dtos.City;
namespace app_api.Dtos.Accommodation
{
    public class AccommodationDto
    {
        public AccommodationDto(Domain.Accommodation accommodation)
        {
            this.Id = accommodation.Id;
            this.City = new CityDto(accommodation.City);
            this.AccommodationType = new AccommodationTypeDto(accommodation.AccommodationType);
            this.Title = accommodation.Title;
            this.Star = accommodation.Star;
            this.Address = accommodation.Address;
            this.BedroomsCount = accommodation.BedroomsCount;
            this.Rule = accommodation.Rule;

        }
        public long Id { get; set; }
        public CityDto City { get; private set; }
        public AccommodationTypeDto AccommodationType { get; private set; }
        public string Title { get; private set; }
        public string Address { get; private set; }
        public int? BedroomsCount { get; private set; }
        public int? Star { get; private set; }
        public string? Rule { get; private set; }
    }
}
