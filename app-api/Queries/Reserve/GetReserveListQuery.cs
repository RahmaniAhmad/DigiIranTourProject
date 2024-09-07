using app_api.Domain;
using app_api.Domain.Repositories;
using MediatR;

namespace app_api.Queries
{
    public class GetReserveListQuery
    {
        public class Query : IRequest<(IEnumerable<Reserve> Items, int TotalCount)>
        {
            public int Skip { get; set; }
            public int Takt { get; set; }

            public Query(int skip,int take)
            {
                this.Skip = skip;
                this.Takt = take;
            }
        }
        public class Handler : IRequestHandler<Query, (IEnumerable<Reserve> Items, int TotalCount)>
        {
            private readonly IReserveRepository reserveRepository;

            public Handler(IReserveRepository reserveRepository)
            {
                this.reserveRepository = reserveRepository;
            }

            public async Task<(IEnumerable<Reserve> Items, int TotalCount)> Handle(Query query, CancellationToken cancellationToken)
            {
                var result = await this.reserveRepository.GetListAsync(query.Skip, query.Takt, cancellationToken);

                return result;
            }
        }
    }
}
