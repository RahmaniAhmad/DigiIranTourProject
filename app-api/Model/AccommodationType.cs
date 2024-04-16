using System.ComponentModel.DataAnnotations;

namespace app_api.Model
{
    public class AccommodationType
    {
        [Key]
        public int Id { get; set; }  
        public required string Name { get; set; }
        public ICollection<Accommodation> Accommodations { get; set; }
    }
}
