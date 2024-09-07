using app_api.Domain.Base;

namespace app_api.Domain
{
    public class AccommodationImage : Entity
    {
        public AccommodationImage(Accommodation accommodation, string url)
        {
            Accommodation = accommodation;
            Url = url;
        }

        protected AccommodationImage() { }

        public virtual long AccommodationId { get; private set; }
        public virtual Accommodation Accommodation { get; private set; }
        public virtual string Url { get; private set; }
        public virtual string? Title { get; private set; }

        public void UpdateRquiredDetails(string url)
        {
            this.Url = url;
        }
        public void UpdateOptionalDetails(string title)
        {
            this.Title = title;
        }
    }
}
