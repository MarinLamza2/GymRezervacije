﻿using System.ComponentModel.DataAnnotations;

namespace GymReyevacije.Models
{
    public abstract class Entitet
    {
        [Key] // dio EF ORM-a
        public int? Id { get; set; }
    }
}
