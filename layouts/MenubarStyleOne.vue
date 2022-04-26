<template>
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
                  <nuxt-link :to="`/category/${category.id}`">
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
    }
  },
  mounted() {
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
          x.URL = 'category/' + x.id
        })
      })

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
    async logout(e) {
      e.preventDefault()
      try {
        await this.$store.dispatch('logout')
        this.$router.push('/')
      } catch (error) {
        this.formError = error.message
      }
    },
  },
}
</script>