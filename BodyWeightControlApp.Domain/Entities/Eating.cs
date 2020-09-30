using System;
using System.Collections.Generic;
using System.Text;

namespace BodyWeightControlApp.Domain.Entities
{
    public class Eating
    {
        public int ID { get; set; }
        public DateTime Date { get; set; }
        public double CaloriesSum { get; set; }
    }
}
