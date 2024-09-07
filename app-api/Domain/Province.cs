using app_api.Domain.Base;

namespace app_api.Domain
{
    public class Province : AggregateRoot
    {
        private readonly List<City> cities = new List<City>();

        public Province(string name)
        {
            Name = name;
        }

        protected Province() { }

        public virtual string Name { get; set; }
        public virtual IReadOnlyList<City> Cities => cities.AsReadOnly();

    }
}
