using app_api.Model;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;

namespace app_api.Data.Config
{
    public class AccommodationConfig : IEntityTypeConfiguration<Accommodation>
    {
        public void Configure(EntityTypeBuilder<Accommodation> builder)
        {
            builder.HasKey(o => o.Id);
            builder.Property(t => t.Title).IsRequired().HasMaxLength(200);
        }
    }
}