class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]
  add_breadcrumb "Home", :root_path
  add_breadcrumb "Projects", :projects_path
  # GET /projects
  # GET /projects.json
  def index
    @projects = Project.joins(:proj_status).order("created_at DESC")
    @title = 'Projects - Summary'

  end

  # GET /projects/1
  # GET /projects/1.json
  def show
    @projects = Project.joins(:proj_status).order("created_at DESC")
    @comments = Comment.where(project_id: @project).order("created_at DESC")
    @comment = Comment.new
      add_breadcrumb "Project Details", :projects_path

  end

  def delete_upload
    @attachment = ActiveStorage::Attachment.find(params[:upload_id])
    @attachment.purge # or use purge_later
    redirect_back(fallback_location: projects_path)
  end

  # GET /projects/new
  def new
    @project = Project.new
    @projstatus = ProjStatus.all
  end

  # GET /projects/1/edit
  def edit
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = current_user.projects.build(project_params)
    respond_to do |format|
      if @project.save

        format.html { redirect_to @project, notice: 'Project was successfully created.' }
        format.json { render :show, status: :created, location: @project }
      else
        format.html { render :new }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    respond_to do |format|
      if @project.update(project_params)
        format.html { redirect_to @project, notice: 'Project was successfully updated.' }
        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :edit }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project.destroy
    respond_to do |format|
      format.html { redirect_to projects_url, notice: 'Project was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
        params.require(:project).permit(:projname, :startdate, :enddate,
          :installer, :createdby, :cpdcprojnum, :projmanager, :customername, :customerphone,
          :customeremail, :projtype, :building, :rooms, :description, :status_id, uploads: [])
    end
end
