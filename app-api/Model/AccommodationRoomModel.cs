using app_api.Domain;

namespace app_api.Model
{
    public class AccommodationRoomModel
    {
        public AccommodationRoomModel(AccommodationRoom accommodationRoom)
        {
            this.Title = accommodationRoom.Title;
            this.BedsCount=accommodationRoom.BedsCount;
            this.Capacity=accommodationRoom.Capacity;
            this.Price=accommodationRoom.Price;
            this.Description=accommodationRoom.Description;
        }

        public string Title { get; private set; }
        public int BedsCount { get; private set; }
        public int Capacity { get; private set; }
        public decimal Price { get; private set; }
        public string Description { get; private set; }
    }
}
