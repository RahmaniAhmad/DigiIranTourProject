using app_api.Domain.Repositories;
using app_api.Dtos.AccommodationType;
using MediatR;

namespace app_api.Queries
{
    public class GetAccommodationTypeListQuery
    {
        public class Query : IRequest<IEnumerable<AccommodationTypeDto>>
        {

            public Query()
            {
            }
        }
        public class Handler : IRequestHandler<Query, IEnumerable<AccommodationTypeDto>>
        {
            private readonly IAccommodationTypeRepository accommodationTypeRepository;

            public Handler(IAccommodationTypeRepository accommodationTypeRepository)
            {
                this.accommodationTypeRepository = accommodationTypeRepository;
            }

            public async Task<IEnumerable<AccommodationTypeDto>> Handle(Query query, CancellationToken cancellationToken)
            {
                var result = await this.accommodationTypeRepository.GetListAsync( cancellationToken);

                var items = result.Select(s => new AccommodationTypeDto(s));

                return items;
            }
        }
    }
}
