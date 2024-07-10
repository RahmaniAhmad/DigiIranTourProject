using System.ComponentModel.DataAnnotations;

namespace app_api.Model.Accommodation
{
    public class AccommodationRoomUpdateModel : AccommodationRoomCreateModel
    {
        [Required]
        public long Id { get; set; }
    }
}
