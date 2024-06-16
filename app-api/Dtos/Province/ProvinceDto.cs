namespace app_api.Dtos.Province
{
    public class ProvinceDto
    {
        public ProvinceDto(Domain.Province province)
        {
            this.Id = province.Id;
            this.Name = province.Name;
        }
        public long Id { get; set; }
        public string Name { get; set; }
    }
}
