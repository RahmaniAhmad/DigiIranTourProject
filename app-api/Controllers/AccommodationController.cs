using Microsoft.AspNetCore.Mvc;
using app_api.Dtos.Accommodation;
using app_api.Services;
using app_api.Model;
using app_api.Model.Accommodation;
using app_api.Contracts;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace app_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccommodationController : Controller
    {
        private readonly AccommodationService _accommodationService;
        private readonly IUnitOfWork _unitOfWork;

        public AccommodationController(AccommodationService accommodationService, IUnitOfWork unitOfWork)
        {
            _accommodationService = accommodationService;
            _unitOfWork = unitOfWork;
        }

        [HttpGet("GetAccommodations")]
        public async Task<IActionResult> GetAccommodations([FromQuery] int skip = 0,[FromQuery]int take=10, CancellationToken cancellationToken = default)
        {
            try
            {

                var query = _unitOfWork.Accommodations.GetAll();

                var totalCount = await query.CountAsync();
                var accommodations = await query.Skip(skip).Take(take).ToListAsync(cancellationToken);
                var data = accommodations.Select(s => new AccommodationDto(s));

                return Ok(new { data, totalCount });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetMyAccommodations")]
        public async Task<IActionResult> GetMyAccommodations([FromQuery] int skip = 0, [FromQuery] int take = 10, CancellationToken cancellationToken = default)
        {
            try
            {

                var query = _unitOfWork.Accommodations.GetAll();

                var totalCount = await query.CountAsync();
                var accommodations = await query.Skip(skip).Take(take).ToListAsync(cancellationToken);
                var data = accommodations.Select(s => new AccommodationDto(s));

                return Ok(new { data, totalCount });
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
                var accommodation = await _unitOfWork.Accommodations.GetByIdAsync(id, cancellationToken);

                if (accommodation == null)
                {
                    return NotFound();
                }
                var result = new AccommodationDto(accommodation);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetByType/{type}")]
        public async Task<IActionResult> GetByTypeId(string type, CancellationToken cancellationToken = default)
        {
            try
            {
                var accommodations = await _unitOfWork.Accommodations.GetByTypeAsync(type, cancellationToken);
                var data = accommodations.Select(s => new AccommodationDto(s));

                return Ok(new { data, totalCount = 1 });
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }


        [HttpPost]
        public async Task<ActionResult> Create([FromBody] AccommodationCreateModel model, CancellationToken cancellationToken = default)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var result = await _accommodationService.CreateAsync(model, cancellationToken);
                return CreatedAtAction(nameof(GetById), new { id = result.Id }, new AccommodationDto(result));
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while creating the accommodation.");
            }
        }

        [HttpPut("{id}")]
        public virtual async Task<ActionResult> Update(long id, [FromForm] AccommodationUpdateModel model, CancellationToken cancellationToken = default)
        {
            try
            {
                var updatedAccommodation = await _accommodationService.UpdateAsync(id, model, cancellationToken);
                if (updatedAccommodation == null)
                {
                    return NotFound();
                }
                var accommodationDto = new AccommodationDto(updatedAccommodation);
                return Ok(accommodationDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while updating the accommodation.");
            }
        }

        [HttpDelete("{id}")]
        public virtual async Task<ActionResult> Delete(long id, CancellationToken cancellationToken = default)
        {
            try
            {
                await _accommodationService.DeleteAsync(id, cancellationToken);
            }
            catch(Exception ex)
            {
                return NotFound();
            }

            return Ok();

        }

    }
}
