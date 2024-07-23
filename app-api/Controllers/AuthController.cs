using app_api.Data;
using app_api.Helpers;
using app_api.Domain;
using Microsoft.AspNetCore.Mvc;
using app_api.Dtos.User;
using app_api.Dtos;
using app_api.Dtos.Auth;

namespace app_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly IConfiguration config;

        private readonly AppDbContext dbContext;
        public AuthController(IConfiguration config, AppDbContext dbContext) {
            this.config = config;
            this.dbContext = dbContext;
        }

        [HttpPost("SendVerificationCode")]
        public virtual  IActionResult SendVerificationCode([FromBody] UserCreateDto dto)
        {
            var existUser = this.dbContext.Users.Where(w => w.Mobile == dto.Mobile).FirstOrDefault();
            if (existUser == null)
            {
                var newUser = new User(dto.Mobile);
                this.dbContext.Users.Add(newUser);

                var code= newUser.CreateLoginCode();

                newUser.SendLoginCode(code);

                var loginCode = new LoginCode(code, newUser);

                this.dbContext.LoginCodes.Add(loginCode);
            }
            else
            {
                var code = existUser.CreateLoginCode();

                existUser.SendLoginCode(code);

                var loginCode = new LoginCode(code, existUser);

                this.dbContext.LoginCodes.Add(loginCode);

            }
            this.dbContext.SaveChanges();
            return Ok();
        }

        [HttpPost("Login")]
        public IActionResult Login([FromBody] LoginDto dto)
        {
            var compareDateTime = DateTime.Now.AddDays(-4);
            var loginCode = this.dbContext.LoginCodes.Where(w => w.User.Mobile == dto.Mobile)
                .Where(w => w.SentAt > compareDateTime).OrderBy(o => o.Id).LastOrDefault();

            if (loginCode == null)
            {
                return NotFound(loginCode);
            }

            if (loginCode.Code != dto.VerificationCode)
            {
                return Unauthorized();
            }
            var user = this.dbContext.Users.Where(w => w.Mobile == dto.Mobile).FirstOrDefault();
            if (user == null)
            {
                return NotFound(dto.Mobile);
            }
            else
            {
                user.IsActive = true;
            }

            var accessToken = TokenUtils.GenerateAccessToken(user, secret: config["Jwt:Secret"]);
            var refreshToken = TokenUtils.GenerateRefreshToken();


            this.dbContext.SaveChanges();

            var response = new TokenResponse
            {
                AccessToken = accessToken,
                RefreshToken = refreshToken
            };

            return Ok(response);
        }
    }
}
