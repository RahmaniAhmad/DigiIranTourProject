using app_api.Domain.Repositories;
using app_api.Dtos.Accommodation;
using MediatR;

namespace app_api.Queries
{
    public class GetAccommodationRoomByIdQuery
    {
        public class Query : IRequest<AccommodationRoomDto>
        {
            public long Id { get; set; }

            public Query(int id)
            {
                this.Id = id;
            }
        }
        public class Handler : IRequestHandler<Query, AccommodationRoomDto>
        {
            private readonly IAccommodationRoomRepository accommodationRoomRepository;

            public Handler(IAccommodationRoomRepository accommodationRoomRepository)
            {
                this.accommodationRoomRepository = accommodationRoomRepository;
            }

            public async Task<AccommodationRoomDto> Handle(Query query, CancellationToken cancellationToken)
            {
                var accommodation = await this.accommodationRoomRepository.GetByIdAsync(query.Id, cancellationToken);
                if (accommodation == null)
                {
                    throw new Exception($"Accommodation with ID {query.Id} not found.");
                }

                var accommodationDto = new AccommodationRoomDto(accommodation);

                return accommodationDto;
            }
        }
    }
}
