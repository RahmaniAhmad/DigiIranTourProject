namespace app_api.Dtos.Auth
{
    public class LoginDto
    {
        public required string Mobile { get; set; }
        public required string VerificationCode { get; set; }
    }
}
