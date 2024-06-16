using app_api.Dtos.Province;

namespace app_api.Dtos.City
{
    public class CityDto
    {
        public CityDto(Domain.City city)
        {
            this.Id = city.Id;
            this.Name = city.Name;
            this.ProvinceName = city.Province.Name;
            //this.Province = new ProvinceDto(city.Province);
        }
        public long Id { get; set; }
        public string Name { get; set; }
        public string ProvinceName { get; set; }
        //public ProvinceDto Province { get; set; }

    }
}
