using app_api.Contracts;
using MediatR;

namespace app_api.Commands
{
    public class UpdateAccommodationCommand
    {
        public class UpdateAccommodationRequest : IRequest<Domain.Accommodation>
        {
            public long Id { get; set; }
            public long CityId { get; set; }
            public long TypeId { get; set; }
            public required string Title { get; set; }
            public required string Address { get; set; }
            public int? BedroomsCount { get; set; }
            public int? Star { get; set; }
            public string? Rule { get; set; }
        }

        public class Handler : IRequestHandler<UpdateAccommodationRequest, Domain.Accommodation>
        {
            private readonly IUnitOfWork unitOfWork;

            public Handler(IUnitOfWork unitOfWork)
            {
                this.unitOfWork = unitOfWork;
            }

            public async Task<Domain.Accommodation> Handle(UpdateAccommodationRequest command, CancellationToken cancellationToken)
            {
                var city = await this.unitOfWork.Cities.GetByIdAsync(command.CityId,cancellationToken);
                if (city == null)
                {
                    throw new Exception($"City not found");
                }

                var type = await this.unitOfWork.AccommodationTypes.GetByIdAsync(command.TypeId, cancellationToken);
                if (type == null)
                {
                    throw new Exception($"Type not found");
                }
                var accommodation = await this.unitOfWork.Accommodations.GetByIdAsync(command.Id, cancellationToken);

                if (accommodation == null)
                {
                    throw new KeyNotFoundException($"Accommodation with Id {command.Id} not found.");
                }

                accommodation.UpdateRquiredDetails(city, type, command.Title, command.Address);

                accommodation.UpdateOptionalDetails(command.BedroomsCount, command.Star, command.Rule);

                await unitOfWork.CompleteAsync(cancellationToken);

                return accommodation;
            }
        }
    }
}
