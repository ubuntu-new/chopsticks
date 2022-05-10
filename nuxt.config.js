// import bodyParser from 'body-parser'
// import session from 'express-session'
import i18n from "./config/i18n";
import axios from 'axios'

export default {
    // GENERATE CATEGORY ROUTES
    generate: {
        routes() {
          var lang = ['', '/en/', '/ru/'];
          const TOKEN = 'TodKtEjTTqj8HBVGmQPE3gW5TFY'
          return axios
                .request({
                method: 'post',
                url: 'https://chopsticks.webertela.online/back_api/rest/web/index.php?r=v1/product_categories/list',
                headers: {
                    Authorization: 'Bearer ' + TOKEN,
                },
                })
                .then(res => {
                    return res.data.map(cat => {
            for(let a = 0; a < 3; a++){
              return {
                    route: lang[a]+ '/category/' + cat.url,
                    payload: cat
                }
              }
            });
            // return ['/some-other-dynamic-route-or-array-of-routes/', ...users]
          })
        }
      },
      
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        API_URL: "https://chopsticks.webertela.online/back_api/rest/web/index.php?r=v1/",
        LOGIN_URL: "https://chopsticks.webertela.online/back_api/rest/web/index.php?r=auth",

        htmlAttrs: {
            lang: 'en',
        },
        title: 'Chopsticks - Delivery, Dine in',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Archivo:400,400i,500,500i,600,600i,700,700i&display=swap'
            }
        ],
    },
    

    /*
        ** Add server middleware
        ** Nuxt.js uses `connect` module as server
        ** So most of express middleware works with nuxt.js server middleware
    */
    serverMiddleware: [
        // body-parser middleware
        // bodyParser.json(),
        // // session middleware
        // session({
        //     secret: 'fsdfvcbchgdfdf535455uhvbcvzdfgn',
        //     resave: false,
        //     saveUninitialized: false,
        //     cookie: { maxAge: 60000 }
        // }),
        // API middleware servd
        // We add /api/login & /api/Logout routes etc..
        '~/api'
    ],
    /*
    ** Customize the progress-bar colors
    */
    loading: { color: '#fff' },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~/plugins/vue-carousel', ssr: false },
        { src: '~/plugins/vue-backtotop', ssr: false },
        { src: '~/plugins/vue-toastification', ssr: false },
        { src: '~/plugins/vueperslides', ssr: false },
        { src: '~/plugins/persistedState.client.js', ssr: false },
        // { src: '~/plugins/firebase' },
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/i18n',
    ],
    /*
    /*
    ** Global CSS
    */
    css: [
        './assets/scss/styles/animate.min.css',
        './assets/scss/styles/bootstrap.min.css',
        './assets/scss/styles/fontawesome.min.css',
        './assets/scss/styles/style.scss',
        './assets/scss/styles/admin.scss',
        './assets/scss/styles/responsive.scss',
    ],
    /** Axios module configuration
     ** See https://axios.nuxtjs.org/options
    ** Add .
    */
    axios: {
        proxy: true
    },

    i18n: {
        defaultLocale: 'ka',
        locales: [
            {
                code: 'en',
                name: 'English'
            },
            {
                code: 'ka',
                name: 'Georgian'
            },
            {
                code: 'ru',
                name: 'Russian'
            }
        ],
        vueI18n: i18n
    },
    /*
    ** Globally configure <nuxt-link> default active class.
    */
    router: {
        // mode: 'hash',
        linkActiveClass: 'active'
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        },
        target: 'static',
    }
}