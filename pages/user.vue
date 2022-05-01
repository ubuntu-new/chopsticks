<template>
  <client-only>
    <div>
      <div class="container-fluid">
        <div class="row">
          <Sidebar />
          <main role="main" class="col-md-12 ml-sm-auto col-lg-10 px-4">
            <div
              class="d-md-flex d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
            >
              <h1 class="h2">{{ loggedUser.first_name }}'s Dashboard</h1>
              <div class="btn-toolbar">
                <div class="btn-group mr-2">
                  <!-- <button
                    v-b-tooltip.hover
                    title="Coming Soon"
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >Share</button> -->
                  <button
                    v-b-tooltip.hover
                    title="Coming Soon"
                    type="button"
                    class="btn btn-sm btn-outline-secondary ml-2"
                    @click="logout"
                  >logout</button>
                </div>
                <!-- <button
                  v-b-tooltip.hover
                  title="Coming Soon"
                  type="button"
                  class="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-calendar"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  This week
                </button> -->
              </div>
            </div>

            <!-- <Loader v-if="loading" /> -->
            <div v-if="orders.length > 0">
              <OrderPerson v-for="(data, i) in orders" :key="i" :data="data" />
            </div>
            <div v-else>
              <h3>
                <i>There are no orders right now!!</i>
              </h3>
            </div>
          </main>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import Loader from '../components/common/Loader'
import OrderPerson from '../components/admin/OrderPerson'
import Sidebar from '../components/admin/Sidebar'
import config from '@/nuxt.config'
import axios from 'axios'

export default {
  layout: 'admin',
  components: {
    OrderPerson,
    Loader,
    Sidebar
  },
  data() {
    return {
      id: 1,
      loading: true,
      ordersData: [],
      order: [],
      orders: [],
      API_URL: config.head.API_URL,
    }
  },
  computed: {
    loggedUser() {
      return this.$store.getters.getUser;
    },
    cart() {
      return this.$store.getters.getOrder;
    }
  },
  methods: {
        logout(){
        this.$store.dispatch("logoutUser");
        this.$router.push("/");
    },
  },
  mounted() {
    if(this.loggedUser.isAuth){
        this.order.push(this.cart);

        const TOKEN = 'TodKtEjTTqj8HBVGmQPE3gW5TFY'
        var bodyFormData = new FormData();
        bodyFormData.set("user_id", this.id);
        axios
          .request({
            method: 'post',
            url: this.API_URL + 'orders/list',
            headers: {
              Authorization: 'Bearer ' + TOKEN,
            },
            data: bodyFormData,
          })
          .then((response) => {
            this.orders = response.data.data;

            this.orders.forEach(x => {
              x.order_data = JSON.parse(x.order_data);
              x.customer = JSON.parse(x.customer);
            });
          });
      } else {
          this.$router.push('/');
      }

    },
}
</script>
