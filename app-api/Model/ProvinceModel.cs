using app_api.Domain;

namespace app_api.Model
{
    public class ProvinceModel
    {
        public ProvinceModel(Province province)
        {
            this.Id = province.Id;
            this.Name = province.Name;
        }

        public long Id { get; set; }
        public string Name { get; set; }
    }
}
