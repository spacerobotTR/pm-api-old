class CreateAdminInstallers < ActiveRecord::Migration[5.2]
  def change
    create_table :admin_installers do |t|
      t.text :installertype
      t.text :description

      t.timestamps
    end
  end
end
