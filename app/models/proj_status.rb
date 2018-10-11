class ProjStatus < ApplicationRecord
    belongs_to :project, { :foreign_key => 'status_id', :primary_key => 'status_id' }
end
