using System.ComponentModel.DataAnnotations;

namespace app_api.Domain
{
    public class Role
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public required string Name { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }

    }
}
