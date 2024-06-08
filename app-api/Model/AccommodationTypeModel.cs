using app_api.Domain;

namespace app_api.Model
{
    public class AccommodationTypeModel
    {
        public AccommodationTypeModel(AccommodationType accommodationType)
        {
            this.Id = accommodationType.Id;
            this.Name = accommodationType.Name;
        }
        public long Id { get; set; }
        public string Name { get; set; }
    }
}
