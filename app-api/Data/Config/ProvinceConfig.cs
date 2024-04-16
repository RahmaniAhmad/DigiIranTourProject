using app_api.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace app_api.Data.Config
{
    public class ProvinceConfig : IEntityTypeConfiguration<Province>
    {
        public void Configure(EntityTypeBuilder<Province> builder)
        {
            builder.HasKey(o => o.Id);
            builder.Property(t => t.Name).IsRequired().HasMaxLength(30);
            builder.HasMany(t => t.Cities).WithOne().OnDelete(DeleteBehavior.Restrict); ;
        }
    }
}
