using System;
using System.Collections.Generic;
using System.Text;

namespace BodyWeightControlApp.Application.Commands
{
    public class UpdateArticleCommand
    {
        public long Id { get; set; }
        public string ArticleContent { get; set; }
    }
}
