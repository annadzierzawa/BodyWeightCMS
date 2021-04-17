using BodyWeightControlApp.Application.Commands;
using BodyWeightControlApp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BodyWeightControlApp.Application.Services
{
    public interface IEatingsService
    {
        Task<IEnumerable<Eating>> GetEatings();
        Task AddEating(AddEatingCommand command);
        Task DeleteEating(int id);
    }
}
