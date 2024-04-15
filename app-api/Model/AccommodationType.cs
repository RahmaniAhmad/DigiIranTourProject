namespace app_api.Model
{
    public class AccommodationType
    {
        public AccommodationType() { }
        
        public AccommodationType(string name) {
        this.Name = name;
        }  
        public string Name { get; set; }
    }
}
