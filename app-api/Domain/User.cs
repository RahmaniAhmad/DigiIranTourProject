using System.ComponentModel.DataAnnotations;

namespace app_api.Domain
{
    public class User
    {
        public User(string firstName, string lastName, string email, string mobile)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Email = email;
            this.Mobile = mobile;
            this.IsActive = true;
        }

        public User(string mobile)
        {
            this.Mobile = mobile;
            this.IsActive = false;
        }

        [Key]
        public int Id { get; set; }

        [Required]
        public string Mobile { get; set; }
        [Required]
        public bool IsActive { get; set; } = false;
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
        public ICollection<LoginCode>? LoginCodes { get; set; }
    }
}
