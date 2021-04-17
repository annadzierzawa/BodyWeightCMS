using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BodyWeightControlApp.Application.Commands;
using BodyWeightControlApp.Domain.Entities;
using BodyWeightControlApp.Infrastructure.DataBase;
using Microsoft.EntityFrameworkCore;

namespace BodyWeightControlApp.Application.Services
{
    public class ArticlesService : IArticlesService
    {
        private readonly ParametersContext _context;

        public ArticlesService(ParametersContext context)
        {
            _context = context;
        }

        public async Task AddArticle(AddArticleCommand command)
        {
            var article = new Article
            {
                ArticleContent = command.Content
            };

            _context.Articles.Add(article);

            await _context.SaveChangesAsync();
        }

        public async Task UpdateArticle(UpdateArticleCommand command)
        {
            var article = await _context.Articles.FindAsync(command.Id);

            article.ArticleContent = command.ArticleContent;

            await _context.SaveChangesAsync();
        }

        public async Task DeleteArticle(long id)
        {
            var article = await _context.Articles.FindAsync(id);

            _context.Articles.Remove(article);

            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Article>> GetArticles()
        {
            return await _context.Articles.OrderByDescending(a => a.Id).ToListAsync();
        }
    }
}
