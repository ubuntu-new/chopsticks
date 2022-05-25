import Vue from 'vue'
// Regular Webpack:
import * as VueGoogleMaps from 'vue2-google-maps'
//// If you encounter issues with UglifyJS and Nuxt.js, try the following instead:
// import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAbNam2xQqKvGxpx0ZUi1MWrst-oANYjUo',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
});