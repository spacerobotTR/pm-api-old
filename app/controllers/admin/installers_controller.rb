class Admin::InstallersController < Admin::BaseController
  before_action :set_admin_installer, only: [:show, :edit, :update, :destroy]

  # GET /admin/installers
  # GET /admin/installers.json
  def index
    @admin_installers = Admin::Installer.all
  end

  # GET /admin/installers/1
  # GET /admin/installers/1.json
  def show
  end

  # GET /admin/installers/new
  def new
    @admin_installer = Admin::Installer.new
  end

  # GET /admin/installers/1/edit
  def edit
  end

  # POST /admin/installers
  # POST /admin/installers.json
  def create
    @admin_installer = Admin::Installer.new(admin_installer_params)

    respond_to do |format|
      if @admin_installer.save
        format.html { redirect_to @admin_installer, notice: 'Installer was successfully created.' }
        format.json { render :show, status: :created, location: @admin_installer }
      else
        format.html { render :new }
        format.json { render json: @admin_installer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /admin/installers/1
  # PATCH/PUT /admin/installers/1.json
  def update
    respond_to do |format|
      if @admin_installer.update(admin_installer_params)
        format.html { redirect_to @admin_installer, notice: 'Installer was successfully updated.' }
        format.json { render :show, status: :ok, location: @admin_installer }
      else
        format.html { render :edit }
        format.json { render json: @admin_installer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /admin/installers/1
  # DELETE /admin/installers/1.json
  def destroy
    @admin_installer.destroy
    respond_to do |format|
      format.html { redirect_to admin_installers_url, notice: 'Installer was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_admin_installer
      @admin_installer = Admin::Installer.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def admin_installer_params
      params.require(:admin_installer).permit(:installertype, :description)
    end
end
