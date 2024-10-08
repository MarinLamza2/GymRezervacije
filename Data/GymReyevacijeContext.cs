using GymReyevacije.Models;
using Microsoft.EntityFrameworkCore;

namespace GymReyevacije.Data
{
    public class GymReyevacijeContext:DbContext
    {
        public GymReyevacijeContext(DbContextOptions<GymReyevacijeContext> opcije) : base(opcije) 
        {
        
        }


        public DbSet<Korisnik> Korisnici { get; set; }


    }
}
