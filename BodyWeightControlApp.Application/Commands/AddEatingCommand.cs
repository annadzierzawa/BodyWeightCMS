using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BodyWeightControlApp.Application.Commands
{
    public class AddEatingCommand
    {
        public DateTime Date { get; set; }
        public double CaloriesSum { get; set; }
    }
}
