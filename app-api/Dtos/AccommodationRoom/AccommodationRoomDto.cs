namespace app_api.Dtos.AccommodationImage
{
    public class AccommodationRoomDto
    {
        public AccommodationRoomDto(Domain.AccommodationRoom room)
        {
            this.AccommodationId = room.AccommodationId;
            this.Title = room.Title;
            this.BedsCount = room.BedsCount;
            this.Capacity = room.Capacity;
            this.Price = room.Price;
            this.Description = room.Description;
        }

        public long AccommodationId { get; private set; }
        public string Title { get; private set; }
        public int? BedsCount { get; private set; }
        public int? Capacity { get; private set; }
        public decimal? Price { get; private set; }
        public string? Description { get; private set; }
    }
}
