using app_api.Contracts;

namespace app_api.Services
{
    public class ProvinceService
    {
        private readonly IUnitOfWork unitOfWork;

        public ProvinceService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        //public async Task AddCityToProvinceAsync(long provinceId, string cityName, CancellationToken cancellationToken)
        //{
        //    var province = await unitOfWork.Provinces.GetByIdAsync(provinceId, cancellationToken);
        //    if (province == null)
        //    {
        //        throw new Exception("Province not found");
        //    }

        //    province.AddCity(cityName);
        //    await unitOfWork.CompleteAsync(cancellationToken);
        //}
    }

}
