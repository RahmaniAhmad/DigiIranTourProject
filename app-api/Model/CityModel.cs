using app_api.Domain;

namespace app_api.Model
{
    public class CityModel
    {
        public CityModel(City city)
        {
            this.Id = city.Id;
            this.Name = city.Name;
            this.Province=new ProvinceModel(city.Province);
        }
        public long Id { get; set; }
        public ProvinceModel Province { get; set; }
        public string Name { get; set; }
    }
}
