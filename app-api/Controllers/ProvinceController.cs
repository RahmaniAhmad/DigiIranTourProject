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
    public class ProvinceController : Controller
    {
        private readonly AppDbContext _dbContext;
        public ProvinceController(AppDbContext dbContext) {
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
                _dbContext.Provinces.Skip((page - 1) * 10).Take(10)
                .Select(s=>new ProvinceDto() { Id=s.Id,Name=s.Name}).ToList() :
                _dbContext.Provinces.Where(w => w.Name.Contains(filter))
                .Skip((page - 1) * 10).Take(10)
                .Select(s => new ProvinceDto() { Id = s.Id, Name = s.Name }).ToList();

            var count = _dbContext.Provinces.Count();
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
        [HttpPost]
        public virtual IActionResult Create([FromBody] Province Province)
        {
            var result = _dbContext.Provinces.Add(Province);
            return CreatedAtAction(nameof(GetById), new { Province.Id }, Province);
        }

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

        [HttpDelete("{id}")]
        public virtual ActionResult Delete(int id)
        {
            var item = _dbContext.Provinces.Find(id);

            if (item == null)
                return NotFound();

            _dbContext.Provinces.Remove(item);
            return Ok();
            
        }

     
    }
}
