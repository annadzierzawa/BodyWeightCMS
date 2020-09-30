using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BodyWeightControlApp.Application.Commands
{
    public class AddWeightingCommand
    {
        public DateTime Date { get; set; }
        public double Weight { get; set; }
    }
}
