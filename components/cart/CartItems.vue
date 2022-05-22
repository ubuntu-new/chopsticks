<template>
  <div class="cart-area ptb-60">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <form>
            <div class="cart-table table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Name</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>

                <tbody v-if="cart.length > 0">
                  <tr v-for="(cart, i) in cart" :key="i">
                    <td class="product-thumbnail">
                      <a href="#">
                        <img :src="cart.image" :alt="cart.name" />
                      </a>
                    </td>

                    <td class="product-name">
                        {{ cart.name }}
                      <span v-if="cart.category_id == 1">
                        <ul>
                          Toppings
                          <li v-for="(topping, index) in cart.toppings" :key="index">{{ topping.name }} - {{ topping.price }} &#8382; </li>
                        </ul>
                        <ul>
                          Sauces
                          <li v-for="(sauce, index) in cart.sauce" :key="index"> {{ sauce.name }}</li>
                        </ul>
                         <ul>
                           Extras
                          <li v-for="(extra, index) in cart.extras" :key="index">{{ extra.name }} - {{ extra.price }} &#8382; </li>
                        </ul>
                      </span>
                      <span v-if="cart.category_id == 8">
                        <ul> 
                          <li>{{ cart.type }}</li>
                        </ul>
                      </span>
                    </td>

                    <td class="product-price">
                      <span class="unit-amount">{{ cart.price }} &#8382;</span>
                    </td>

                    <td class="product-quantity">
                      <div class="input-counter">
                        <span
                          @click="onDecrement(cart.id, cart.quantity)"
                          class="minus-btn"
                          ><i class="fas fa-minus"></i
                        ></span>
                        {{ cart.quantity }}
                        <span @click="onIncrement(cart.id)" class="plus-btn"
                          ><i class="fas fa-plus"></i
                        ></span>
                      </div>
                    </td>

                    <td class="product-subtotal">
                      <span class="subtotal-amount"
                        >{{ cart.price * cart.quantity }} &#8382;</span
                      >
                      <a
                        href="javascript:void(0)"
                        @click="removeItemFromCart(cart.id)"
                        class="remove"
                        ><i class="far fa-trash-alt"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="cart-buttons">
              <div class="row">
                <div class="col-lg-7 col-md-7">
                  <div class="continue-shopping-box">
                    <nuxt-link to="/products" class="btn btn-light"
                      >Continue Shopping</nuxt-link
                    >
                  </div>
                </div>

                <div class="col-lg-5 col-md-5 text-right">
                  <div class="cart-totals">
                    <h3>Cart Totals</h3>

                    <ul>

                      <li>
                        Total
                        <span
                          ><b
                            >${{ parseFloat(cartTotal).toFixed(2) }} &#8382;</b
                          ></span
                        >
                      </li>
                    </ul>
                    <nuxt-link to="/checkout" class="btn btn-light"
                      >Proceed to Checkout</nuxt-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.getters.cart
    },
    cartTotal() {
      return this.$store.getters.totalAmount
    },
  },
  methods: {
    removeItemFromCart(id) {
      this.$store.dispatch('deleteCart', id)
    },
    onIncrement(id) {
      this.$store.dispatch('updateCart', {
        id,
        unit: 1,
        cart: this.cart,
      })
    },
    onDecrement(id, quantity) {
      if (quantity > 1) {
        this.$store.dispatch('updateCart', {
          id,
          unit: -1,
          cart: this.cart,
        })
      } else {
        this.removeItemFromCart(id)
        this.$toast.warning('Item deleted!')
      }
    },
  },
}
</script>