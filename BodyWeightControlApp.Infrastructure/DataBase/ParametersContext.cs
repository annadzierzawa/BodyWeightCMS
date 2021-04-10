using BodyWeightControlApp.Domain.Entities;
using Microsoft.EntityFrameworkCore;
namespace BodyWeightControlApp.Infrastructure.DataBase

{
    public class ParametersContext : DbContext
    {
        public ParametersContext(DbContextOptions<ParametersContext> options) : base(options)
        { }
        public DbSet<Weighting> Weightings { get; set; }
        public DbSet<Eating> Eatings { get; set; }
        public DbSet<Article> Articles { get; set; }
    }

}
