using app_api.Domain.Repositories;
using MediatR;

namespace app_api.Commands
{
    public class DeleteAccommodationCommand
    {
        public class DeleteAccommodationRequest : IRequest<bool>
        {
            public long Id { get; set; }
        }

        public class Handler : IRequestHandler<DeleteAccommodationRequest, bool>
        {
            private readonly IAccommodationRepository accommodationRepository;

            public Handler(IAccommodationRepository accommodationRepository)
            {
                this.accommodationRepository = accommodationRepository;
            }

            public async Task<bool> Handle(DeleteAccommodationRequest command, CancellationToken cancellationToken)
            {
                var accommodation = await accommodationRepository.GetByIdAsync(command.Id, cancellationToken);

                if (accommodation == null)
                {
                    throw new KeyNotFoundException($"Accommodation with Id {command.Id} not found.");
                }

                accommodationRepository.Delete(accommodation, cancellationToken);

                return true;
            }
        }
    }
}
