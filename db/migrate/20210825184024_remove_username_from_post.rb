class RemoveUsernameFromPost < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :username, :string
  end
end
