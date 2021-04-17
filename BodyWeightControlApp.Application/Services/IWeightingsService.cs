using BodyWeightControlApp.Application.Commands;
using BodyWeightControlApp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BodyWeightControlApp.Application.Services
{
    public interface IWeightingsService
    {
        Task<IEnumerable<Weighting>> GetWeightings();
        Task AddWeighting(AddWeightingCommand command);
        Task DeleteWeighting(int id);
    }
}
