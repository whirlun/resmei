class CreateArticleTagJoinTable < ActiveRecord::Migration[7.1]
  def change
    create_join_table :articles, :tags
  end
end
