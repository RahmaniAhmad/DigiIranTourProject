using app_api.Domain.Base;

namespace app_api.Domain
{
    public class AccommodationRoom : Entity
    {
        public AccommodationRoom(Accommodation accommodation, string title, int bedsCount, int capacity, decimal price, string description)
        {
            Accommodation = accommodation ?? throw new ArgumentNullException(nameof(accommodation));
            AccommodationId = accommodation.Id;
            Title = title ?? throw new ArgumentNullException(nameof(title));
            BedsCount = bedsCount;
            Capacity = capacity;
            Price = price;
            Description = description ?? throw new ArgumentNullException(nameof(description));
        }
        private AccommodationRoom() { }
        public long AccommodationId { get; private set; }
        public Accommodation Accommodation { get; private set; }
        public string Title { get; private set; }
        public int BedsCount { get; private set; }
        public int Capacity { get; private set; }
        public decimal Price { get; private set; }
        public string Description { get; private set; }
    }
}
