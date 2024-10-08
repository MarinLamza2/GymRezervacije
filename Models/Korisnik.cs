using System.ComponentModel.DataAnnotations.Schema;

namespace GymReyevacije.Models
{
    public class Korisnik : Entitet
    {
        public string? Ime { get; set; }
        
        public string? Prezime { get; set; }
        public int? BrojTelefona  { get; set; }
        public string? Adresa { get; set; }
        public string? Grupa { get; set; }
    }
}
