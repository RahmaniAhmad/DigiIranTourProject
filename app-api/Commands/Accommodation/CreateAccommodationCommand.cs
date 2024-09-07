using app_api.Contracts;
using MediatR;

namespace app_api.Commands
{
    public class CreateAccommodationCommand
    {
        public class CreateAccommodationRequest : IRequest<Domain.Accommodation>
        {
            public long CityId { get; set; }
            public long TypeId { get; set; }
            public required string Title { get; set; }
            public required string Address { get; set; }
            public int? BedroomsCount { get; set; }
            public int? Star { get; set; }
            public string? Rule { get; set; }
        }

        public class Handler : IRequestHandler<CreateAccommodationRequest, Domain.Accommodation>
        {
            private readonly IUnitOfWork unitOfWork;

            public Handler(IUnitOfWork unitOfWork)
            {
                this.unitOfWork = unitOfWork;
            }

            public async Task<Domain.Accommodation> Handle(CreateAccommodationRequest request, CancellationToken cancellationToken)
            {
                var city = await this.unitOfWork.Cities.GetByIdAsync(request.CityId,cancellationToken);
                if (city == null)
                {
                    throw new Exception($"City not found");
                }

                var type = await this.unitOfWork.AccommodationTypes.GetByIdAsync(request.TypeId, cancellationToken);
                if (type == null)
                {
                    throw new Exception($"Type not found");
                }

                var accommodation = new Domain.Accommodation(city, type, request.Title, request.Address);
                accommodation.UpdateOptionalDetails(request.BedroomsCount, request.Star, request.Rule);

               await this.unitOfWork.Accommodations.AddAsync(accommodation, cancellationToken);
               await unitOfWork.CompleteAsync(cancellationToken);

                return accommodation;
            }
        }
    }
}
