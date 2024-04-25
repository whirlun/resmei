class ArticleController < ApplicationController
    def show
        article = Article.find_by!(id: params[:id])
        @article = article
        @greeting = article.title
    end
end
