using Microsoft.AspNetCore.Mvc;
using app_api.Commands;
using MediatR;
using static app_api.Commands.CreateAccommodationImageCommand;

namespace app_api.Controllers.Commands
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccommodationImageCommandController : Controller
    {
        private readonly IMediator mediator;

        public AccommodationImageCommandController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromForm] CreateAccommodationImageRequest request, CancellationToken cancellationToken = default)
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
        [HttpPut]
        public async Task<ActionResult> Update([FromForm] UpdateAccommodationImageCommand.UpdateAccommodationImageRequest request, CancellationToken cancellationToken = default)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var updatedImage = await mediator.Send(request);
                return Ok(updatedImage);
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return StatusCode(500, "An error occurred while updating the accommodation image.");
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(DeleteAccommodationImageCommand.DeleteAccommodationImageRequest request, CancellationToken cancellationToken = default)
        {
            try
            {
                await mediator.Send(request);
                return NoContent();
            }
            catch (KeyNotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return StatusCode(500, "An error occurred while deleting the accommodation image.");
            }
        }

    }
}
