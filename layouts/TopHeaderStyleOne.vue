<template>
  <client-only>
    <div>
      <div class="top-header top-header-style-two">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-5">
              <ul class="top-header-nav">
                <!-- <li v-if="!loggedUser.isAuth">
                <nuxt-link to="/login">Login</nuxt-link>
              </li>
              <li v-else>
                <nuxt-link to="#" @click="logout">Logout</nuxt-link>
              </li> 
              <li><nuxt-link to="/signup">Signup</nuxt-link></li>-->
                <li class="option-item">
                  <a href="tel: +995577335080">
                    <i class="fas fa-phone"></i> (+995) 577335080</a
                  >
                </li>
                <li class="option-item green" v-if="isOpen">
                   {{ $t('weareopen') }} 
                </li>
                <li class="option-item " v-else>
                     {{ $t('weareclosed') }}
                </li>
                <li><nuxt-link to="/gallery-one">{{$t("galleryone")}}</nuxt-link></li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-2">
              <div class="top-header-logo">
                <nuxt-link
                  to="/"
                  v-if="$i18n.locale == 'ka'"
                  class="d-inline-block"
                >
                  <img src="../assets/img/logo.webp" alt="image" />
                </nuxt-link>
                <nuxt-link
                  to="/en"
                  v-else-if="$i18n.locale == 'en'"
                  class="d-inline-block"
                >
                  <img src="../assets/img/logo.webp" alt="image" />
                </nuxt-link>
                <nuxt-link
                  to="/ru"
                  v-else-if="$i18n.locale == 'ru'"
                  class="d-inline-block"
                >
                  <img src="../assets/img/logo.webp" alt="image" />
                </nuxt-link>
              </div>
            </div>

            <div class="col-lg-5 col-md-6">
              <div class="top-header-others-option">
                <div class="others-option">
                  <div v-if="!loggedUser.isAuth" class="option-item">
                    <nuxt-link to="/login"> {{ $t('login') }}</nuxt-link>
                  </div>
                  <div v-if="!loggedUser.isAuth" class="option-item">
                    <nuxt-link to="/signup"> {{ $t('signup') }}</nuxt-link>
                  </div>
                  <div v-else class="option-item">
                    <span @click="logout"> {{ $t('logout') }}</span>
                  </div>
                  <div v-if="loggedUser.isAuth" class="option-item">
                    <nuxt-link to="/user">{{ $t('userpage') }}</nuxt-link>
                  </div>
                  <div class="option-item">
                    <a @click.prevent="toggle" href="#">
                      {{ $t('cart') }} ({{ cart.length }})
                      <i class="fas fa-shopping-bag"></i>
                    </a>
                  </div>
                  <div class="option-item" v-if="$i18n.locale == 'ka'">
                    <span @click="changeLang('en')">En</span>
                  </div>
                  <div class="option-item" v-else-if="$i18n.locale == 'en'">
                    <span @click="changeLang('ru')">Рус</span>
                  </div>
                  <div class="option-item" v-else>
                    <!-- <nuxt-link :to="switchLocalePath('ka')">ქარ</nuxt-link> -->
                    <span @click="changeLang('ka')">ქარ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SidebarPanel></SidebarPanel>
    </div>
  </client-only>
</template>

<script>
import SidebarPanel from '../layouts/SidebarPanel'
import { mutations } from '../utils/sidebar-util'

export default {
  name: 'TopHeaderStyleOne',
  components: {
    SidebarPanel,
  },
  data() {
    return {
      isShowing: true,
      currentLang: this.$i18n.locale,
      isOpen: false,
      date: new Date(),
    }
  },
  mounted() {
    this.$emit('onLocaleChange', this.currentLang)
    // this.currentLang = this.$i18n.locale;
    // alert(this.currentLang);
    this.checkOpenBranch();
  },
  methods: {
    checkOpenBranch(){
      var branchClose = new Date();
      var branchOpen = new Date();

      branchClose.setHours(23, 0, 0);
      branchOpen.setHours(11, 0, 0);

       if (this.date >= branchOpen && this.date <= branchClose) {
        this.isOpen = true;
      } else {
        this.isOpen = false;
      }
      this.$store.dispatch('isBranchOpen', this.isOpen);
      this.$forceUpdate();
    },
    changeLang(val) {
      this.$i18n.setLocale(val)
      this.$emit('onLocaleChange', val)
      //  alert(val);
    },
    onTopPanelClose(value) {
      this.isShowing = value
    },
    logout() {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    },
    toggle() {
      mutations.toggleNav()
    },
  },
  computed: {
    cart() {
      return this.$store.getters.cart
    },
    loggedUser() {
      return this.$store.getters.getUser
    },
  },
}
</script>