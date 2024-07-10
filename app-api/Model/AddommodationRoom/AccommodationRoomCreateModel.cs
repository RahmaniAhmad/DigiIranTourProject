using System.ComponentModel.DataAnnotations;

namespace app_api.Model.Accommodation
{
    public class AccommodationRoomCreateModel
    {
        [Required]
        public long AccommodationId { get; set; }
        [Required]
        [MaxLength(100)]
        public required string Title { get; set; }
        public int? BedsCount { get; set; }
        public int? Capacity { get; set; }
        public decimal? Price { get; set; }
        public string? Description { get; set; }
    }
}
