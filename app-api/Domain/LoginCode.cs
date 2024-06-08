using app_api.Domain.Base;
using System.ComponentModel.DataAnnotations;

namespace app_api.Domain
{
    public class LoginCode : Entity
    {
        public required string Code { get; set; }
        public DateTime SentAt { get; set; } = DateTime.Now;
    }
}
