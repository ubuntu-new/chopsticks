<template>
  <div>
    <TopHeaderStyleOne @onLocaleChange="updateLocale"></TopHeaderStyleOne>
    <MenubarStyleOne :locale="localeLang" :key="localeChange"></MenubarStyleOne>
    <Nuxt />
    <Footer></Footer>
    <SiteLoader v-if="loading" />
    <BackToTop></BackToTop>
  </div>
</template>

<script>
import Footer from './Footer'
import BackToTop from './BackToTop'
import SiteLoader from './SiteLoder'
import TopHeaderStyleOne from './TopHeaderStyleOne'
import MenubarStyleOne from './MenubarStyleOne'
export default {
  components: {
    Footer,
    BackToTop,
    SiteLoader,
    TopHeaderStyleOne,
    MenubarStyleOne,
  },
  data() {
    return {
      loading: true,
      localeLang: '',
      localeChange: 0,
    }
  },
  methods: {
    updateLocale(locale) {
      // alert("UPDATEEE "+locale);
      this.localeLang = locale;
      this.localeChange++;
    },
  },
  watch: {
    $route(pathUrl) {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 600)
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 600)
  },
}
</script>