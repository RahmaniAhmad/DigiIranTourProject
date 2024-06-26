﻿using app_api.Domain.Base;
using System;

namespace app_api.Domain
{
    public class Accommodation: AggregateRoot
    {
        private readonly List<AccommodationRoom> _rooms = new List<AccommodationRoom>();
        private readonly List<AccommodationImage> _images = new List<AccommodationImage>();

        public Accommodation(City city, AccommodationType accommodationType, string title, string address, int bedroomsCount, string rule)
        {
            City = city ?? throw new ArgumentNullException(nameof(city));
            CityId = city.Id;
            AccommodationType = accommodationType ?? throw new ArgumentNullException(nameof(accommodationType));
            AccommodationTypeId = accommodationType.Id;
            Title = title ?? throw new ArgumentNullException(nameof(title));
            Address = address ?? throw new ArgumentNullException(nameof(address));
            BedroomsCount = bedroomsCount;
            Rule = rule;
        }

        private Accommodation() { }

        public long CityId { get; private set; }
        public City City { get; private set; }
        public long AccommodationTypeId { get; private set; }
        public AccommodationType AccommodationType { get; private set; }
        public string Title { get; private set; }
        public string Address { get; private set; }
        public int BedroomsCount { get; private set; }
        public string Rule { get; private set; }

        public IReadOnlyList<AccommodationRoom> Rooms => _rooms.AsReadOnly();
        public IReadOnlyList<AccommodationImage> Images => _images.AsReadOnly();

        public void UpdateDetails(City city, AccommodationType type, string title, string address, int bedroomsCount, string rule)
        {
            City = city ?? throw new ArgumentNullException(nameof(city));
            CityId = city.Id;
            AccommodationType = type ?? throw new ArgumentNullException(nameof(type));
            AccommodationTypeId = type.Id;
            Title = title ?? throw new ArgumentNullException(nameof(title));
            Address = address ?? throw new ArgumentNullException(nameof(address));
            BedroomsCount = bedroomsCount;
            Rule = rule;
        }

        public void AddRoom(string title, int bedsCount, int capacity, decimal price, string description)
        {
            var room = new AccommodationRoom(this, title, bedsCount, capacity, price, description);
            _rooms.Add(room);
        }

        public void RemoveRoom(AccommodationRoom room)
        {
            if (room == null)
                throw new ArgumentNullException(nameof(room));

            _rooms.Remove(room);
        }

        public void AddImage(string url)
        {
            var image = new AccommodationImage(this, url);
            _images.Add(image);
        }

        public void RemoveImage(AccommodationImage image)
        {
            if (image == null)
                throw new ArgumentNullException(nameof(image));

            _images.Remove(image);
        }
        public void ClearRooms()
        {
            _rooms.Clear();
        }

        public void ClearImages()
        {
            _images.Clear();
        }

    }
}
