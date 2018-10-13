require 'test_helper'

class Admin::InstallersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_installer = admin_installers(:one)
  end

  test "should get index" do
    get admin_installers_url
    assert_response :success
  end

  test "should get new" do
    get new_admin_installer_url
    assert_response :success
  end

  test "should create admin_installer" do
    assert_difference('Admin::Installer.count') do
      post admin_installers_url, params: { admin_installer: { description: @admin_installer.description, installertype: @admin_installer.installertype } }
    end

    assert_redirected_to admin_installer_url(Admin::Installer.last)
  end

  test "should show admin_installer" do
    get admin_installer_url(@admin_installer)
    assert_response :success
  end

  test "should get edit" do
    get edit_admin_installer_url(@admin_installer)
    assert_response :success
  end

  test "should update admin_installer" do
    patch admin_installer_url(@admin_installer), params: { admin_installer: { description: @admin_installer.description, installertype: @admin_installer.installertype } }
    assert_redirected_to admin_installer_url(@admin_installer)
  end

  test "should destroy admin_installer" do
    assert_difference('Admin::Installer.count', -1) do
      delete admin_installer_url(@admin_installer)
    end

    assert_redirected_to admin_installers_url
  end
end
