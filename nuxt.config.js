export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fit-camp',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '../fit-camp/static/css/reset.scss',
    '../fit-camp/static/css/fonts.scss',
    '../fit-camp/static/css/variables.scss',
    '../fit-camp/static/css/main.scss',
    '../fit-camp/static/css/mixins.scss',
    '../fit-camp/static/css/nuxt-content.scss',
  ],
  
  

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },
  target: 'static',
  router: {
    base: '/bodyandsoulcamp'
  }
}
