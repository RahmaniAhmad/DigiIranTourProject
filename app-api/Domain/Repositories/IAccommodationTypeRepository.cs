﻿using app_api.Contracts;
using app_api.Domain;
using app_api.Domain.Base;

namespace app_api.Domain.Repositories
{
    public interface IAccommodationTypeRepository
    {
        Task<IEnumerable<AccommodationType>> GetAll();
        Task<AccommodationType> GetById(long id, CancellationToken cancellationToken);
    }

}
