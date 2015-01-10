class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def message
  	respond_to do |format|
		format.json {
			if ContactMailer.contact_email(params[:sender], params[:message]).deliver
				render :json => { :message => 'Skickat'}	
			else
				render :json => { :message => 'Misslyckades'}
			end
		}
	end
  end
end
