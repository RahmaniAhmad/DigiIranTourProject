namespace app_api.Domain.Base
{
    public class AggregateRoot : Entity
    {
        public virtual bool CanBeDeleted()
        {
            return false;
        }
    }
}
