using app_api.Domain;
using app_api.Domain.Repositories;
using app_api.Dtos.Accommodation;
using MediatR;

namespace app_api.Queries
{
    public class GetReserveByIdQuery
    {
        public class Query : IRequest<Reserve>
        {
            public long Id { get; set; }

            public Query(int id)
            {
                this.Id = id;
            }
        }
        public class Handler : IRequestHandler<Query, Reserve>
        {
            private readonly IReserveRepository reserveRepository;

            public Handler(IReserveRepository reserveRepository)
            {
                this.reserveRepository = reserveRepository;
            }

            public async Task<Reserve> Handle(Query query, CancellationToken cancellationToken)
            {
                var result = await this.reserveRepository.GetByIdAsync(query.Id, cancellationToken);
                if (result == null)
                {
                    throw new Exception($"Reserve with ID {query.Id} not found.");
                }

                return result;
            }
        }
    }
}
