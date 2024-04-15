using System.ComponentModel.DataAnnotations;

namespace app_api.Model
{
    public class City
    {
        [Key]
        public int Id { get; set; } 
            
        public required string Name { get; set; }
    }
}
