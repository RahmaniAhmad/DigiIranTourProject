using app_api.Domain.Base;

namespace app_api.Domain
{
    public class Province : AggregateRoot
    {
        private readonly List<City> cities = new List<City>();

        public Province(string name)
        {
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }

        private Province() { }

        public string Name { get; set; }

        public IReadOnlyList<City> Cities => cities.AsReadOnly();

    }
}
