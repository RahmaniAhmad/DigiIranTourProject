using app_api.Domain.Repositories;
using app_api.Dtos.City;
using MediatR;

namespace app_api.Queries
{
    public class GetCityListQuery
    {
        public class Query : IRequest<IEnumerable<CityDto>>
        {

            public Query()
            {
            }
        }
        public class Handler : IRequestHandler<Query, IEnumerable<CityDto>>
        {
            private readonly ICityRepository cityRepository;

            public Handler(ICityRepository cityRepository)
            {
                this.cityRepository = cityRepository;
            }

            public async Task<IEnumerable<CityDto>> Handle(Query query, CancellationToken cancellationToken)
            {
                var result = await this.cityRepository.GetListAsync( cancellationToken);

                var items = result.Select(s => new CityDto(s));

                return items;
            }
        }
    }
}
