using Microsoft.AspNetCore.Mvc;
using MediatR;
using app_api.Queries;

namespace app_api.Controllers.Queries
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccommodationImageQueryController : Controller
    {
        private readonly IMediator mediator;

        public AccommodationImageQueryController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet("GetById/{id}")]
        public async Task<IActionResult> GetById(int id, CancellationToken cancellationToken = default)
        {
            try
            {
                var query = new  GetAccommodationImageByIdQuery.Query(id);
                var accommodation = await mediator.Send(query, cancellationToken);

                if (accommodation == null)
                {
                    return NotFound();
                }

                return Ok(accommodation);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpGet("GetByAccommodationId/{accommodationId}")]
        public async Task<IActionResult> GetByAccommodationId(long accommodationId, CancellationToken cancellationToken = default)
        {
            try
            {
                var query = new GetAccommodationImagesByAccommodationIdQuery.Query(accommodationId);
                var accommodation = await mediator.Send(query, cancellationToken);

                if (accommodation == null)
                {
                    return NotFound();
                }

                return Ok(accommodation);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
