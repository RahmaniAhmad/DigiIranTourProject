using System.ComponentModel.DataAnnotations;

namespace app_api.Model
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public required string Mobile { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public ICollection<LoginCode>? LoginCodes { get; set; }


    }
}
