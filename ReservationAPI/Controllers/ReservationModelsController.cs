using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReservationAPI.Data;
using ReservationAPI.Models;

namespace ReservationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationModelsController : ControllerBase
    {
        private readonly ReservationDbContext _context;

        public ReservationModelsController(ReservationDbContext context)
        {
            _context = context;
        }

        // GET: api/ReservationModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReservationModel>>> GetreservationDetails()
        {
            return await _context.reservationDetails.ToListAsync();
        }

        // GET: api/ReservationModels/5
        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<ActionResult<ReservationModel>> GetReservationModel([FromRoute] Guid id)
        {
            var reservationModel = await _context.reservationDetails.FirstOrDefaultAsync(x=> x.Id == id);

            if (reservationModel == null)
            {
                return NotFound();
            }

            return Ok(reservationModel);
        }

        // PUT: api/ReservationModels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> PutReservationModel(Guid id, ReservationModel reservationModel)
        {
            var reservation = await _context.reservationDetails.FindAsync(id);
            if(reservation == null)
            {
                return NotFound();
            }
            reservation.Name = reservationModel.Name;
            reservation.Email = reservationModel.Email;
            reservation.Phone = reservationModel.Phone;
            reservation.ReservationDate = reservationModel.ReservationDate;
            reservation.SessionType = reservationModel.SessionType;
            reservation.ReservationLocation = reservationModel.ReservationLocation;
            reservation.AdditionalInfo = reservationModel.AdditionalInfo;

            await _context.SaveChangesAsync();
            return Ok(reservation);
        }

        // POST: api/ReservationModels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ReservationModel>> PostReservationModel(ReservationModel reservationModel)
        {
            _context.reservationDetails.Add(reservationModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReservationModel", new { id = reservationModel.Id }, reservationModel);
        }

        // DELETE: api/ReservationModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReservationModel(Guid id)
        {
            var reservationModel = await _context.reservationDetails.FindAsync(id);
            if (reservationModel == null)
            {
                return NotFound();
            }

            _context.reservationDetails.Remove(reservationModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReservationModelExists(Guid id)
        {
            return _context.reservationDetails.Any(e => e.Id == id);
        }
    }
}
