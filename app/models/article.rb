class Article < ApplicationRecord
    has_markdown :body
    has_and_belongs_to_many :tags
    accepts_nested_attributes_for :tags
    validates :title, presence: true
    validates :body, presence: true
end
