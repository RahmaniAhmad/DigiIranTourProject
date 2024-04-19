using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace app_api.Model
{
    public class City
    {
        public City(string name,int provinceId) { 
            this.Name = name;  
            this.ProvinceId = provinceId;
        }

        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [ForeignKey("Province")]
        public int ProvinceId { get; set; }
        public Province? Province { get; set; }
        public ICollection<Accommodation>? Accommodations { get; }


    }
}
