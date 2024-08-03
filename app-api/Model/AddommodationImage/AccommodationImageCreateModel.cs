using System.ComponentModel.DataAnnotations;

namespace app_api.Model.Accommodation
{
    public class AccommodationImageCreateModel
    {
        [Required]
        public long AccommodationId { get; set; }

        [MaxLength(100)]
        public string? Title { get; set; }

        public string? Url { get; set; }

        public required IFormFile AccommodationImage { get; set; }
    }
}
