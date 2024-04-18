﻿using System.Collections.Generic;
using System.Data.Common;
using System.Diagnostics;
using System.Reflection.Emit;
using app_api.Data.Config;
using app_api.Model;
using Microsoft.EntityFrameworkCore;

namespace app_api.Data
{
    public class AppDbContext : DbContext
    {
     
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProvinceConfig());
            modelBuilder.ApplyConfiguration(new ProvinceConfig());
            modelBuilder.ApplyConfiguration(new ProvinceConfig());
            modelBuilder.ApplyConfiguration(new ProvinceConfig());
        }

        public DbSet<Province> Provinces { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<AccommodationType> AccommodationTypes { get; set; }
        public DbSet<Accommodation> Accommodations { get; set; }

    }
}
