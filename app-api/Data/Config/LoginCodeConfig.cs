using app_api.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace app_api.Data.Config
{
    public class LoginCodeConfig : IEntityTypeConfiguration<LoginCode>
    {
        public void Configure(EntityTypeBuilder<LoginCode> builder)
        {
            builder.HasKey(o => o.Id);
            builder.Property(t => t.Code).IsRequired().HasMaxLength(6);
        }
    }
}
