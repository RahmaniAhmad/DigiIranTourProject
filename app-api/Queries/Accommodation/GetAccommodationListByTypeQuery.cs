using app_api.Domain.Repositories;
using app_api.Dtos.Accommodation;
using MediatR;

namespace app_api.Queries
{
    public class GetAccommodationListByTypeQuery
    {
        public class Query : IRequest<(IEnumerable<AccommodationDto> Items, int TotalCount)>
        {
            public int Skip { get; set; }
            public int Take { get; set; }
            public string Type { get; set; }

            public Query(string type,int skip, int take)
            {
                this.Skip = skip;
                this.Take = take;
                this.Type = type;
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
                var result = await accommodationRepository.GetByTypeAsync(query.Type,query.Skip,query.Take, cancellationToken);

                var items = result.Items.Select(s => new AccommodationDto(s));
                return (items, result.TotalCount);
            }
        }
    }
}
