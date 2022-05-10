<template>
<client-only>
  <div>
    <div :class="['navbar-area navbar-style-two', { 'is-sticky': isSticky }]">
      <div class="comero-nav">
        <div class="container">
          <nav class="navbar navbar-expand-md navbar-light">
            <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

            <b-collapse
              class="collapse navbar-collapse"
              id="navbarSupportedContent"
              is-nav
            >
              <ul class="navbar-nav">
                <li
                  class="nav-item"
                  v-for="(category, index) in categories"
                  :key="index"
                >
                  <nuxt-link :to="category.URL">
                    {{ category.name }}
                  </nuxt-link>
                </li>
              </ul>
            </b-collapse>
          </nav>
        </div>
      </div>
    </div>
  </div>
</client-only>
</template>

<script>
import axios from 'axios'
import config from '@/nuxt.config'

export default {
  name: 'MenubarStyleOne',
  data() {
    return {
      API_URL: config.head.API_URL,
      isSticky: false,
      categories: [],
      currentLang: this.$i18n.locale,
    }
  },
  props: ['locale'],
  computed: {
    localLang() {
      this.currentLang = this.$i18n.locale;
      this.getCat();
      return this.currentLang;
    },
  },
  mounted() {
    this.getCat();

    const that = this
    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY
      if (scrollPos >= 100) {
        that.isSticky = true
      } else {
        that.isSticky = false
      }
    })
  },
  methods: {
    toggle() {
      mutations.toggleNav()
    },
    logout(){
        this.$store.dispatch("logoutUser");
        this.$router.push("/");
    },
    selectCat(cat){
      this.$store.dispatch("activeCat", cat.id)
    },
    getCat(){
      const TOKEN = 'TodKtEjTTqj8HBVGmQPE3gW5TFY'
      axios
        .request({
          method: 'post',
          url: this.API_URL + 'product_categories/list',
          headers: {
            Authorization: 'Bearer ' + TOKEN,
          },
        })
        .then((response) => {
          this.categories = response.data
          this.categories.forEach((x) => {
            x.URL = '/category/' + x.url;

            if(this.currentLang == 'ka'){
              x.name_en = x.name;
              x.name = x.name_ge;
              x.URL = '/category/' + x.url;
            } else if(this.currentLang == 'ru'){
              x.name_en = x.name;
              x.name = x.name_ru;
              x.URL = '/ru/category/' + x.url;
            } else if(this.currentLang == 'en'){
              x.URL = '/en/category/' + x.url;
            }
            
          });
        });
    },
  },
}
</script>