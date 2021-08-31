class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  def index
    @posts = Post.all
    render json: @posts, include: {user: {only: :username}}
  end

  def show
    render json: @post
  end

  def create
    @post = Post.new(post_params)
    @post.user = @current_user
    if @post.save
      render json: @post, include: {user: {only: :username}}, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      render json: @post, include: {user: {only: :username}}
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:description)
  end
end
