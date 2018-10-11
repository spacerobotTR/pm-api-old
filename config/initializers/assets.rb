# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add vendor paths
Rails.application.config.assets.paths << Rails.root.join('vendor', 'assets')

Rails.application.config.assets.precompile += Dir[Rails.root.join('app', 'assets', 'javascripts', '*.js')].map {
  |file| file.sub(%r(#{Rails.root.join('app', 'assets', 'javascripts/')}), '')
}
Rails.application.config.assets.precompile += Dir[Rails.root.join('app', 'assets', 'stylesheets', '*.css')].map {
  |file| file.sub(%r(#{Rails.root.join('app', 'assets', 'stylesheets/')}), '')
}


# Precompile core stylesheets
Rails.application.config.assets.precompile += [
  # Core stylesheets
  'stylesheets/bootstrap.css',
  'stylesheets/bootstrap-material.css',
  'stylesheets/appwork.css',
  'stylesheets/appwork-material.css',
  'stylesheets/colors.css',
  'stylesheets/colors-material.css',
  'stylesheets/uikit.css',

  # Themes
  'stylesheets/theme-air.css',
  'stylesheets/theme-air-material.css',
  'stylesheets/theme-corporate.css',
  'stylesheets/theme-corporate-material.css',
  'stylesheets/theme-cotton.css',
  'stylesheets/theme-cotton-material.css',
  'stylesheets/theme-gradient.css',
  'stylesheets/theme-gradient-material.css',
  'stylesheets/theme-paper.css',
  'stylesheets/theme-paper-material.css',
  'stylesheets/theme-shadow.css',
  'stylesheets/theme-shadow-material.css',
  'stylesheets/theme-soft.css',
  'stylesheets/theme-soft-material.css',
  'stylesheets/theme-sunrise.css',
  'stylesheets/theme-sunrise-material.css',
  'stylesheets/theme-twitlight.css',
  'stylesheets/theme-twitlight-material.css',
  'stylesheets/theme-vibrant.css',
  'stylesheets/theme-vibrant-material.css'
]

# Precompile core javascripts
Rails.application.config.assets.precompile += ['javascripts/*.js']

# Precompile fonts
Rails.application.config.assets.precompile += ['fonts/*']

# Precompile libs
lib_files = Dir[Rails.root.join('vendor', 'assets', 'libs', '**', '[^_]*.*')]
lib_files.map! { |file| file.sub(%r(#{Rails.root.join('vendor', 'assets/')}), '') }
lib_files.map! { |file| file.sub(%r(\.(scss)), '.css') }
Rails.application.config.assets.precompile += lib_files

# Precompile pages
Rails.application.config.assets.precompile += ['stylesheets/pages/*.css']

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
