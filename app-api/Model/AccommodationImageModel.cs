using app_api.Domain;

namespace app_api.Model
{
    public class AccommodationImageModel
    {
        public AccommodationImageModel(AccommodationImage accommodationImage)
        {
            this.Url = accommodationImage.Url;
        }

        public string Url { get; private set; }

    }
}
