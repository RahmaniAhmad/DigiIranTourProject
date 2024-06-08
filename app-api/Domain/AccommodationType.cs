using app_api.Domain.Base;
using System.ComponentModel.DataAnnotations;

namespace app_api.Domain
{
    public class AccommodationType : Entity
    {
        public AccommodationType(string name)
        {
            this.Name = name ?? throw new ArgumentNullException(nameof(name));
        }

        public string Name { get; private set; }
    }
}
