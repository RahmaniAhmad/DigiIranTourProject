using app_api.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace app_api.Data.Config
{
    public class ReserveConfig : IEntityTypeConfiguration<Reserve>
    {
        public void Configure(EntityTypeBuilder<Reserve> builder)
        {
            builder.HasKey(a => a.Id);
            builder.Property(a => a.From).IsRequired();
            builder.Property(a => a.To).IsRequired();

            builder.HasOne(r => r.User) 
                .WithMany()
                .HasForeignKey("UserId");

            builder.HasOne(r => r.AccommodationRoom)
            .WithMany()
            .HasForeignKey("AccommodationRoomId");
        }
    }
}