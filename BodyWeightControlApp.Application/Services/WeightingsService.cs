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
    public class WeightingsService : IWeightingsService
    {
        private readonly ParametersContext _context;

        public WeightingsService(ParametersContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Weighting>> GetWeightings()
        {
            return _context.Weightings.OrderBy(w => w.Date).ToList();
        }

        public async Task AddWeighting(AddWeightingCommand command)
        {
            var weighting = _context.Weightings.FirstOrDefault(w => w.Date == command.Date);
            if (weighting != null)
            {
                weighting.Weight = command.Weight;
            }
            else
            {

                Weighting newWeighting = new Weighting()
                {
                    Date = command.Date,
                    Weight = command.Weight
                };
                _context.Weightings.Add(newWeighting);
            }

            await _context.SaveChangesAsync();
        }

        public async Task DeleteWeighting(int id)
        {
            var weighting = await _context.Weightings.FindAsync(id);

            _context.Weightings.Remove(weighting);

            await _context.SaveChangesAsync();
        }
    }
}
