using app_api.Domain.Base;

namespace app_api.Domain
{
    public class City : Entity
    {
        private readonly List<Accommodation> accommodations = new List<Accommodation>();
        public City(Province province, string name)
        {
            Province = province ?? throw new ArgumentNullException(nameof(province));
            ProvinceId = province.Id;
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }

        protected City() { }

        public virtual long ProvinceId { get; private set; }
        public virtual Province Province { get; private set; }
        public virtual string Name { get; private set; }
        public virtual IReadOnlyList<Accommodation> Accommodations => this.accommodations.AsReadOnly();
    }
}
