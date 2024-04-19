namespace app_api.Dtos.City
{
    public class CityGetDto
    {
        public int Id { get; set; }
        public required string ProvinceName { get; set; }
        public required string Name { get; set; }
    }
}
