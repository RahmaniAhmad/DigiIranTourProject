using app_api.Domain;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

namespace app_api.Data.Config
{
    public class AccommodationConfig : IEntityTypeConfiguration<Accommodation>
    {
        public void Configure(EntityTypeBuilder<Accommodation> builder)
        {
            builder.HasKey(a => a.Id);
            builder.Property(a => a.Title).IsRequired().HasMaxLength(100);
            builder.Property(a => a.Address).IsRequired().HasMaxLength(200);
            builder.Property(a => a.Rule).HasMaxLength(1000);

            builder.HasOne(c => c.City)
                   .WithMany(p => p.Accommodations)
                   .HasForeignKey(c => c.CityId)
                   .OnDelete(DeleteBehavior.NoAction);
            
            builder.HasOne(c => c.AccommodationType)
                .WithMany(p => p.Accommodations)
                .HasForeignKey(c => c.AccommodationTypeId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasMany(h => h.AccommodationRooms)
                   .WithOne(w => w.Accommodation)
                   .HasForeignKey(h => h.AccommodationId)
                    .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(h => h.AccommodationImages)
                   .WithOne(w => w.Accommodation)
                   .HasForeignKey(h => h.AccommodationId)
                    .OnDelete(DeleteBehavior.Cascade);
        }
    }
}