using app_api.Domain.Base;
using System.Data;
using System.Net;

namespace app_api.Domain
{
    public class AccommodationRoom : Entity
    {
        public AccommodationRoom(Accommodation accommodation, string title, int? bedsCount, int? capacity, decimal? price, string? description)
        {
            Accommodation = accommodation ?? throw new ArgumentNullException(nameof(accommodation));
            AccommodationId = accommodation.Id;
            Title = title ?? throw new ArgumentNullException(nameof(title));
            BedsCount = bedsCount;
            Capacity = capacity;
            Price = price;
            Description = description;
        }

        private AccommodationRoom() { }

        public long AccommodationId { get; private set; }
        public Accommodation Accommodation { get; private set; }
        public string Title { get; private set; }
        public int? BedsCount { get; private set; }
        public int? Capacity { get; private set; }
        public decimal? Price { get; private set; }
        public string? Description { get; private set; }

        public void UpdateDetails(string title, int? bedsCount, int? capacity, decimal? price, string? description)
        {
            this.Title = title;
            this.BedsCount = bedsCount;
            this.Capacity= capacity;    
            this.Price= price;
            this.Description = description;
        }
    }
}
