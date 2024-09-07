using Microsoft.AspNetCore.Mvc;
using MediatR;
using app_api.Queries;

namespace app_api.Controllers.Queries
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccommodationQueryController : Controller
    {
        private readonly IMediator mediator;
        public AccommodationQueryController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet("GetList")]
        public async Task<IActionResult> GetList(int skip = 0, int take = 10, CancellationToken cancellationToken = default)
        {
            try
            {
                var query = new GetAccommodationListQuery.Query(skip, take);
                var result = await mediator.Send(query, cancellationToken);

                return Ok(new { result.Items, result.TotalCount });
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
                var query = new GetAccommodationByIdQuery.Query(id);
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

        [HttpGet("GetByType/{type}")]
        public async Task<IActionResult> GetByType(string type, int skip = 0, int take = 10, CancellationToken cancellationToken = default)
        {
            try
            {
                var query = new GetAccommodationListByTypeQuery.Query(type, skip, take);
                var result = await mediator.Send(query, cancellationToken);

                return Ok(result);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
