using GymReyevacije.Data;
using GymReyevacije.Models;
using Microsoft.AspNetCore.Mvc;

namespace GymReyevacije.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class KorisnikController : ControllerBase
    {
        // dependency injection
        // 1. definirati privatno svojstvo
        private readonly GymReyevacijeContext _context;

        // dependecy injection
        // 2. proslijediš instancu kroz konstruktor
        public KorisnikController(GymReyevacijeContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Korisnici);
        }

        [HttpGet]
        [Route("{sifra:int}")]
        public IActionResult GetBySifra(int sifra)
        {
            return Ok(_context.Korisnici.Find(sifra));
        }



        [HttpPost]
        public IActionResult Post(Korisnik korisnik)
        {
            _context.Korisnici.Add(korisnik);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created, korisnik);
        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, Korisnik korisnik) 
        {
            var korisnikBaza = _context.Korisnici.Find(sifra);

            // za sada ručno, kasnije mapper
            korisnikBaza.Ime = korisnik.Ime;
            korisnikBaza.Prezime = korisnik.Prezime;
            korisnikBaza.BrojTelefona = korisnik.BrojTelefona;
            korisnikBaza.Adresa = korisnik.Adresa;
            korisnikBaza.Grupa = korisnik.Grupa;

            _context.Korisnici.Update(korisnikBaza);
            _context.SaveChanges();

            return Ok(new {poruka = "Uspješno promjenjeno"});
        
        }



        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {
            var korisnikBaza = _context.Korisnici.Find(sifra);

            _context.Korisnici.Remove(korisnikBaza);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspješno obrisano" });

        }


    }
}
