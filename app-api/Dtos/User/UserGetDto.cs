﻿namespace app_api.Dtos.AccommodationType
{
    public class UserGetDto
    {
        public int Id { get; set; }
        public required string Mobile { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
    }
}