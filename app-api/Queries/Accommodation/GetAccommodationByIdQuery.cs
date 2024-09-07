using app_api.Domain.Repositories;
using app_api.Dtos.Accommodation;
using MediatR;

namespace app_api.Queries
{
    public class GetAccommodationByIdQuery
    {
        public class Query : IRequest<AccommodationDto>
        {
            public long Id { get; set; }

            public Query(int id)
            {
                this.Id = id;
            }
        }
        public class Handler : IRequestHandler<Query, AccommodationDto>
        {
            private readonly IAccommodationRepository accommodationRepository;

            public Handler(IAccommodationRepository accommodationRepository)
            {
                this.accommodationRepository = accommodationRepository;
            }

            public async Task<AccommodationDto> Handle(Query query, CancellationToken cancellationToken)
            {
                var accommodation = await this.accommodationRepository.GetByIdAsync(query.Id, cancellationToken);
                if (accommodation == null)
                {
                    throw new KeyNotFoundException($"Accommodation with ID {query.Id} not found.");
                }

                var accommodationDto = new AccommodationDto(accommodation);

                return accommodationDto;
            }
        }
    }
}
