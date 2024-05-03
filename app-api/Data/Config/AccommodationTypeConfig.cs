using app_api.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace app_api.Data.Config
{
    public class AccommodationTypeConfig : IEntityTypeConfiguration<AccommodationType>
    {
        public void Configure(EntityTypeBuilder<AccommodationType> builder)
        {
            builder.HasKey(o => o.Id);
            builder.Property(t => t.Name).IsRequired().HasMaxLength(30);

            builder.HasMany(t => t.Accommodations)
                .WithOne(t => t.AccommodationType)
                .HasForeignKey(t => t.AccommodationTypeId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
