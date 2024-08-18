namespace app_api.Dtos.AccommodationType
{
    public class AccommodationTypeDto
    {
        public AccommodationTypeDto(Domain.AccommodationType accommodationType)
        {
            this.Id = accommodationType.Id;
            this.Title = accommodationType.Title;
            this.EnTitle = accommodationType.EnTitle;
        }

        public long Id { get; set; }
        public string Title { get; set; }
        public string EnTitle { get; set; }
    }
}
