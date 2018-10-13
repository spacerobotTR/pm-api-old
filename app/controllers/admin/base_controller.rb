class Admin::BaseController < ApplicationController
  before_action :is_admin?

  private
  # it will call before every action on this controller
      def is_admin?
        # check if user is a admin
        # if not admin then redirect to where ever you want
        redirect_to projects_path unless current_user and current_user.admin?
      end
end
