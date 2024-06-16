using app_api.Dtos.Province;
using Microsoft.AspNetCore.Mvc;
using app_api.Contracts;

namespace app_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProvinceController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public ProvinceController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(CancellationToken cancellationToken = default)
        {
            try
            {
                var provinces = await _unitOfWork.Provinces.GetAllAsync(cancellationToken);
                var data = provinces.Select(s => new ProvinceDto(s)).ToList();

                return Ok(new { data });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
