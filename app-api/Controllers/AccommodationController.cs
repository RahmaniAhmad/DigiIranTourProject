using app_api.Data;
using app_api.Dtos.AccommodationType;
using app_api.Dtos.Province;
using app_api.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace app_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccommodationController : Controller
    {
        private readonly AppDbContext _dbContext;
        public AccommodationController(AppDbContext dbContext) {
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
                _dbContext.Accommodations.Include(i=>i.City) :
                _dbContext.Accommodations.Where(w => w.Title.Contains(filter));

            var data = query.Skip((page - 1) * 10).Take(10)
                .Select(s => new AccommodationGetDto { 
                    Id = s.Id,
                    ProvinceName=s.City.Province.Name,
                    CityName=s.City.Name,
                    AccommodationTypeName=s.AccommodationType.Name,
                    Title = s.Title,
                    BedroomsCount=s.BedroomsCount,
                    BedsCount=s.BedsCount,
                    Capacity=s.Capacity })
                .ToList();

            var count = query.Count();

            return Ok(new { data, count });
        }

        [HttpGet("GetAll")]
        public IActionResult GetAll()
        {
            var data = _dbContext.Accommodations
                            .Select(s => new AccommodationGetDto
                            {
                                Id = s.Id,
                                ProvinceName = s.City.Province.Name,
                                CityName = s.City.Name,
                                AccommodationTypeName = s.AccommodationType.Name,
                                Title = s.Title,
                                BedroomsCount = s.BedroomsCount,
                                BedsCount = s.BedsCount,
                                Capacity = s.Capacity
                            })
                            .ToList();

            var count = data.Count;

            return Ok(new { data, count });
        }


        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var data = _dbContext.Accommodations.Find(id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }
        [HttpPost]
        public virtual IActionResult Create([FromBody] AccommodationCreateDto dto)
        {
            var accommodation = new Accommodation(dto.Title, dto.AccommodationTypeId, dto.CityId);

            var result = _dbContext.Accommodations.Add(accommodation);
            _dbContext.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { accommodation.Id }, accommodation);
        }

        [HttpPut("{id}")]
        public virtual ActionResult Update(int id, [FromBody] AccommodationUpdateDto data)
        {
            var item = _dbContext.Accommodations.Find(id);
            if (item == null)
            {
                return NotFound();
            }

            item.Title = data.Title;

            _dbContext.SaveChanges();
            return Ok(data);
        }

        [HttpDelete("{id}")]
        public virtual ActionResult Delete(int id)
        {
            var item = _dbContext.Accommodations.Find(id);

            if (item == null)
                return NotFound();

            _dbContext.Accommodations.Remove(item);
            _dbContext.SaveChanges();
            return Ok();
            
        }

     
    }
}
