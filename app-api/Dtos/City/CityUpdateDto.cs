﻿using System.ComponentModel.DataAnnotations;

namespace app_api.Dtos.City
{
    public class CityUpdateDto
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public int ProvinceId { get; set; }
    }
}
