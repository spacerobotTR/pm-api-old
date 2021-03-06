module ApplicationHelper
    def error_messages_for(object)
      render(:partial => 'application/error_messages', :locals =>
      {:object => object})
    end

    def is_active_controller(controller_name, class_name = nil)
        if params[:controller] == controller_name
         class_name == nil ? 'active' : class_name
        else
           nil
        end
    end

    def is_active_action(action_name)
        params[:action] == action_name ? 'active' : nil
    end

end
