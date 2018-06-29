class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
        render :show
    else
      render json: @comment.errors.messages, status: 422
    end
  end

  def update
    @comment = Comment.find_by(id: params[:id])
    if @comment.update(comment_params)
      render :show
    else
      render json: ['Edit failed'], status: 403
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    if @comment && @comment.author_id == current_user.id
      @comment.destroy
      render :show
    else
      render json: ['Delete failed'], status: 403
    end
  end


  private
  def comment_params
    params.require(:comment).permit(:author_id, :photo_id, :comment_body)
  end

end
