using GymReyevacije.Data;
using GymReyevacije.Models;
using Microsoft.AspNetCore.Mvc;

namespace GymReyevacije.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class GrupaController : ControllerBase
    {
        // dependency injection
        // 1. definirati privatno svojstvo
        private readonly GymRezevacijeContext _context;

        // dependecy injection
        // 2. proslijediš instancu kroz konstruktor
        public GrupaController(GymRezevacijeContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Grupe);
        }

        [HttpGet]
        [Route("{sifra:int}")]
        public IActionResult GetBySifra(int sifra)
        {
            return Ok(_context.Grupe.Find(sifra));
        }



        [HttpPost]
        public IActionResult Post(Grupa grupa)
        {
            _context.Grupe.Add(grupa);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created, grupa);
        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, Grupa grupa) 
        {
            var grupaBaza = _context.Grupe.Find(sifra);

            // za sada ručno, kasnije mapper
            grupaBaza.Naziv = grupa.Naziv;
            grupaBaza.Zaposlenik = grupa.Zaposlenik;

            _context.Grupe.Update(grupaBaza);
            _context.SaveChanges();

            return Ok(new {poruka = "Uspješno promjenjeno"});
        
        }



        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {
            var grupaBaza = _context.Grupe.Find(sifra);

            _context.Grupe.Remove(grupaBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspješno obrisano" });

        }


    }
}
