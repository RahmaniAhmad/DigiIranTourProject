using app_api.Contracts;
using app_api.Domain;
using app_api.Domain.Repositories;

namespace app_api.Services
{
    public class ProvinceService
    {
        private readonly IProvinceRepository _provinceRepository;
        private readonly IUnitOfWork unitOfWork;

        public ProvinceService(IProvinceRepository provinceRepository, IUnitOfWork unitOfWork)
        {
            _provinceRepository = provinceRepository;
            this.unitOfWork = unitOfWork;
        }

        public async Task<IEnumerable<Province>> GetAllAsync(CancellationToken cancellationToken)
        {
            return await _provinceRepository.GetAllAsync(cancellationToken);
        }
    }

}
