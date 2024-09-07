using app_api.Contracts;
using app_api.Domain;
using MediatR;

namespace app_api.Commands
{
    public class CreateAccommodationRoomCommand
    {
        public class CreateAccommodationRoomRequest : IRequest<Domain.AccommodationRoom>
        {
            public long AccommodationId { get; set; }
            public required string Title { get; set; }
            public int? BedsCount { get; set; }
            public int? Capacity { get; set; }
            public decimal? Price { get; set; }
            public string? Description { get; set; }
        }

        public class Handler : IRequestHandler<CreateAccommodationRoomRequest, Domain.AccommodationRoom>
        {
            private readonly IUnitOfWork unitOfWork;

            public Handler(IUnitOfWork unitOfWork)
            {
                this.unitOfWork = unitOfWork;
            }

            public async Task<Domain.AccommodationRoom> Handle(CreateAccommodationRoomRequest command, CancellationToken cancellationToken)
            {
                var accommodation = await this.unitOfWork.Accommodations.GetByIdAsync(command.AccommodationId, cancellationToken);

                if (accommodation == null)
                {
                    throw new Exception("Accommodation not found.");
                }

                var accommodationRoom = new AccommodationRoom(accommodation);
                accommodationRoom.UpdateRquiredDetails(command.Title);
                accommodationRoom.UpdateOptionalDetails(command.BedsCount, command.Capacity, command.Price, command.Description);

                await unitOfWork.AccommodationRooms.AddAsync(accommodationRoom,cancellationToken);
                await unitOfWork.CompleteAsync(cancellationToken);

                return accommodationRoom;
            }
        }
    }
}
