using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Net;

namespace app_api.Domain
{
    public class Accommodation
    {
        public Accommodation(string title, int accommodationTypeId, int cityId)
        {
            this.Title = title;
            this.AccommodationTypeId = accommodationTypeId;
            this.CityId = cityId;
        }

        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public  string? Address { get; set; }
        public  string? BedroomsCount { get; set; }
        public  string? BedsCount { get; set; }
        public  string? Capacity { get; set; }
        public  string? Price { get; set; }
        public  string? ImageName { get; set; }
        [ForeignKey("City")]
        public int CityId { get; set; }
        public City City { get; set; }
        [ForeignKey("AccommodationType")]
        public int AccommodationTypeId { get; set; }
        public AccommodationType AccommodationType { get; set;}
    }
}
