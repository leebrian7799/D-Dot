class Api::PhotosController < ApplicationController
  before_action :logged_in?, only: [:create, :update, :destroy]

  def destroy
    @photo = Photo.find_by(id: params[:id])
    if @photo && @photo.author_id == current_user.id
      @photo.destroy
      render 'api/photos/show'
    else
      render json: ['Delete failed'], status: 403
    end
  end

  def index
    @photos = Photo.all
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.author_id = current_user.id
    if @photo.save
      render 'api/photos/show'
    else
      render json: @photo.errors.messages, status: 422
    end
  end

  def update
    @photo = Photo.find_by(id: params[:id])
    if @photo.update(photo_params)
      render 'api/photos/show'
    else
      render json: ['Edit failed'], status: 403
    end
  end

  def show
    @photo = Photo.find(params[:id])
  end

  private
  def photo_params
    params.require(:photo).permit(:title, :description, :author_id, :image)
  end

end
