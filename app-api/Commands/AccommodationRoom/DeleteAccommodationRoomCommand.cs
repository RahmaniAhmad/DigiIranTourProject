using app_api.Contracts;
using MediatR;

namespace app_api.Commands
{
    public class DeleteAccommodationRoomCommand
    {
        public class DeleteAccommodationRoomRequest : IRequest<bool>
        {
            public long Id { get; set; }
        }

        public class Handler : IRequestHandler<DeleteAccommodationRoomRequest, bool>
        {
            private readonly IUnitOfWork unitOfWork;

            public Handler(IUnitOfWork unitOfWork)
            {
                this.unitOfWork = unitOfWork;
            }

            public async Task<bool> Handle(DeleteAccommodationRoomRequest command, CancellationToken cancellationToken)
            {
                var accommodationRoom = await this.unitOfWork.AccommodationRooms.GetByIdAsync(command.Id, cancellationToken);

                if (accommodationRoom == null)
                {
                    throw new KeyNotFoundException($"Room with Id {command.Id} not found.");
                }

                this.unitOfWork.AccommodationRooms.Delete(accommodationRoom, cancellationToken);

                return true;
            }
        }
    }
}
