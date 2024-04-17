using app_api.Model;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace app_api.Data.Config
{
    public class CityConfig : IEntityTypeConfiguration<City>
    {
        public void Configure(EntityTypeBuilder<City> builder)
        {
            builder.HasKey(o => o.Id);
            builder.Property(t => t.Name).IsRequired().HasMaxLength(30);

            builder.HasMany(t => t.Accommodations)
                .WithOne(t => t.City)
                .HasForeignKey(t => t.CityId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
