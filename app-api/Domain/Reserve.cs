using app_api.Domain.Base;

namespace app_api.Domain
{
    public class Reserve : AggregateRoot
    {
        public Reserve(User user, AccommodationRoom accommodationRoom)
        {
            this.User = user;
            this.AccommodationRoom = accommodationRoom;
            this.DateTime = DateTime.Now;
        }

        private Reserve() { }
        public virtual User User { get; }
        public virtual AccommodationRoom AccommodationRoom { get; }
        public virtual DateTime DateTime { get; }
        public virtual DateTime From { get; set; }
        public virtual DateTime To { get; set; }
    }
}
