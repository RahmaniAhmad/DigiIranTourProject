using app_api.Data;
using app_api.Dtos.AccommodationType;
using Microsoft.AspNetCore.Mvc;
using app_api.Contracts;

namespace app_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccommodationTypeController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public AccommodationTypeController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(CancellationToken cancellationToken = default)
        {
            try
            {
                var cities = await _unitOfWork.AccommodationTypes.GetAllAsync(cancellationToken);
                var data = cities.Select(s => new AccommodationTypeDto(s)).ToList();

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
            var accommodationType = await _unitOfWork.AccommodationTypes.GetByIdAsync(id, cancellationToken);
            var data = new AccommodationTypeDto(accommodationType);

            if (data == null)
            {
                return NotFound();
            }
            return Ok(data);
        }
    }
}
