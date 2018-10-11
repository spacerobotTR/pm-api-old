class AddProjStatusTable < ActiveRecord::Migration[5.2]
  def change

        create_table :proj_statuses do |t|
          t.integer "status_id"
          t.string "statusdescr"
          t.string "statusnotify"
          t.integer "percent"
          t.timestamps
        end
        add_index("proj_statuses", "status_id")


  end
end
