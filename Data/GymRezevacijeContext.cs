using GymReyevacije.Models;
using Microsoft.EntityFrameworkCore;

namespace GymReyevacije.Data
{
    public class GymRezevacijeContext:DbContext
    {
        public GymRezevacijeContext(DbContextOptions<GymRezevacijeContext> opcije) : base(opcije) 
        {
        
        }


        public DbSet<Grupa> Grupe { get; set; }


    }
}
