using app_api.Data;
using app_api.Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using app_api.Dtos.Accommodation;
using app_api.Services;
using System.Threading;
using app_api.Model;

namespace app_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccommodationController : Controller
    {
        private readonly AccommodationService _accommodationService;

        public AccommodationController(AccommodationService accommodationService)
        {
            _accommodationService = accommodationService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] int skip = 0,[FromQuery]int take=10, CancellationToken cancellationToken = default)
        {
            try
            {
                var (accommodations, totalCount) = await _accommodationService.GetAllAsync(skip, take, cancellationToken);
                var result =accommodations.Select(s => new AccommodationModel(s));
                return Ok(new { result, totalCount });
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
                var accommodation = await _accommodationService.GetByIdAsync(id, cancellationToken);

                if (accommodation == null)
                {
                    return NotFound();
                }
                var result = new AccommodationModel(accommodation);
                return Ok(result);
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

            var accommodationCreateModel = new AccommodationCreateModel()
            {
                Address = model.Address,
                BedroomsCount = model.BedroomsCount,
                Rule = model.Rule,
                CityId = model.CityId,
                Title = model.Title,
                Images = model.Images,
                Rooms = model.Rooms,
                TypeId = model.TypeId,
            };
            try
            {
                var result = await _accommodationService.CreateAsync(accommodationCreateModel, cancellationToken);
                return CreatedAtAction(nameof(GetById), new { id = result.Id }, new AccommodationModel(result));
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }


        //[HttpGet("GetListByType")]
        //public async Task<IActionResult> GetListByType([FromQuery] int skip = 1, [FromQuery] int take = 10, [FromQuery] string filter = "", CancellationToken cancellationToken = default)
        //{
        //    try
        //    {
        //        var (accommodations, totalCount) = await _accommodationService.GetListByTypeAsync(skip, take, filter, cancellationToken);
        //        accommodations.Select(s => new AccommodationModel(s));
        //        return Ok(new { accommodations, totalCount });
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, ex.Message);
        //    }
        //}

        //[HttpGet("GetById/{id}")]
        //public async Task<IActionResult> GetById(int id, CancellationToken cancellationToken = default)
        //{
        //    var data = await _accommodationService.GetByIdAsync(id, cancellationToken);

        //    if (data == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(data);
        //}


        //[HttpPost]
        //public async Task<ActionResult> Create([FromBody] AccommodationCreateModel model, CancellationToken cancellationToken = default)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    var accommodationCreateModel = new AccommodationCreateModel()
        //    {
        //        Address = model.Address,
        //        BedroomsCount = model.BedroomsCount,
        //        Rule = model.Rule,
        //        CityId = model.CityId,
        //        Title = model.Title,
        //        Images = model.Images,
        //        Rooms = model.Rooms,
        //        TypeId = model.TypeId,
        //    };
        //    try
        //    {
        //        var result= await _accommodationService.CreateAsync(accommodationCreateModel, cancellationToken);
        //        return CreatedAtAction(nameof(GetById), new { id = result.Id }, new AccommodationModel(result));
        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, ex.Message);
        //    }
        //}

        //[HttpPut("{id}")]
        //public virtual async Task<ActionResult> Update(int id, [FromForm] AccommodationUpdateDto data)
        //{
        //    var item = _dbContext.Accommodations.Find(id);
        //    if (item == null)
        //    {
        //        return NotFound();
        //    }

        //    item.CityId = data.CityId;
        //    item.AccommodationTypeId = data.AccommodationTypeId;
        //    item.Title = data.Title;
        //    item.Address = data.Address;
        //    item.BedroomsCount = data.BedroomsCount;
        //    item.BedsCount = data.BedsCount;
        //    item.Capacity = data.Capacity;
        //    item.Price = data.Price;

        //    if (data.AccommodationImage != null && data.AccommodationImage.Length > 0)
        //    {
        //        var uniqueFileName = $"{Guid.NewGuid().ToString()}_{data.AccommodationImage.FileName}";
        //        DateTime now = DateTime.Now;
        //        var uploadsFolder = Path.Combine("uploads", now.Year.ToString(), now.Month.ToString("00"), now.Day.ToString("00"));
        //        Directory.CreateDirectory(uploadsFolder);
        //        var filePath = Path.Combine(uploadsFolder, uniqueFileName);

        //        using (var stream = new FileStream(filePath, FileMode.Create))
        //        {
        //            await data.AccommodationImage.CopyToAsync(stream);
        //        }

        //        item.ImageName = Path.Combine(now.Year.ToString(), now.Month.ToString("00"), now.Day.ToString("00"), uniqueFileName);
        //    }

        //    _dbContext.SaveChanges();
        //    return Ok(data);
        //}

        //[HttpDelete("{id}")]
        //public virtual ActionResult Delete(int id)
        //{
        //    var item = _dbContext.Accommodations.Find(id);

        //    if (item == null)
        //        return NotFound();

        //    _dbContext.Accommodations.Remove(item);
        //    _dbContext.SaveChanges();
        //    return Ok();

        //}


    }
}
