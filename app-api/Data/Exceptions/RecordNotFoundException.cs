using System.Runtime.Serialization;

namespace app_api.Data.Exceptions
{
    [Serializable]
    public class RecordNotFoundException : ApplicationException
    {
        public RecordNotFoundException()
            : base("Item Not Found.")
        {
        }

        public RecordNotFoundException(string message)
            : base(message)
        {
        }

        public RecordNotFoundException(string message, Exception innerException)
            : base(message, innerException)
        {
        }

        protected RecordNotFoundException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
    }
}
