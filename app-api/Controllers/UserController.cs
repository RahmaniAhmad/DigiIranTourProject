using app_api.Data;
using app_api.Helpers;
using app_api.Domain;
using Microsoft.AspNetCore.Mvc;
using app_api.Dtos.User;
using app_api.Dtos;

namespace app_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IConfiguration _config;

        private readonly AppDbContext _dbContext;
        public UserController(IConfiguration config, AppDbContext dbContext) {
            _config = config;
            _dbContext = dbContext;
        }

        //[HttpGet("GetAll")]
        //public IActionResult GetAll()
        //{
        //    var data = _dbContext.Users
        //                    .Select(s => new UserGetDto
        //                    {
        //                        Id = s.Id,
        //                        FirstName = s.FirstName,
        //                        LastName = s.LastName,
        //                        Email = s.Email,
        //                        Mobile = s.Mobile,

        //                    })
        //                    .ToList();

        //    var count = data.Count;

        //    return Ok(new { data, count });
        //}

        //[HttpGet("GetAllPaged")]
        //public IActionResult GetAllPaged(int page, string? filter)
        //{
        //    if (page == 0)
        //    {
        //        page = 1;
        //    }

        //    var query = string.IsNullOrWhiteSpace(filter) ?
        //        _dbContext.Users :
        //        _dbContext.Users
        //        .Where(w => w.Mobile.Contains(filter))
        //        .Where(w => w.FirstName.Contains(filter))
        //        .Where(w => w.LastName.Contains(filter))
        //        .Where(w => w.Email.Contains(filter));

        //    var data = query.Skip((page - 1) * 10).Take(10)
        //        .Select(s => new UserGetDto
        //        {
        //            Id = s.Id,
        //            FirstName = s.FirstName,
        //            LastName = s.LastName,
        //            Email = s.Email,
        //            Mobile = s.Mobile,
        //        })
        //        .ToList();

        //    var count = query.Count();

        //    return Ok(new { data, count });
        //}

        //[HttpGet("{id}")]
        //public IActionResult GetById(int id)
        //{
        //    var data = _dbContext.Users.Find(id);
        //    if (data == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(data);
        //}


        //[HttpPost("refresh")]
        //public IActionResult Refresh(TokenResponse tokenResponse)
        //{
        //    // For simplicity, assume the refresh token is valid and stored securely
        //    // var storedRefreshToken = _userService.GetRefreshToken(userId);

        //    // Verify refresh token (validate against the stored token)
        //    // if (storedRefreshToken != tokenResponse.RefreshToken)
        //    //    return Unauthorized();

        //    // For demonstration, let's just generate a new access token
        //    var newAccessToken = TokenUtils.GenerateAccessTokenFromRefreshToken(tokenResponse.RefreshToken, _config["Jwt:Secret"]);

        //    var response = new TokenResponse
        //    {
        //        AccessToken = newAccessToken,
        //        RefreshToken = tokenResponse.RefreshToken // Return the same refresh token
        //    };

        //    return Ok(response);
        //}

        //[HttpPut("{id}")]
        //public virtual ActionResult Update(int id, [FromForm] UserUpdateDto data)
        //{
        //    var item = _dbContext.Users.Find(id);
        //    if (item == null)
        //    {
        //        return NotFound();
        //    }

        //    item.FirstName = data.FirstName;
        //    item.LastName = data.LastName;
        //    item.Email = data.Email;

        //    _dbContext.SaveChanges();
        //    return Ok(data);
        //}

        //[HttpDelete("{id}")]
        //public virtual ActionResult Deactivate(int id)
        //{
        //    var item = _dbContext.Users.Find(id);

        //    if (item == null)
        //        return NotFound();

        //    item.IsActive = false;
        //    _dbContext.SaveChanges();
        //    return Ok();

        //}


    }
}
