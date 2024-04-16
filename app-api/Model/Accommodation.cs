using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net;

namespace app_api.Model
{
    public class Accommodation
    {
        [Key]
        public int Id { get; set; }
        public required string Title { get; set; }
        public  string? Address { get; set; }
        public  string? BedroomsCount { get; set; }
        public  string? BedsCount { get; set; }
        public  string? Capacity { get; set; }
        public  string? ImageName { get; set; }
        [ForeignKey("City")]
        public int CityId { get; set; }
        public required City City { get; set; }
        [ForeignKey("AccommodationType")]
        public int AccommodationTypeId { get; set; }
        public required  AccommodationType AccommodationType { get; set;}
    }
}
