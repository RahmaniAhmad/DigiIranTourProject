using app_api.Data.Config;
using app_api.Domain;
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
            modelBuilder.ApplyConfiguration(new CityConfig());
            modelBuilder.ApplyConfiguration(new AccommodationConfig());
            modelBuilder.ApplyConfiguration(new AccommodationTypeConfig());
            modelBuilder.ApplyConfiguration(new AccommodationRoomConfig());
            modelBuilder.ApplyConfiguration(new AccommodationImageConfig());
            modelBuilder.ApplyConfiguration(new UserConfig());
            modelBuilder.ApplyConfiguration(new LoginCodeConfig());
        }

        public DbSet<Province> Provinces { get; set; }
        public DbSet<City> Cities { get; set; } // Added DbSet for City
        public DbSet<Accommodation> Accommodations { get; set; }
        public DbSet<AccommodationType> AccommodationTypes { get; set; } // Added DbSet for AccommodationType
        public DbSet<AccommodationRoom> AccommodationRooms { get; set; } // Added DbSet for AccommodationRoom
        public DbSet<AccommodationImage> AccommodationImages { get; set; } // Added DbSet for AccommodationImage
        public DbSet<User> Users { get; set; }
        public DbSet<LoginCode> LoginCodes { get; set; }
        public DbSet<Role> Roles { get; set; }

    }
}

