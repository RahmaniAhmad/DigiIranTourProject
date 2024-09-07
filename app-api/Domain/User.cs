using app_api.Domain.Base;

namespace app_api.Domain
{
    public class User : AggregateRoot
    {
        public virtual string Mobile { get; set; }
        public virtual bool IsActive { get; set; } = false;
        public virtual string? FirstName { get; set; }
        public virtual string? LastName { get; set; }
        public virtual string? Email { get; set; }
        public virtual List<Role> Roles { get; set; }
        public virtual ICollection<LoginCode> LoginCodes { get; set; }

        public User(string mobile)
        {
            Mobile = mobile;
        }

        public void UpdateDetails(string firstName ,string lastName, string email)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Email = email;
        }

        public void ActivateUser()
        {
            this.IsActive = true;
        }

        public void DeactivateUser()
        {
            this.IsActive = false;
        }

        public string CreateLoginCode()
        {
            var code = "";
            Random random = new Random();
            for (int i = 0; i < 6; i++)
            {
                code += random.Next(1, 9);
            }

            return code;
        }

        public void SendLoginCode(string code)
        {
            //var code = "";
            //Random random = new Random();
            //for (int i = 0; i < 6; i++)
            //{
            //    code += random.Next(1, 9);
            //}
            
            //var loginCode = new LoginCode
            //{
            //    Code = code,
            //    SentAt = DateTime.Now
            //};


            //LoginCodes.Add(loginCode);


            // Simulate sending SMS (replace with actual SMS gateway integration)
            Console.WriteLine($"Sending verification code {code} to mobile number {Mobile}");

            // Actual SMS sending logic would go here (e.g., using Twilio or another SMS service)
            // SmsService.SendSms(MobileNumber, $"Your verification code is {code}");
        }

        public bool ValidateVerificationCode(string code)
        {
            // Code is valid if it matches and was sent within the last 10 minutes
            var loginCode = LoginCodes.FirstOrDefault(vc => vc.Code == code && (DateTime.Now - vc.SentAt).TotalMinutes < 10);
            if (loginCode == null)
            {
                return false;
            }
            ActivateUser();

            return true;
        }

        public void AddRole(Role role)
        {
            if (!Roles.Contains(role))
            {
                Roles.Add(role);
            }
        }

        public void RemoveRole(Role role)
        {
            if (Roles.Contains(role))
            {
                Roles.Remove(role);
            }
        }
    }
}
