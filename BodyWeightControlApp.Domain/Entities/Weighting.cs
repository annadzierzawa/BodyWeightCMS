using System;
using System.Collections.Generic;
using System.Text;

namespace BodyWeightControlApp.Domain.Entities
{
    public class Weighting
    {
        public int ID { get; set; }
        public DateTime Date { get; set; }
        public double Weight { get; set; }

    }
}
