namespace app_api.Dtos.User
{
    public class UserDto
    {
        public int Id { get; set; }
        public required string Mobile { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
    }
}
