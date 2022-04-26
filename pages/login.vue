<template>
  <div>
    <TopHeader />
    <Menubar />
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li>Login</li>
        </ul>
      </div>
    </div>

    <div class="login-area ptb-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <div class="login-content">
              <div class="section-title">
                <h2><span class="dot"></span> Login</h2>
              </div>

              <form
                class="login-form"
                v-if="!loggedUser.isAuth"
                @submit.prevent="submit"
              >
                <p v-if="formError" class="error">
                  {{ formError }}
                </p>
                <div class="form-group">
                  <label>Username</label>
                  <input
                    v-model="formUsername"
                    type="text"
                    class="form-control"
                    placeholder="demo"
                    name="username"
                  />
                </div>

                <div class="form-group">
                  <label>Password</label>
                  <input
                    v-model="formPassword"
                    type="password"
                    class="form-control"
                    placeholder="demo"
                    name="password"
                  />
                </div>

                <button type="submit" class="btn btn-primary">Login</button>

                <nuxt-link to="/" class="forgot-password"
                  >Lost your password?</nuxt-link
                >
              </form>
            </div>
          </div>

          <div class="col-lg-6 col-md-12">
            <div class="new-customer-content">
              <div class="section-title">
                <h2><span class="dot"></span> New Customer</h2>
              </div>

              <span>Create a Account</span>
              <p>
                Sign up for a free account at our store. Registration is quick
                and easy. It allows you to be able to order from our shop. To
                start shopping click register.
              </p>
              <nuxt-link to="/signup" class="btn btn-light"
                >Create A Account</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import TopHeader from '../layouts/TopHeader'
import Menubar from '../layouts/Menubar'
import config from "@/nuxt.config"


export default {
  components: {
    TopHeader,
    Menubar,
  },
  data() {
    return {
      LOGIN_URL: config.head.LOGIN_URL,
      formError: null,
      formUsername: '',
      formPassword: '',
    }
  },
  computed: {
    loggedUser() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    submit(){
            var bodyFormData=new FormData();
            bodyFormData.set("username", this.formUsername);
            bodyFormData.set("password", this.formPassword);

            axios.request({
                    method: "post",
                    url: this.LOGIN_URL,
                    data: bodyFormData,
            }).then((response) => {  
                    if(!response.data.is_error) {
                        // alert('LOGIN');
                        this.response = response;
                        // this.onPinSubmit(pin);
                        this.$store.dispatch("addUser", response.data.data);
                        this.$router.push('/');
                    }
                    else {
                       alert(response.data.error_message);
                        this.loginDialog = true;
                        this.email = '';
                        this.password = '';
                        this.response = response;
                    }
                }
            );
        },
  },
}
</script>