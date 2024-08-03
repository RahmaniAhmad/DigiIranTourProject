using Microsoft.AspNetCore.Mvc;
using app_api.Dtos.Accommodation;
using app_api.Services;
using app_api.Model;
using app_api.Model.Accommodation;
using app_api.Contracts;
using Microsoft.EntityFrameworkCore;
using System.Threading;

namespace app_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccommodationImageController : Controller
    {
        private readonly AccommodationImageService _accommodationImageService;
        private readonly IUnitOfWork _unitOfWork;

        public AccommodationImageController(AccommodationImageService accommodationImageService, IUnitOfWork unitOfWork)
        {
            _accommodationImageService = accommodationImageService;
            _unitOfWork = unitOfWork;
        }
        [HttpGet("GetByAccommodationId/{accommodationId}")]
        public async Task<IActionResult> GetByAccommodationId(long accommodationId, CancellationToken cancellationToken = default)
        {
            try
            {
                var accommodationImages = await _unitOfWork.AccommodationImages.GetByAccommodationId(accommodationId);

                var data = accommodationImages.Select(s => new AccommodationImageDto(s));

                return Ok(new { data });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetMyAccommodationImage/{id}")]
        public async Task<IActionResult> GetMyAccommodationId(int id, CancellationToken cancellationToken = default)
        {
            try
            {
                var accommodationImage = await _unitOfWork.AccommodationImages.GetByIdAsync(id, cancellationToken);

                if (accommodationImage == null)
                {
                    return NotFound();
                }
                var result = new AccommodationImageDto(accommodationImage);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAll(int accommodationId, [FromQuery] int skip = 0,[FromQuery]int take=10, CancellationToken cancellationToken = default)
        {
            try
            {

                var query = await _unitOfWork.AccommodationImages.GetByIdAsync(accommodationId, cancellationToken);
                
                return Ok(new { });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetById/{id}")]
        public async Task<IActionResult> GetById(int id, CancellationToken cancellationToken = default)
        {
            try
            {
                var accommodationImage = await _unitOfWork.AccommodationImages.GetByIdAsync(id, cancellationToken);

                if (accommodationImage == null)
                {
                    return NotFound();
                }
                var result = new AccommodationImageDto(accommodationImage);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromForm] AccommodationImageCreateModel model, CancellationToken cancellationToken = default)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                if (model.AccommodationImage!= null && model.AccommodationImage.Length > 0)
                {
                    var uniqueFileName = $"{Guid.NewGuid().ToString()}_{model.AccommodationImage.FileName}";
                    DateTime now = DateTime.Now;
                    var uploadsFolder = Path.Combine("uploads", now.Year.ToString(), now.Month.ToString("00"), now.Day.ToString("00"));
                    Directory.CreateDirectory(uploadsFolder);
                    var filePath = Path.Combine(uploadsFolder, uniqueFileName);

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await model.AccommodationImage.CopyToAsync(stream);
                    }

                    model.Url = Path.Combine(now.Year.ToString(), now.Month.ToString("00"), now.Day.ToString("00"), uniqueFileName);
                }

                await _accommodationImageService.CreateAsync(model, cancellationToken);
                return StatusCode(201);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while creating the accommodation.");
            }
        }
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, [FromForm] AccommodationImageUpdateModel model, CancellationToken cancellationToken = default)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var existingImage = await _unitOfWork.AccommodationImages.GetByIdAsync(id, cancellationToken);
                if (existingImage == null)
                {
                    return NotFound();
                }

                if (model.AccommodationImage != null && model.AccommodationImage.Length > 0)
                {
                    var uniqueFileName = $"{Guid.NewGuid().ToString()}_{model.AccommodationImage.FileName}";
                    DateTime now = DateTime.Now;
                    var uploadsFolder = Path.Combine("uploads", now.Year.ToString(), now.Month.ToString("00"), now.Day.ToString("00"));
                    Directory.CreateDirectory(uploadsFolder);
                    var filePath = Path.Combine(uploadsFolder, uniqueFileName);

                    // Delete the old file if exists
                    var oldFilePath = Path.Combine("uploads", existingImage.Url);
                    if (System.IO.File.Exists(oldFilePath))
                    {
                        System.IO.File.Delete(oldFilePath);
                    }

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await model.AccommodationImage.CopyToAsync(stream);
                    }

                    model.Url = Path.Combine(now.Year.ToString(), now.Month.ToString("00"), now.Day.ToString("00"), uniqueFileName);
                }

                await _accommodationImageService.UpdateAsync(id, model, cancellationToken);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while updating the accommodation.");
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id, CancellationToken cancellationToken = default)
        {
            try
            {
                var existingImage = await _unitOfWork.AccommodationImages.GetByIdAsync(id, cancellationToken);
                if (existingImage == null)
                {
                    return NotFound();
                }

                // Delete the file if exists
                var filePath = Path.Combine("uploads", existingImage.Url);
                if (System.IO.File.Exists(filePath))
                {
                    System.IO.File.Delete(filePath);
                }

                await _accommodationImageService.DeleteAsync(id, cancellationToken);
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while deleting the accommodation.");
            }
        }
    }
}
