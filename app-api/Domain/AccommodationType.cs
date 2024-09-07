using app_api.Domain.Base;

namespace app_api.Domain
{
    public class AccommodationType : Entity
    {
        private readonly List<Accommodation> accommodations = new List<Accommodation>();

        public AccommodationType(string title,string enTitle)
        {
            this.Title = title ?? throw new ArgumentNullException(nameof(title));
            this.EnTitle = enTitle ?? throw new ArgumentNullException(nameof(enTitle));
        }

        public string Title { get; private set; }
        public string EnTitle { get; private set; }
        public virtual IReadOnlyList<Accommodation> Accommodations => this.accommodations.AsReadOnly();
    }
}
