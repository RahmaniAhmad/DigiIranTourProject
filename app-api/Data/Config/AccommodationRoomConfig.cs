using app_api.Domain;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace app_api.Data.Config
{
    public class AccommodationRoomConfig : IEntityTypeConfiguration<AccommodationRoom>
    {
        public void Configure(EntityTypeBuilder<AccommodationRoom> builder)
        {
            builder.HasKey(r => r.Id);
            builder.Property(r => r.Title).IsRequired().HasMaxLength(200);
            builder.Property(r => r.BedsCount).IsRequired();
            builder.Property(r => r.Capacity).IsRequired();
            builder.Property(r => r.Price).IsRequired().HasColumnType("decimal(18,2)");
            builder.Property(r => r.Description).IsRequired().HasMaxLength(1000);

            builder.HasOne(r => r.Accommodation)
                   .WithMany(a => a.Rooms)
                   .HasForeignKey(r => r.AccommodationId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}