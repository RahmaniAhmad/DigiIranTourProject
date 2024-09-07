using app_api.Domain.Base;

namespace app_api.Domain
{
    public class LoginCode : Entity
    {
        public virtual string Code { get; set; }
        public virtual DateTime SentAt { get; set; } = DateTime.Now;
        public virtual User User { get; set; }

        public LoginCode(string code, User user)
        {
            this.Code = code;
            this.User = user;
        }

        private LoginCode() { }
    }
}
