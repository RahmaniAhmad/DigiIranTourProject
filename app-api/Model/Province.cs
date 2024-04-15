using System.ComponentModel.DataAnnotations;

namespace app_api.Model
{
    public class Province
    {
        [Key]
        public int Id { get; set; }
        public required string Name { get; set; }
    }
}
