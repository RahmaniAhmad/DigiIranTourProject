using app_api.Data;
using app_api.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using app_api.Dtos.Accommodation;

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
                                Capacity = s.Capacity,
                                Price = s.Price,
                                ImageName = s.ImageName
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
                _dbContext.Accommodations.Include(i=>i.City) :
                _dbContext.Accommodations.Where(w => w.Title.Contains(filter));

            var data = query.Skip((page - 1) * 10).Take(10)
                .Select(s => new AccommodationGetDto
                {
                    Id = s.Id,
                    ProvinceName = s.City.Province.Name,
                    CityName = s.City.Name,
                    AccommodationTypeName = s.AccommodationType.Name,
                    Title = s.Title,
                    BedroomsCount = s.BedroomsCount,
                    BedsCount = s.BedsCount,
                    Capacity = s.Capacity,
                    Price = s.Price,
                    ImageName = s.ImageName
                })
                .ToList();

            var count = query.Count();

            return Ok(new { data, count });
        }

        [HttpGet("GetByType")]
        public IActionResult GetByType(int page, string type)
        {
            if (page == 0)
            {
                page = 1;
            }

            var query = string.IsNullOrWhiteSpace(type) ?
                _dbContext.Accommodations.Include(i => i.City) :
                _dbContext.Accommodations.Where(w => w.AccommodationType.Name==type);

            var data = query.Skip((page - 1) * 10).Take(10)
                .Select(s => new AccommodationGetDto
                {
                    Id = s.Id,
                    ProvinceName = s.City.Province.Name,
                    CityName = s.City.Name,
                    AccommodationTypeName = s.AccommodationType.Name,
                    Title = s.Title,
                    BedroomsCount = s.BedroomsCount,
                    BedsCount = s.BedsCount,
                    Capacity = s.Capacity,
                    Price = s.Price,
                    ImageName = s.ImageName
                })
                .ToList();

            var count = query.Count();

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
        public virtual async Task<ActionResult> Update(int id, [FromForm] AccommodationUpdateDto data)
        {
            var item = _dbContext.Accommodations.Find(id);
            if (item == null)
            {
                return NotFound();
            }

            item.CityId = data.CityId;
            item.AccommodationTypeId = data.AccommodationTypeId;
            item.Title = data.Title;
            item.Address = data.Address;
            item.BedroomsCount = data.BedroomsCount;
            item.BedsCount = data.BedsCount;
            item.Capacity = data.Capacity;
            item.Price = data.Price;

            if (data.AccommodationImage != null && data.AccommodationImage.Length > 0)
            {
                var uniqueFileName = $"{Guid.NewGuid().ToString()}_{data.AccommodationImage.FileName}";
                DateTime now = DateTime.Now;
                var uploadsFolder = Path.Combine("uploads", now.Year.ToString(), now.Month.ToString("00"), now.Day.ToString("00"));
                Directory.CreateDirectory(uploadsFolder);
                var filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await data.AccommodationImage.CopyToAsync(stream);
                }

                item.ImageName = Path.Combine(now.Year.ToString(), now.Month.ToString("00"), now.Day.ToString("00"), uniqueFileName);
            }

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
