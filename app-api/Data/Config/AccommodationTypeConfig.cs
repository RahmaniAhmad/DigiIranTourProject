using app_api.Model;
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
            builder.HasMany(t => t.Accommodations).WithOne().
                HasForeignKey(t=>t.AccommodationTypeId).
                HasForeignKey(t=>t.CityId);
            builder
                .HasData(
                [
                    new AccommodationType {Id=1, Name="هتل"},
                    new AccommodationType {Id=2, Name="بومگردی"},
                ]);
        }
    }
}
