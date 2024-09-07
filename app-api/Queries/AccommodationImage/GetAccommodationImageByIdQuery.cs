using MediatR;
using app_api.Dtos.Accommodation;
using app_api.Domain.Repositories;

namespace app_api.Queries
{
    public class GetAccommodationImageByIdQuery
    {
        public class Query : IRequest<AccommodationImageDto>
        {
            public int Id { get; set; }

            public Query(int id)
            {
                Id = id;
            }
        }

        public class Handler : IRequestHandler<Query, AccommodationImageDto>
        {
            private readonly IAccommodationImageRepository accommodationImageRepository;

            public Handler(IAccommodationImageRepository accommodationImageRepository)
            {
                this.accommodationImageRepository = accommodationImageRepository;
            }

            public async Task<AccommodationImageDto> Handle(Query query, CancellationToken cancellationToken)
            {
                var image = await this.accommodationImageRepository.GetByIdAsync(query.Id, cancellationToken);
                if (image == null)
                {
                    throw new KeyNotFoundException($"Accommodation image with ID {query.Id} not found.");
                }

                return new AccommodationImageDto(image);
            }
        }
    }
}
