using app_api.Dtos.City;
using Microsoft.AspNetCore.Mvc;
using app_api.Contracts;

namespace app_api.Controllers.Queries
{
    [ApiController]
    [Route("api/[controller]")]
    public class CityQueryController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public CityQueryController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(CancellationToken cancellationToken = default)
        {
            try
            {
                var cities = await _unitOfWork.Cities.GetListAsync(cancellationToken);
                var data = cities.Select(s => new CityDto(s)).ToList();

                return Ok(new { data });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> getbyid(long id, CancellationToken cancellationToken = default)
        {
            var city = await _unitOfWork.Cities.GetByIdAsync(id, cancellationToken);
            var data = new CityDto(city);

            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }

    }
}
