class ContactMailer < ActionMailer::Base
  default from: "contact@otterberg.co"
  default to: "h.otterberg@gmail.com"

  def contact_email (from, msg)
  	@sender = from
  	@message = msg
  	mail(subject: 'Otterberg.co: e-mail received from contact form')
  end

end
