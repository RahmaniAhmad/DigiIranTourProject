using MediatR;
using app_api.Dtos.Accommodation;
using app_api.Domain.Repositories;

namespace app_api.Queries
{
    public class GetAccommodationImagesByAccommodationIdQuery
    {
        public class Query : IRequest<IEnumerable<AccommodationImageDto>>
        {
            public long AccommodationId { get; set; }

            public Query(long accommodationId)
            {
                AccommodationId = accommodationId;
            }
        }

        public class Handler : IRequestHandler<Query, IEnumerable<AccommodationImageDto>>
        {
            private readonly IAccommodationImageRepository accommodationImageRepository;

            public Handler(IAccommodationImageRepository accommodationImageRepository)
            {
                this.accommodationImageRepository = accommodationImageRepository;
            }

            public async Task<IEnumerable<AccommodationImageDto>> Handle(Query query, CancellationToken cancellationToken)
            {
                var images = await this.accommodationImageRepository.GetByAccommodationId(query.AccommodationId);
                return images.Select(img => new AccommodationImageDto(img));
            }
        }
    }
}
