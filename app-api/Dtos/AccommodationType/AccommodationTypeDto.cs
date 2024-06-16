namespace app_api.Dtos.AccommodationType
{
    public class AccommodationTypeDto
    {
        public AccommodationTypeDto(Domain.AccommodationType accommodationType)
        {
            this.Id = accommodationType.Id;
            this.Name = accommodationType.Name;
        }

        public long Id { get; set; }
        public string Name { get; set; }
    }
}
