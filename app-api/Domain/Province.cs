using System.ComponentModel.DataAnnotations;

namespace app_api.Domain
{
    public class Province
    {
        [Key]
        public int Id { get; set; }
        public required string Name { get; set; }
        public ICollection<City>? Cities { get;  }
    }
}
