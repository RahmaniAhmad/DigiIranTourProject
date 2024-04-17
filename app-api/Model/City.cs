using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace app_api.Model
{
    public class City
    {
        [Key]
        public int Id { get; set; } 
            
        public required string Name { get; set; }

        [ForeignKey("Province")]
        public int ProvinceId { get; set; }
        public required Province Province { get; set; }
        public ICollection<Accommodation>? Accommodations { get; }


    }
}
