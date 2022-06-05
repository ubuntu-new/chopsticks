<template>
  <div>
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li>Signup</li>
        </ul>
      </div>
    </div>

    <div class="signup-area ptb-60">
      <div class="container">
        <div class="signup-content">
          <div class="section-title">
            <h2><span class="dot"></span> Create an Account</h2>
          </div>

          <form class="signup-form" @submit.prevent="submit">
            <div class="form-group">
              <label> </label>
              <input
                v-model="username"
                type="text"
                class="form-control"
                placeholder="Enter your username"
                id="fname"
                name="fname"
              />
            </div>

            <div class="form-group">
              <label>Email</label>
              <input
                v-model="email"
                type="email"
                class="form-control"
                placeholder="Enter your name"
                id="name"
                name="name"
              />
            </div>

            <div class="form-group">
              <label>Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Enter your password"
                id="password"
                name="password"
              />
            </div>

            <button type="submit" @click="submit" class="btn btn-primary">
              Signup
            </button>

            <nuxt-link to="/" class="return-store"
              >or Return to Store</nuxt-link
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopHeader from '../layouts/TopHeader'
import Menubar from '../layouts/Menubar'
import config from '@/nuxt.config'
import axios from 'axios'

export default {
  data() {
    return {
      API_URL: config.head.API_URL,
      username: '',
      password: '',
      email: '',
      response: null,
    }
  },
  components: {
    TopHeader,
    Menubar,
  },
  methods: {
    submit() {
      const TOKEN = 'TodKtEjTTqj8HBVGmQPE3gW5TFY'
      var bodyFormData = new FormData()
      bodyFormData.set('username', this.username)
      bodyFormData.set('email', this.email)
      bodyFormData.set('password', this.password)
      axios
        .request({
          method: 'post',
          url: this.API_URL + 's-user/signup',
          headers: {
            Authorization: 'Bearer ' + TOKEN,
          },
          data: bodyFormData,
        })
        .then((response) => {
          this.response = response.data
          this.$router.push('/login')
        })
    },
  },
}
</script>