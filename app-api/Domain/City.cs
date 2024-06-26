﻿using app_api.Domain.Base;

namespace app_api.Domain
{
    public class City : Entity
    {
        private readonly List<Accommodation> _accommodations = new List<Accommodation>();
        public City(Province province, string name)
        {
            Province = province ?? throw new ArgumentNullException(nameof(province));
            ProvinceId = province.Id;
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }
        private City() { }
        public long ProvinceId { get; private set; }
        public Province Province { get; private set; }
        public string Name { get; private set; }
        public IReadOnlyList<Accommodation> Accommodations => _accommodations.AsReadOnly();
        public void AddAccommodation(string title, string address, int bedroomsCount, string rule)
        {
            //var accommodation = new Accommodation(this, title, address, bedroomsCount, rule);
            //_accommodations.Add(accommodation);
        }

        public void RemoveAccommodation(Accommodation accommodation)
        {
            if (accommodation == null)
                throw new ArgumentNullException(nameof(accommodation));

            _accommodations.Remove(accommodation);
        }
    }
}
