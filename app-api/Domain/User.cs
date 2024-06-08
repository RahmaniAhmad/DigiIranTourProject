using app_api.Domain.Base;

namespace app_api.Domain
{
    public class User : AggregateRoot
    {
        public string Mobile { get; set; } // Mobile number as username
        public bool IsActive { get; set; } = false;
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public List<Role> Roles { get; set; }
        public ICollection<LoginCode> LoginCodes { get; set; }

        public User()
        {
            LoginCodes = new List<LoginCode>();
            Roles = new List<Role>();
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

        public void SendLoginCode()
        {
            var code = "";
            Random random = new Random();
            for (int i = 0; i < 6; i++)
            {
                code += random.Next(1, 9);
            }

            var codeEntry = new LoginCode
            {
                Code = code,
                SentAt = DateTime.Now
            };

            LoginCodes.Add(codeEntry);


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
