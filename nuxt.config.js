// RESTART SERVER AFTER ANY CHANGES HERE!

const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f29eaa' },

  /*
  ** Global CSS
  */
  css: ['assets/styles/main.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    //'~/plugins/myplugin'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    ['@nuxtjs/axios'],
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'de',
            name: 'Deutsch',
            iso: 'de-DE',
          },
          {
            code: 'en',
            name: 'English',
            iso: 'en-UK',
          },
        ],
        defaultLocale: 'de',
        vueI18n: {
          fallbackLocale: 'de',
          messages: {
            de: require('./locales/de.json'),
            en: require('./locales/en.json'),
          },
        },
        baseUrl: 'https://my-nuxt-app.com', // TODO
        //seo: false
      },
    ],
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {},
  },
}
