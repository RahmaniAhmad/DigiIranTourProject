using System.ComponentModel.DataAnnotations;

namespace app_api.Model
{
    public class LoginCode
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public required string Code { get; set; }
        public required DateTime CreationDateTime{ get; set; }
        public int UserId { get;set; }
        public required User User { get; set; }
    }
}
