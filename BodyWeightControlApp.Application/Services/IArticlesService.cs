using System.Collections.Generic;
using System.Threading.Tasks;
using BodyWeightControlApp.Application.Commands;
using BodyWeightControlApp.Domain.Entities;

namespace BodyWeightControlApp.Application.Services
{
    public interface IArticlesService
    {
        Task AddArticle(AddArticleCommand command);
        Task<IEnumerable<Article>> GetArticles();
        Task DeleteArticle(long id);
        Task UpdateArticle(UpdateArticleCommand command);
    }
}
