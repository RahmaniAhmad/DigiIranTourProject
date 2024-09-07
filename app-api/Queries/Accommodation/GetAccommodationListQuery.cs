using app_api.Domain;
using app_api.Domain.Repositories;
using app_api.Dtos.Accommodation;
using MediatR;

namespace app_api.Queries
{
    public class GetAccommodationListQuery
    {
        public class Query : IRequest<(IEnumerable<AccommodationDto> Items, int TotalCount)>
        {
            public int Skip { get; set; }
            public int Take { get; set; }

            public Query(int skip,int take)
            {
                this.Skip = skip;
                this.Take = take;
            }
        }
        public class Handler : IRequestHandler<Query, (IEnumerable<AccommodationDto> Items, int TotalCount)>
        {
            private readonly IAccommodationRepository accommodationRepository;

            public Handler(IAccommodationRepository accommodationRepository)
            {
                this.accommodationRepository = accommodationRepository;
            }

            public async Task<(IEnumerable<AccommodationDto> Items, int TotalCount)> Handle(Query query, CancellationToken cancellationToken)
            {
                var result = await this.accommodationRepository.GetListAsync(query.Skip, query.Take, cancellationToken);

                var items = result.Items.Select(s => new AccommodationDto(s));

                return (items, result.TotalCount);
            }
        }
    }
}
