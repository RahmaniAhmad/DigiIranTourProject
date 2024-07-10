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
    public class AccommodationRoomController : Controller
    {
        private readonly AccommodationRoomService _accommodationRoomService;
        private readonly IUnitOfWork _unitOfWork;

        public AccommodationRoomController(AccommodationRoomService accommodationRoomService, IUnitOfWork unitOfWork)
        {
            _accommodationRoomService = accommodationRoomService;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] int skip = 0,[FromQuery]int take=10, CancellationToken cancellationToken = default)
        {
            try
            {

                var query = _unitOfWork.AccommodationRooms.GetAll();

                var totalCount = await query.CountAsync();
                var accommodations = await query.Skip(skip).Take(take).ToListAsync(cancellationToken);
                var data = accommodations.Select(s => new AccommodationRoomDto(s));

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
                var accommodationRoom = await _unitOfWork.AccommodationRooms.GetByIdAsync(id, cancellationToken);

                if (accommodationRoom == null)
                {
                    return NotFound();
                }
                var result = new AccommodationRoomDto(accommodationRoom);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] AccommodationRoomCreateModel model, CancellationToken cancellationToken = default)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var result = await _accommodationRoomService.CreateAsync(model, cancellationToken);
                return CreatedAtAction(nameof(GetById), new { id = result.Id }, new AccommodationRoomDto(result));
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while creating the accommodation.");
            }
        }

        [HttpPut("{id}")]
        public virtual async Task<ActionResult> Update(long id, [FromForm] AccommodationRoomUpdateModel model, CancellationToken cancellationToken = default)
        {
            try
            {
                var updatedAccommodationRoom = await _accommodationRoomService.UpdateAsync(id, model, cancellationToken);
                if (updatedAccommodationRoom == null)
                {
                    return NotFound();
                }
                var result = new AccommodationRoomDto(updatedAccommodationRoom);
                return Ok(result);
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
                await _accommodationRoomService.DeleteAsync(id, cancellationToken);
            }
            catch(Exception ex)
            {
                return NotFound();
            }

            return Ok();

        }

    }
}
