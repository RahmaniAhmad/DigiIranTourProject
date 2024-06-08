using app_api.Domain;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace app_api.Data.Config
{
    public class CityConfig : IEntityTypeConfiguration<City>
    {
        public void Configure(EntityTypeBuilder<City> builder)
        {
            builder.HasKey(c => c.Id);

            builder.Property(c => c.Name).IsRequired().HasMaxLength(100);

            builder.HasOne(c => c.Province)
                   .WithMany(p => p.Cities)
                   .HasForeignKey(c => c.ProvinceId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(c => c.Accommodations)
               .WithOne(a => a.City)
               .HasForeignKey(a => a.CityId)
               .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
