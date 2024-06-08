using app_api.Domain;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace app_api.Model
{
    public class AccommodationModel
    {
        public AccommodationModel(Accommodation accommodation)
        {
            this.Id = accommodation.Id;
            this.Address = accommodation.Address;
            this.Rule = accommodation.Rule;
            this.Title = accommodation.Title;
            this.BedroomsCount = accommodation.BedroomsCount;
            this.City = new CityModel(accommodation.City);
            this.AccommodationType = new AccommodationTypeModel(accommodation.AccommodationType);
            this.Rule = accommodation.Rule;
            this.AccommodationRooms = accommodation.Rooms.Select(s => new AccommodationRoomModel(s)).ToList();
            this.AccommodationImages = accommodation.Images.Select(s => new AccommodationImageModel(s)).ToList();
        }
        public long Id { get; set; }
        public CityModel City { get; private set; }
        public AccommodationTypeModel AccommodationType { get; private set; }
        public string Title { get; private set; }
        public string Address { get; private set; }
        public int BedroomsCount { get; private set; }
        public string Rule { get; private set; }
        public List<AccommodationRoomModel> AccommodationRooms { get; }
        public List<AccommodationImageModel> AccommodationImages { get; }

    }
    public class AccommodationCreateModel
    {
        [Required]
        public long CityId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Title { get; set; }

        [Required]
        [MaxLength(200)]
        public string Address { get; set; }

        [Required]
        public int BedroomsCount { get; set; }

        [MaxLength(500)]
        public string Rule { get; set; }

        [Required]
        public long TypeId { get; set; }
        public List<AccommodationRoomModel> Rooms { get; set; } = new List<AccommodationRoomModel>();
        public List<AccommodationImageModel> Images { get; set; } = new List<AccommodationImageModel>();
    }

    public class AccommodationUpdateModel
    {
        [Required]
        public long Id { get; set; }

        [Required]
        public long CityId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Title { get; set; }

        [Required]
        [MaxLength(200)]
        public string Address { get; set; }

        [Required]
        public int BedroomsCount { get; set; }

        [MaxLength(500)]
        public string Rule { get; set; }

        [Required]
        public long TypeId { get; set; }
        public List<AccommodationRoomModel> Rooms { get; set; } = new List<AccommodationRoomModel>();
        public List<AccommodationImageModel> Images { get; set; } = new List<AccommodationImageModel>();
    }
}
