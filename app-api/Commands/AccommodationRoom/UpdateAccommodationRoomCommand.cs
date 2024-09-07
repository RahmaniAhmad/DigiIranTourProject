using app_api.Contracts;
using MediatR;

namespace app_api.Commands
{
    public class UpdateAccommodationRoomCommand
    {
        public class UpdateAccommodationRoomRequest : IRequest<Domain.AccommodationRoom>
        {
            public long Id { get; set; }
            public long AccommodationId { get; set; }
            public required string Title { get; set; }
            public int? BedsCount { get; set; }
            public int? Capacity { get; set; }
            public decimal? Price { get; set; }
            public string? Description { get; set; }
        }

        public class Handler : IRequestHandler<UpdateAccommodationRoomRequest, Domain.AccommodationRoom>
        {
            private readonly IUnitOfWork unitOfWork;

            public Handler(IUnitOfWork unitOfWork)
            {
                this.unitOfWork = unitOfWork;
            }

            public async Task<Domain.AccommodationRoom> Handle(UpdateAccommodationRoomRequest command, CancellationToken cancellationToken)
            {
                var accommodation = await this.unitOfWork.Accommodations.GetByIdAsync(command.AccommodationId, cancellationToken);

                if (accommodation == null)
                {
                    throw new KeyNotFoundException($"Accommodation with Id {command.Id} not found.");
                }

                var accommodationRoom = await this.unitOfWork.AccommodationRooms.GetByIdAsync(command.Id, cancellationToken);

                if (accommodationRoom == null)
                {
                    throw new Exception("Room not found.");
                }

                accommodationRoom.UpdateRquiredDetails(command.Title);

                accommodationRoom.UpdateOptionalDetails(command.BedsCount,command.Capacity,command.Price,command.Description);

                await unitOfWork.CompleteAsync(cancellationToken);

                return accommodationRoom;
            }
        }
    }
}
