using System.ComponentModel.DataAnnotations.Schema;

namespace GymReyevacije.Models
{
    public class Grupa : Entitet
    {
        public string? Naziv { get; set; }
        
        public string? Zaposlenik { get; set; }
    }
}
