﻿
using app_api.Domain;
using app_api.Dtos.AccommodationType;
using app_api.Dtos.City;
using app_api.Model;

namespace app_api.Dtos.Accommodation
{
    public class AccommodationRoomDto
    {
        public AccommodationRoomDto(Domain.AccommodationRoom accommodationRoom)
        {
            this.Title = accommodationRoom.Title;
            this.BedsCount = accommodationRoom.BedsCount;
            this.Capacity = accommodationRoom.Capacity;
            this.Price = accommodationRoom.Price;
            this.Description = accommodationRoom.Description;
        }

        public string Title { get; private set; }
        public int BedsCount { get; private set; }
        public int Capacity { get; private set; }
        public decimal Price { get; private set; }
        public string Description { get; private set; }

    }
}
