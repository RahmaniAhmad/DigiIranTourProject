using app_api.Domain.Repositories;
using app_api.Dtos.Province;
using MediatR;

namespace app_api.Queries
{
    public class GetProvinceListQuery
    {
        public class Query : IRequest<IEnumerable<ProvinceDto>>
        {

            public Query()
            {
            }
        }
        public class Handler : IRequestHandler<Query, IEnumerable<ProvinceDto>>
        {
            private readonly IProvinceRepository provinceRepository;

            public Handler(IProvinceRepository provinceRepository)
            {
                this.provinceRepository = provinceRepository;
            }

            public async Task<IEnumerable<ProvinceDto>> Handle(Query query, CancellationToken cancellationToken)
            {
                var result = await this.provinceRepository.GetListAsync( cancellationToken);

                var items = result.Select(s => new ProvinceDto(s));

                return items;
            }
        }
    }
}
