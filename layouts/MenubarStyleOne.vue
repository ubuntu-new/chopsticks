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
                <li class="nav-item">
                  <nuxt-link to="/" class="nav-link active"> Wok </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/" class="nav-link active"> Sushi </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/" class="nav-link active">
                    Salads & Poke Bowls
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/" class="nav-link active"> Soups </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/" class="nav-link active">
                    Dumplings
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/" class="nav-link active">
                    Spring Rols
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/" class="nav-link active">
                    Hot Dishes
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/" class="nav-link active"> Burger </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/" class="nav-link active"> Sides </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/diction-two" class="nav-link active">
                    Sause
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/diction-two" class="nav-link active">
                    Deserts
                  </nuxt-link>
                </li>
                <li class="nav-item">
                  <nuxt-link to="/diction-two" class="nav-link active">
                    Soft & Alcolol Drinks
                  </nuxt-link>
                </li>
                <!-- <li class="nav-item">
                      <nuxt-link to="/diction-three" class="nav-link active">
                        Home Style Three
                      </nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link to="/diction-four" class="nav-link active">
                        Home Style Four
                      </nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link to="/diction-five" class="nav-link active">
                        Home Style Five
                      </nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link to="/diction-six" class="nav-link active">
                        Home Style Six
                      </nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link to="/diction-seven" class="nav-link active">
                        Home Style Seven
                      </nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link to="/diction-eight" class="nav-link active">
                        Home Style Eight
                      </nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link to="/diction-nine" class="nav-link active">
                        Home Style Nine
                      </nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link to="/diction-ten" class="nav-link active">
                        Home Style Ten
                      </nuxt-link>
                    </li>
                    <li class="nav-item">
                      <nuxt-link to="/diction-eleven" class="nav-link active">
                        Home Style Eleven
                      </nuxt-link>
                    </li> -->

                <li class="nav-item">
                  <nuxt-link to="/contact" class="nav-link">
                    Contact
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
export default {
  name: 'MenubarStyleOne',
  data() {
    return {
      isSticky: false,
    }
  },
  mounted() {
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