using app_api.Domain;
using app_api.Domain.Repositories;
using app_api.Dtos.Accommodation;
using MediatR;

namespace app_api.Queries
{
    public class GetAccommodationRoomsByAccommodationIdQuery
    {
        public class Query : IRequest<IEnumerable<AccommodationRoomDto>>
        {
            public long AccommodationId { get; set; }

            public Query(long accommodationId)
            {
                this.AccommodationId = accommodationId;
            }
        }
        public class Handler : IRequestHandler<Query, IEnumerable<AccommodationRoomDto>>
        {
            private readonly IAccommodationRoomRepository accommodationRoomRepository;

            public Handler(IAccommodationRoomRepository accommodationRoomRepository)
            {
                this.accommodationRoomRepository = accommodationRoomRepository;
            }

            public async Task<IEnumerable<AccommodationRoomDto>> Handle(Query query, CancellationToken cancellationToken)
            {
                var result = await this.accommodationRoomRepository.GetByAccommodationId(query.AccommodationId, cancellationToken);
                if (result == null)
                {
                    throw new Exception($"Accommodation with ID {query.AccommodationId} not found.");
                }

                var items = result.Select(s => new AccommodationRoomDto(s));
                return items;
            }
        }
    }
}
