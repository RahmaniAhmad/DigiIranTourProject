﻿namespace app_api.Dtos.User
{
    public class UserSigninDto
    { 
        public required string Mobile { get; set; }
        public required string VerificationCode { get; set; }
    }
}
