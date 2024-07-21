using app_api.Domain;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace app_api.Data.Config
{
    public class AccommodationImageConfig : IEntityTypeConfiguration<AccommodationImage>
    {
        public void Configure(EntityTypeBuilder<AccommodationImage> builder)
        {
            builder.HasKey(i => i.Id);
            builder.Property(i => i.Url).IsRequired().HasMaxLength(1000);
        }
    }
}