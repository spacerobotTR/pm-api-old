require "application_system_test_case"

class Admin::InstallersTest < ApplicationSystemTestCase
  setup do
    @admin_installer = admin_installers(:one)
  end

  test "visiting the index" do
    visit admin_installers_url
    assert_selector "h1", text: "Admin/Installers"
  end

  test "creating a Installer" do
    visit admin_installers_url
    click_on "New Admin/Installer"

    fill_in "Description", with: @admin_installer.description
    fill_in "Installertype", with: @admin_installer.installertype
    click_on "Create Installer"

    assert_text "Installer was successfully created"
    click_on "Back"
  end

  test "updating a Installer" do
    visit admin_installers_url
    click_on "Edit", match: :first

    fill_in "Description", with: @admin_installer.description
    fill_in "Installertype", with: @admin_installer.installertype
    click_on "Update Installer"

    assert_text "Installer was successfully updated"
    click_on "Back"
  end

  test "destroying a Installer" do
    visit admin_installers_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Installer was successfully destroyed"
  end
end
