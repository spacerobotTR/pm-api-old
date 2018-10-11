class CommentsController < ApplicationController

  before_action :find_project
  before_action :find_comment, only: [:destroy, :edit, :update, :comment_owner]
  before_action :comment_owner, only: [:destroy, :edit, :update]

  def show
    @comments = Comment.order(created_at: :desc)
    @comment = Comment.new
  end

  def new
    @comment = @project.comments.build
  end

  def create
    @comments = Comment.where(project_id: @project).order("created_at DESC")
    @comment = @project.comments.new(params[:comment].permit(:body))
    @comment.user = current_user


    respond_to do |format|
      if @comment.save
        format.html { redirect_to project_path(@project), notice: 'Comment was successfully created.' }
        format.json { render :show, status: :created, location: [@project, @upload] }
        format.js
      else
        format.html { render "projects/show" }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
        format.js
      end
    end
  end

  def edit
  @comment = Comment.find(params[:id])
    respond_to do |format|
      format.js
    end
  end


  def update
    @comment = Comment.find(params[:id])
    @comments = Comment.where(project_id: @project).order("created_at DESC")
    respond_to do |format|
      if @comment.update(params[:comment].permit(:body))
        format.html { redirect_to @comment, notice: 'Comment was successfully updated.' }
        format.json { render :show, status: :ok, location: @comment }
        format.js
      else
        format.html { render :edit }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
        format.js
      end
    end
  end

  def destroy
    @comments = Comment.where(project_id: @project).order("created_at DESC")
    @comment.destroy
    respond_to do |format|
      format.html { redirect_to project_path(@project), notice: 'project was successfully destroyed.' }
      format.json { head :no_content }
      format.js
    end
  end


  private
  def find_project
    @project = Project.find(params[:project_id])
  end

  def find_comment
    @comment = @project.comments.find(params[:id])
  end

  def comment_owner
    unless current_user.id == @comment.user_id
      flash[:notice] = "You cannot modify a different users udpates."
      redirect_to @project
    end

  end

end
