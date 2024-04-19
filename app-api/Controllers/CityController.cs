using app_api.Data;
using app_api.Dtos;
using app_api.Model;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace app_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CityController : Controller
    {
        private readonly AppDbContext _dbContext;
        public CityController(AppDbContext dbContext) {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAll(int page, string? filter)
        {
            if (page == 0)
            {
                page = 1;
            }
            var data = string.IsNullOrWhiteSpace(filter) ?
                _dbContext.Cities.Skip((page - 1) * 10).Take(10)
                .Select(s=>new CityDto() { Id=s.Id,Name=s.Name, ProvinceName=s.Province.Name}).ToList() :
                _dbContext.Cities.Where(w => w.Name.Contains(filter))
                .Skip((page - 1) * 10).Take(10)
                .Select(s => new CityDto() { Id = s.Id, Name = s.Name, ProvinceName = s.Province.Name }).ToList();

            var count = string.IsNullOrWhiteSpace(filter) ? _dbContext.Cities.Count():
                _dbContext.Cities.Where(w => w.Name.Contains(filter)).Count();
            return Ok(new { data, count });
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var data = _dbContext.Cities.Find(id);
            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }
        [HttpPost]
        public virtual IActionResult Create([FromBody] City City)
        {
            var result = _dbContext.Cities.Add(City);
            _dbContext.SaveChanges();
            return CreatedAtAction(nameof(GetById), new { City.Id }, City);
        }

        [HttpPut("{id}")]
        public virtual ActionResult Update(int id, [FromBody] City data)
        {
            var item = _dbContext.Cities.Find(id);
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
            var item = _dbContext.Cities.Find(id);

            if (item == null)
                return NotFound();

            _dbContext.Cities.Remove(item);
            _dbContext.SaveChanges();
            return Ok();
            
        }

     
    }
}
