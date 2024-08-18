using app_api.Domain.Base;
using System.ComponentModel.DataAnnotations;

namespace app_api.Domain
{
    public class AccommodationType : Entity
    {
        public AccommodationType(string title,string enTitle)
        {
            this.Title = title ?? throw new ArgumentNullException(nameof(title));
            this.EnTitle = enTitle ?? throw new ArgumentNullException(nameof(enTitle));
        }

        public string Title { get; private set; }
        public string EnTitle { get; private set; }
    }
}
