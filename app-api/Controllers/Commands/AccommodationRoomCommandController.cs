using Microsoft.AspNetCore.Mvc;
using MediatR;
using app_api.Commands;

namespace app_api.Controllers.Commands
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccommodationRoomCommandController : Controller
    {
        private readonly IMediator mediator;

        public AccommodationRoomCommandController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] CreateAccommodationRoomCommand.CreateAccommodationRoomRequest request, CancellationToken cancellationToken = default)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var accommodation = await mediator.Send(request);

                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while creating the accommodation.");
            }
        }

        [HttpPut("{id}")]
        public virtual async Task<ActionResult> Update(long id, [FromForm] UpdateAccommodationRoomCommand.UpdateAccommodationRoomRequest request, CancellationToken cancellationToken = default)
        {
            try
            {
                var accommodation = await mediator.Send(request);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "An error occurred while updating the accommodation.");
            }
        }

        [HttpDelete("{id}")]
        public virtual async Task<ActionResult> Delete(DeleteAccommodationRoomCommand.DeleteAccommodationRoomRequest request, CancellationToken cancellationToken = default)
        {
            try
            {
                var accommodation = await mediator.Send(request);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound();
            }

        }

    }
}
