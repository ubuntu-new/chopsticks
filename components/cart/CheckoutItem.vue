<template>
  <div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
    <!-- End Page Title Area -->

    <!-- Start Checkout Area -->
    <div class="checkout-area ptb-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="user-actions">
              <i class="fas fa-sign-in-alt"></i>
              <span
                >Returning customer?
                <nuxt-link to="/login">Click here to login</nuxt-link></span
              >
            </div>
          </div>
        </div>

        <form>
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="billing-details">
                <h3 class="title">Billing Details</h3>

                <div class="row">
                  <div class="col-lg-12 col-md-6">
                    <div class="form-group">
                      <label>Full Name <span class="required">*</span></label>
                      <input
                        type="text"
                        id="fullName"
                        v-model="personDetails.fullName"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-6">
                    <div class="form-group">
                      <label>Address <span class="required">*</span></label>
                      <input
                        type="text"
                        id="address"
                        v-model="personDetails.address"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label
                        >Enterance to building</label
                      >
                      <input
                        type="email"
                        id="email"
                        v-model="personDetails.enterance"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label
                        >Enterance security code</label
                      >
                      <input
                        type="email"
                        id="email"
                        v-model="personDetails.security"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label
                        >Floor</label
                      >
                      <input
                        type="email"
                        id="email"
                        v-model="personDetails.floor"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label
                        >Flat Number</label
                      >
                      <input
                        type="email"
                        id="email"
                        v-model="personDetails.flat"
                        class="form-control"
                      />
                    </div>
                  </div>


                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label
                        >Email Address <span class="required">*</span></label
                      >
                      <input
                        type="email"
                        id="email"
                        v-model="personDetails.email"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <label>Phone <span class="required">*</span></label>
                      <input
                        type="text"
                        id="phone"
                        v-model="personDetails.phone"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-12">
              <div class="order-details">
                <h3 class="title">Your Order</h3>

                <div class="order-table table-responsive">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr v-for="(cart, i) in cart" :key="i">
                        <td class="product-name">
                          <a href="#">{{ cart.name }}</a>
                        </td>

                        <td class="product-total">
                          <span class="subtotal-amount"
                            >{{ (cart.price * cart.quantity).toFixed(2) }}</span
                          >
                        </td>
                      </tr>

                      <tr>
                        <td class="order-subtotal">
                          <span>Cart Subtotal</span>
                        </td>

                        <td class="order-subtotal-price">
                          <span class="order-subtotal-amount"
                            >{{ cartTotal }} &#8382;</span
                          >
                        </td>
                      </tr>
                      <!-- <tr>
                        <td class="order-shipping">
                          <span>Shipping</span>
                        </td>

                        <td class="shipping-price">
                          <span>GEL 10.00</span>
                        </td>
                      </tr> -->
                      <tr>
                        <td class="total-price">
                          <span>Order Total</span>
                        </td>

                        <td class="product-subtotal">
                          <span class="subtotal-amount"
                            >{{ parseFloat(cartTotal).toFixed(2) }} &#8382;</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="payment-method">
                  <p>
                    <input type="radio" id="card" name="radio-group" />
                    <label for="card">Pay by Card</label>
                  </p>
                  <p>
                    <input
                      type="radio"
                      id="cash-on-delivery"
                      name="radio-group"
                    />
                    <label for="cash-on-delivery">Cash on Delivery</label>
                  </p>
                </div>

                <a
                  href="javascript:void(0)"
                  @click="add"
                  class="btn btn-primary order-btn"
                  >Place Order</a
                >
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- End Checkout Area -->
  </div>
</template>

<script>
import axios from 'axios'
import config from "@/nuxt.config"
export default {
  data() {
    return {
      API_URL: config.head.API_URL,
      personDetails: {
        fullName: '',
        address: '',
        email: '',
        phone: '',
        enterance: '',
        security: '',
        floor: '',
        flat: '',
      },
      order_data: {},
      response: {},
    }
  },
  computed: {
    cart() {
      return this.$store.getters.cart
    },
    cartTotal() {
      return this.$store.getters.totalAmount
    },
  },
  methods: {
    add() {
      if(this.personDetails.fullName == '' || this.personDetails.address == '' || this.personDetails.phone == ''){
        alert('Fullname, Address and Phone Fields Are Required!');
      } else {
        this.order_data.items = this.cart;
        this.order_data.customer = this.personDetails;
        this.$store.dispatch('addOrder', this.order_data)
        const TOKEN = "TodKtEjTTqj8HBVGmQPE3gW5TFY";
        axios.request({
          method: "post",
          url:
            this.API_URL + "orders/create",
          headers: {
            Authorization: "Bearer " + TOKEN,
          },
          data: this.order_data,
        }).then((response) => {
          this.response = response.data;
          this.$store.dispatch('cartEmpty');
          // this.$router.push('/');
        });
      }
    },
  },
}
</script>