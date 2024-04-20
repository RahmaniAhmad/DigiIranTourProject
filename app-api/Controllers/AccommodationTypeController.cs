using app_api.Data;
using app_api.Dtos;
using app_api.Dtos.AccommodationType;
using app_api.Model;
using Microsoft.AspNetCore.Mvc;

namespace app_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccommodationTypeController : Controller
    {
        private readonly AppDbContext _dbContext;
        public AccommodationTypeController(AppDbContext dbContext) {
            _dbContext = dbContext;
        }

        [HttpGet("GetAllPaged")]
        public IActionResult GetAllPaged(int page, string? filter)
        {
            if (page == 0)
            {
                page = 1;
            }

            var query = string.IsNullOrWhiteSpace(filter) ?
                _dbContext.AccommodationTypes :
                _dbContext.AccommodationTypes.Where(w => w.Name.Contains(filter));

            var data = query.Skip((page - 1) * 10).Take(10)
                .Select(s => new AccommodationTypeDto { Id = s.Id, Name = s.Name })
                .ToList();

            var count = query.Count();

            return Ok(new { data, count });
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var data = _dbContext.AccommodationTypes
                            .Select(s => new AccommodationTypeDto { Id = s.Id, Name = s.Name })
                            .ToList();

            var count = data.Count;

            return Ok(new { data, count });
        }


        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var data = _dbContext.AccommodationTypes.Find(id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }
        [HttpPost]
        public virtual IActionResult Create([FromBody] AccommodationType data)
        {
            var result = _dbContext.AccommodationTypes.Add(data);
            _dbContext.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { data.Id }, data);
        }

        [HttpPut("{id}")]
        public virtual ActionResult Update(int id, [FromBody] AccommodationType data)
        {
            var item = _dbContext.AccommodationTypes.Find(id);
            if (item == null)
            {
                return NotFound();
            }

            item.Name = data.Name;

            _dbContext.SaveChanges();
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public virtual ActionResult Delete(int id)
        {
            var item = _dbContext.AccommodationTypes.Find(id);

            if (item == null)
                return NotFound();

            _dbContext.AccommodationTypes.Remove(item);
            _dbContext.SaveChanges();
            return Ok();
            
        }

     
    }
}
