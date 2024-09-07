using Microsoft.AspNetCore.Mvc;
using app_api.Dtos.Accommodation;
using app_api.Services;
using app_api.Contracts;
using Microsoft.EntityFrameworkCore;
using MediatR;
using app_api.Commands;
using app_api.Queries;

namespace app_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReserveController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMediator mediator;
        public ReserveController(IUnitOfWork unitOfWork, IMediator mediator)
        {
            _unitOfWork = unitOfWork;
            this.mediator = mediator;
        }

        [HttpGet("GetReserves")]
        public async Task<IActionResult> GetAll([FromQuery] int skip = 0, [FromQuery] int take = 10, CancellationToken cancellationToken = default)
        {
            try
            {
                var query = new GetReserveListQuery.Query(skip, take);
                var result = await this.mediator.Send(query, cancellationToken);

                return Ok(result);
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
                var query = new GetReserveByIdQuery.Query(id);
                var data = await this.mediator.Send(query, cancellationToken);

                if (data == null)
                {
                    return NotFound();
                }

                return Ok(data);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }


        //[HttpPost]
        //public async Task<ActionResult> Create([FromBody] CreateReserveCommand.Command command, CancellationToken cancellationToken = default)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    try
        //    {
        //        var reserve = await this.mediator.Send(command);


        //        return CreatedAtAction(nameof(GetById), new { id = reserve.Id });
        //    }
        //    catch (Exception)
        //    {
        //        return StatusCode(500, "An error occurred while creating the accommodation.");
        //    }
        //}
    }
}
