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


        public void AddCity(string cityName)
        {
            if (string.IsNullOrWhiteSpace(cityName))
                throw new ArgumentException("City name cannot be empty.", nameof(cityName));

            var city = new City(this, cityName);
            cities.Add(city);
        }

        public void RemoveCity(City city)
        {
            if (city == null)
                throw new ArgumentNullException(nameof(city));

            cities.Remove(city);
        }
    }
}
