namespace app_api.Dtos.AccommodationType
{
    public class AccommodationGetDto
    {
        public int Id { get; set; }
        public required string ProvinceName { get; set; }
        public required string CityName { get; set; }
        public required string AccommodationTypeName {  get; set; }
        public required string Title { get; set; }
        public string? Address { get; set; }
        public string? BedroomsCount { get; set; }
        public string? BedsCount { get; set; }
        public string? Capacity { get; set; }
        public string? ImageName { get; set; }
    }
}
