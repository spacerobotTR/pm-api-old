class CreateProjectsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
       t.string "projname"
       t.date "startdate"
       t.date "enddate"
       t.string "installer"
       t.string "createdby"
       t.integer "cpdcprojnum"
       t.string "projmanager"
       t.string "customername"
       t.string "customerphone"
       t.string "customeremail"
       t.string "projtype"
       t.string "building"
       t.string "rooms"
       t.text "description"
       t.integer "status_id"
       t.integer "user_id"
       t.timestamps
     end
  end
end
