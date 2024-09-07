using Microsoft.AspNetCore.Mvc;
using MediatR;
using app_api.Commands;

namespace app_api.Controllers.Commands
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccommodationCommandController : Controller
    {
        private readonly IMediator mediator;
        public AccommodationCommandController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult> Create([FromBody] CreateAccommodationCommand.CreateAccommodationRequest request, CancellationToken cancellationToken = default)
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
        public virtual async Task<ActionResult> Update(long id, [FromForm] UpdateAccommodationCommand.UpdateAccommodationRequest request, CancellationToken cancellationToken = default)
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
        public virtual async Task<ActionResult> Delete(DeleteAccommodationCommand.DeleteAccommodationRequest request, CancellationToken cancellationToken = default)
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
