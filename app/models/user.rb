class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :ldap_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :ldap_authenticatable

   def email_required?
      false
   end

     has_many :projects
     has_many :uploads
end
