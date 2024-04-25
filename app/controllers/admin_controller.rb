class AdminController < ApplicationController
    before_action :set_admin

    def publish
        @init_value = ""
        @action = "new"
    end

    def edit
        article = Article.find_by(id: params[:id])
        @init_title = article.title
        @init_value = article.body.to_markdown
        @action = "edit"
        render "publish"
    end

    def update
        article = Article.find_by(id: params[:id])
        tags = JSON.parse(params["tag-input"]).map {|t| Tag.find_or_create_by(name: t["value"]) {|e| e.name = t["value"]} }
        article.title = params["title"]
        article.body = params["editor-content"]
        if article.save
            redirect_to controller: 'application', action: 'index'
        else
            redirect_to action: 'publish'
        end
    end

    def new
        @article = Article.new
        tags = JSON.parse(params["tag-input"]).map {|t| Tag.find_or_create_by(name: t["value"]) {|e| e.name = t["value"]} }
        article = Article.create! title: params["title"], body: params["editor-content"], tags: tags
        if article.save
            redirect_to controller: 'application', action: 'index'
        else
            redirect_to action: 'publish'
        end
    end

    private
        def set_admin
            @admin = true
        end

end
