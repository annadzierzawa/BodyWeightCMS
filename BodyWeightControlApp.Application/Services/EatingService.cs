using BodyWeightControlApp.Application.Commands;
using BodyWeightControlApp.Domain.Entities;
using BodyWeightControlApp.Infrastructure.DataBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BodyWeightControlApp.Application.Services
{
    public class EatingService : IEatingsService
    {
        private readonly ParametersContext _context;

        public EatingService(ParametersContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Eating>> GetEatings()
        {
            return _context.Eatings.OrderBy(e => e.Date).ToList();
        }

        public async Task AddEating(AddEatingCommand command)
        {
            var eating = _context.Eatings.FirstOrDefault(e => e.Date == command.Date);
            if (eating != null)
            {
                eating.CaloriesSum = command.CaloriesSum;
            }
            else
            {
                Eating newEating = new Eating()
                {
                    Date = command.Date,
                    CaloriesSum = command.CaloriesSum
                };
                _context.Eatings.Add(newEating);
            }
            await _context.SaveChangesAsync();

        }
    }
}
