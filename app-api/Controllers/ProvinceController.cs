using app_api.Data;
using app_api.Dtos.Province;
using app_api.Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace app_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProvinceController : Controller
    {
        private readonly AppDbContext _dbContext;
        public ProvinceController(AppDbContext dbContext) {
            _dbContext = dbContext;
        }

        [Authorize(Policy = "Admin")]
        [HttpGet("GetAllPaged")]
        public IActionResult GetAllPaged(int page, string? filter)
        {
            if (page == 0)
            {
                page = 1;
            }

            var query = string.IsNullOrWhiteSpace(filter) ?
                _dbContext.Provinces :
                _dbContext.Provinces.Where(w => w.Name.Contains(filter));

            var data = query.Skip((page - 1) * 10).Take(10)
                .Select(s => new ProvinceDto { Id = s.Id, Name = s.Name })
                .ToList();

            var count = query.Count();

            return Ok(new { data, count });
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var data = _dbContext.Provinces
                            .Select(s => new ProvinceDto { Id = s.Id, Name = s.Name })
                            .ToList();

            var count = data.Count;

            return Ok(new { data, count });
        }

        
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var data = _dbContext.Provinces.Find(id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

        [Authorize(Policy = "Admin")]
        [HttpPost]
        public virtual IActionResult Create([FromBody] Province Province)
        {
            var result = _dbContext.Provinces.Add(Province);
            _dbContext.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { Province.Id }, Province);
        }

        [Authorize(Policy = "Admin")]
        [HttpPut("{id}")]
        public virtual ActionResult Update(int id, [FromBody] Province data)
        {
            var item = _dbContext.Provinces.Find(id);
            if (item == null)
            {
                return NotFound();
            }

            item.Name = data.Name;

            _dbContext.SaveChanges();
            return Ok(data);
        }

        [Authorize(Policy = "Admin")]
        [HttpDelete("{id}")]
        public virtual ActionResult Delete(int id)
        {
            var item = _dbContext.Provinces.Find(id);

            if (item == null)
                return NotFound();

            _dbContext.Provinces.Remove(item);
            _dbContext.SaveChanges();
            return Ok();
            
        }

     
    }
}
