using app_api.Domain.Base;
using System;

namespace app_api.Domain
{
    public class Accommodation: AggregateRoot
    {
        public Accommodation(City city, AccommodationType accommodationType, string title, int? star, string address, int bedroomsCount, string rule)
        {
            City = city ?? throw new ArgumentNullException(nameof(city));
            CityId = city.Id;
            AccommodationType = accommodationType ?? throw new ArgumentNullException(nameof(accommodationType));
            AccommodationTypeId = accommodationType.Id;
            Title = title ?? throw new ArgumentNullException(nameof(title));
            Star = star;
            Address = address ?? throw new ArgumentNullException(nameof(address));
            BedroomsCount = bedroomsCount;
            Rule = rule;
        }

        private Accommodation() { }

        public long CityId { get; private set; }
        public City City { get; private set; }
        public long AccommodationTypeId { get; private set; }
        public AccommodationType AccommodationType { get; private set; }
        public string Title { get; private set; }
        public int? Star { get; private set; }
        public string Address { get; private set; }
        public int BedroomsCount { get; private set; }
        public string Rule { get; private set; }
        public ICollection<AccommodationRoom> AccommodationRooms { get; set; }

        public ICollection<AccommodationImage> AccommodationImages { get; set; }

        public void UpdateDetails(City city, AccommodationType type, string title, int? star, string address, int bedroomsCount, string rule)
        {
            City = city ?? throw new ArgumentNullException(nameof(city));
            CityId = city.Id;
            AccommodationType = type ?? throw new ArgumentNullException(nameof(type));
            AccommodationTypeId = type.Id;
            Title = title ?? throw new ArgumentNullException(nameof(title));
            Star = star;
            Address = address ?? throw new ArgumentNullException(nameof(address));
            BedroomsCount = bedroomsCount;
            Rule = rule;
        }
    }
}
