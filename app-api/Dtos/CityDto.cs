namespace app_api.Dtos
{
    public class CityDto
    {
        public int Id { get; set; }
        public required string ProvinceName { get; set; }
        public required string Name { get; set; }
    }
}
