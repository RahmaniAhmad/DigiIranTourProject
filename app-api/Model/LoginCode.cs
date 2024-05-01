using System.ComponentModel.DataAnnotations;

namespace app_api.Model
{
    public class LoginCode
    {
        public LoginCode(int userId)
        {
            this.UserId = userId;
        }

        private static string GetCode()
        {
            var result = "";
            Random random = new Random();
            for (int i = 0; i < 6; i++)
            {
                result += random.Next(1, 9);
            }
            return result;
        }
        [Key]
        public int Id { get; set; }
        [Required]
        public string Code { get; set; } = GetCode();
        [Required]
        public DateTime CreationDateTime { get; set; } = DateTime.Now;
        [Required]
        public int UserId { get; set; }
        public User User { get;  }

    }
}
