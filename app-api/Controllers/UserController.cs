using app_api.Data;
using app_api.Dtos.AccommodationType;
using app_api.Dtos.Province;
using app_api.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;

namespace app_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly AppDbContext _dbContext;
        public UserController(AppDbContext dbContext) {
            _dbContext = dbContext;
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var data = _dbContext.Users
                            .Select(s => new UserGetDto
                            {
                                Id = s.Id,
                                FirstName = s.FirstName,
                                LastName = s.LastName,
                                Email = s.Email,
                                Mobile = s.Mobile,
              
                            })
                            .ToList();

            var count = data.Count;

            return Ok(new { data, count });
        }

        [HttpGet("GetAllPaged")]
        public IActionResult GetAllPaged(int page, string? filter)
        {
            if (page == 0)
            {
                page = 1;
            }

            var query = string.IsNullOrWhiteSpace(filter) ?
                _dbContext.Users :
                _dbContext.Users
                .Where(w => w.Mobile.Contains(filter))
                .Where(w => w.FirstName.Contains(filter))
                .Where(w => w.LastName.Contains(filter))
                .Where(w => w.Email.Contains(filter));

            var data = query.Skip((page - 1) * 10).Take(10)
                .Select(s => new UserGetDto
                {
                    Id = s.Id,
                    FirstName = s.FirstName,
                    LastName = s.LastName,
                    Email = s.Email,
                    Mobile = s.Mobile,
                })
                .ToList();

            var count = query.Count();

            return Ok(new { data, count });
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var data = _dbContext.Users.Find(id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        [HttpPost("GenerateCode")]
        public virtual IActionResult GetCode([FromBody] UserCreateDto dto)
        {
            var code = "";
            var existUser = _dbContext.Users.Where(w => w.Mobile == dto.Mobile).FirstOrDefault();
            if (existUser != null)
            {
                var loginCode = new LoginCode(existUser.Id);
                _dbContext.LoginCodes.Add(loginCode);
                code = loginCode.Code;

            }
            else
            {
                var newUser = new User(dto.Mobile);
                _dbContext.Users.Add(newUser);
                var loginCode = new LoginCode(newUser.Id);
                _dbContext.LoginCodes.Add(loginCode);
                code = loginCode.Code;
            }
            _dbContext.SaveChanges();
            return CreatedAtAction(nameof(GetCode), code);
        }

        [HttpPost("SignIn")]
        public virtual IActionResult SignIn([FromBody] UserSigninDto dto)
        {
            var compareDateTime = DateTime.Now.AddMinutes(-20);
            var loginCode = _dbContext.LoginCodes.Where(w => w.User.Mobile == dto.Mobile)
                .Where(w => w.CreationDateTime > compareDateTime).OrderBy(o => o.Id).LastOrDefault();

            if (loginCode == null)
            {
                return NotFound(loginCode);
            }

            if (loginCode.Code != dto.Code)
            {
                return Unauthorized(new { dto.Code });
            }

            var user = _dbContext.Users.Where(w => w.Mobile == dto.Mobile).FirstOrDefault();
            if (user != null)
            {
                user.IsActive = true;
            }
            _dbContext.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { user.Id }, user);
        }

        [HttpPut("{id}")]
        public virtual ActionResult Update(int id, [FromForm] UserUpdateDto data)
        {
            var item = _dbContext.Users.Find(id);
            if (item == null)
            {
                return NotFound();
            }

            item.FirstName = data.FirstName;
            item.LastName = data.LastName;
            item.Email = data.Email;

            _dbContext.SaveChanges();
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public virtual ActionResult Deactivate(int id)
        {
            var item = _dbContext.Users.Find(id);

            if (item == null)
                return NotFound();

            item.IsActive = false;
            _dbContext.SaveChanges();
            return Ok();

        }


    }
}
