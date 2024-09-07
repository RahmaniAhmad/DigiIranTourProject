using app_api.Domain.Base;

namespace app_api.Domain
{
    public class AccommodationRoom : Entity
    {
        public AccommodationRoom(Accommodation accommodation)
        {
            Accommodation = accommodation;
        }

        private AccommodationRoom() { }

        public virtual long AccommodationId { get; private set; }
        public virtual Accommodation Accommodation { get; private set; }
        public virtual string Title { get; private set; }
        public virtual int? BedsCount { get; private set; }
        public virtual int? Capacity { get; private set; }
        public virtual decimal? Price { get; private set; }
        public virtual string? Description { get; private set; }

        public void UpdateRquiredDetails(string title)
        {
            this.Title = title;
        }

        public void UpdateOptionalDetails(int? bedsCount, int? capacity, decimal? price, string? description)
        {
            this.BedsCount = bedsCount;
            this.Capacity = capacity;
            this.Price = price;
            this.Description = description;
        }
    }
}
