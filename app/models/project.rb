class Project < ApplicationRecord
  belongs_to :user
  enum projtype: ['Access Control', 'Video Surveillance']
  has_one :proj_status, :foreign_key => "status_id", :primary_key => 'status_id'
  has_many_attached :uploads
  has_many :comments, dependent: :destroy

end
