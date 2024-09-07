using app_api.Domain.Base;

namespace app_api.Domain
{
    public class Role : AggregateRoot
    {
        public virtual required string Name { get; set; }

        public Role(string name)
        {
            Name = name;
        }
    }
}
