using System.ComponentModel.DataAnnotations;

namespace app_api.Domain
{
    public class AccommodationType
    {
        public AccommodationType(string name)
        {
            this.Name = name;
        }

        [Key]
        public int Id { get; set; }
        [Required]
        public  string Name { get; set; }
        public ICollection<Accommodation>? Accommodations { get; set; }
    }
}
