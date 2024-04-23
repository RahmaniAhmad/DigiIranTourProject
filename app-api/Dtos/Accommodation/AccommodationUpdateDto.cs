using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net;

namespace app_api.Model
{
    public class AccommodationUpdateDto
    {
        public int Id { get; set; }
        public required string Title { get; set; }
        public  string? Address { get; set; }
        public  string? BedroomsCount { get; set; }
        public  string? BedsCount { get; set; }
        public  string? Capacity { get; set; }
        public  string? ImageName { get; set; }
        public int CityId { get; set; }
        public int AccommodationTypeId { get; set; }
        public IFormFile? AccommodationImage { get; set; }

    }
}
