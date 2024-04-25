class ApplicationController < ActionController::Base
    protect_from_forgery prepend: true
    before_action :set_layouts

    def set_layouts
        @greeting = "Hello World!"
    end
    def index
        @articles = Article.all
        render template: "application/index"
    end
end
