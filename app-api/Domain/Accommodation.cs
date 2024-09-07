using app_api.Domain.Base;

namespace app_api.Domain
{
    public class Accommodation: AggregateRoot
    {
        private readonly List<AccommodationRoom> accommodationRooms = new();
        private readonly List<AccommodationImage> accommodationImages = new();

        public Accommodation(City city, AccommodationType accommodationType, string title, string address)
        {
            this.City = city;
            this.AccommodationType = accommodationType;
            this.Title = title;
            this.Address = address;
        }

        protected Accommodation() { }

        public virtual long CityId { get;private set; }
        public virtual City City { get; private set; }
        public virtual long AccommodationTypeId { get; private set; }
        public virtual AccommodationType AccommodationType { get; private set; }
        public virtual string Title { get; private set; }
        public virtual string Address { get; private set; }
        public virtual int? BedroomsCount { get; private set; }
        public virtual int? Star { get; private set; }
        public virtual string? Rule { get; private set; }

        public virtual IReadOnlyList<AccommodationRoom> AccommodationRooms => this.accommodationRooms.AsReadOnly();
        public virtual IReadOnlyList<AccommodationImage> AccommodationImages => this.accommodationImages.AsReadOnly();


        public void UpdateRquiredDetails(City city, AccommodationType accommodationType, string title, string address)
        {
            this.City = city;
            this.AccommodationType = accommodationType;
            this.Title = title;
            this.Address = address;
        }

        public void UpdateOptionalDetails(int? bedroomsCount,int? star, string? rule)
        {
            this.BedroomsCount= bedroomsCount;
            this.Star = star;
            this.Rule = rule;
        }
    }
}
