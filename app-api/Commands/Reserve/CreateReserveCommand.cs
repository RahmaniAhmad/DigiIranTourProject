using app_api.Domain.Repositories;
using MediatR;

namespace app_api.Commands
{
    public class CreateReserveCommand
    {
        public class CreateRequest : IRequest<Domain.Reserve>
        {
            public int UserId { get; set; }
            public int AccommodationRoomId { get; set; }
            public DateTime From { get; set; }
            public DateTime To { get; set; }
        }

        public class Handler : IRequestHandler<CreateRequest, Domain.Reserve>
        {
            private readonly IReserveRepository reserveRepository;
            private readonly IUserRepository userRepository;
            private readonly IAccommodationRoomRepository accommodationRoomRepository;

            public Handler(IReserveRepository reserveRepository,IUserRepository userRepository,IAccommodationRoomRepository accommodationRoomRepository)
            {
                this.reserveRepository = reserveRepository;
                this.userRepository = userRepository;
                this.accommodationRoomRepository = accommodationRoomRepository; 
            }

            public async Task<Domain.Reserve> Handle(CreateRequest command, CancellationToken cancellationToken)
            {
                var user = await this.userRepository.GetByIdAsync(command.UserId,cancellationToken);
                if (user == null)
                {
                    throw new Exception($"User with ID {command.UserId} not found");
                }


                var accommodationRoom = await this.accommodationRoomRepository.GetByIdAsync(command.AccommodationRoomId,cancellationToken);
                if (accommodationRoom == null)
                {
                    throw new Exception($"AccommodationRoom with ID {command.AccommodationRoomId} not found");
                }

                var reserve = new Domain.Reserve(user, accommodationRoom);
                reserve.From= command.From;
                reserve.To= command.To;

                await this.reserveRepository.AddAsync(reserve, cancellationToken);

                return reserve;
            }
        }
    }
}
