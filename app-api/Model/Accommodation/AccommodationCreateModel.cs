using System.ComponentModel.DataAnnotations;

namespace app_api.Model.Accommodation
{
    public class AccommodationCreateModel
    {
        [Required]
        public long CityId { get; set; }

        [Required]
        [MaxLength(100)]
        public required string Title { get; set; }

        [Required]
        [MaxLength(200)]
        public required string Address { get; set; }

        [Required]
        public int BedroomsCount { get; set; }

        [MaxLength(500)]
        public string? Rule { get; set; }

        [Required]
        public long TypeId { get; set; }
        public List<AccommodationRoomModel> Rooms { get; set; } = new List<AccommodationRoomModel>();
        public List<AccommodationImageModel> Images { get; set; } = new List<AccommodationImageModel>();
    }
}
