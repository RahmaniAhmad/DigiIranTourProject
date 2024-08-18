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
            builder.Property(t => t.Title).IsRequired().HasMaxLength(50);
            builder.Property(t => t.EnTitle).IsRequired().HasMaxLength(50);
        }
    }
}
