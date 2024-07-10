namespace app_api.Dtos.AccommodationImage
{
    public class AccommodationImageDto
    {
        public AccommodationImageDto(Domain.AccommodationImage accommodationImage)
        {
            this.Url = accommodationImage.Url;
            this.Title = accommodationImage.Title;
        }

        public string Url { get; set; }
        public string? Title { get; set; }
    }
}
