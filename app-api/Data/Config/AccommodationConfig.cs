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
            builder.Property(a => a.BedroomsCount).IsRequired();
            builder.Property(a => a.Rule).IsRequired().HasMaxLength(500);

            builder.HasOne(a => a.City)
                   .WithMany(c => c.Accommodations)
                   .HasForeignKey(a => a.CityId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(a => a.AccommodationType)
                    .WithMany()
                    .HasForeignKey(a => a.AccommodationTypeId);

            builder.HasMany(h => h.AccommodationRooms)
                   .WithOne(w=>w.Accommodation)
                   .HasForeignKey(h=>h.AccommodationId);

            builder.HasMany(h => h.AccommodationImages)
                   .WithOne(w => w.Accommodation)
                   .HasForeignKey(h => h.AccommodationId);
        }
    }
}