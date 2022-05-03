<template>
  <div>
    <div class="modal-backdrop" v-if="isQuickViewOpen"></div>
    <transition name="slide-fade">
      <!-- Start Products QuickView Modal Area -->
      <div
        v-if="isQuickViewOpen"
        class="modal fade productQuickView"
        id="productQuickView"
        tabindex="-1"
        transition="dialog-bottom-transition"
        max-width="600"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <button type="button" class="close" @click="closeQuickView">
              <span aria-hidden="true"><i class="fas fa-times"></i></span>
            </button>
            <div class="row align-items-center">
              <div class="col-sm-12">
                <div class="productQuickView-image pb-3">
                  <img
                    :src="selectedProduct.image"
                    alt="image"
                    class="rounded mx-auto d-block"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="product-content">
                  <h3>
                    <a href="#" class="modal_product_name">{{
                      selectedProduct.name
                    }}</a>
                  </h3>

                  <div class="price">
                    <span class="new-price">{{ changePrice() }} &#8382;</span>
                  </div>
                  <div class="col p-0">
                    <span class="description">
                      {{ selectedProduct.description }}
                    </span>
                  </div>

                  <h6 class="mt-3 view-full-info mb-3 green">
                    {{ $t('choose') }}
                  </h6>
                  <div class="col-auto p-0">
                    <div
                      class="form-check mb-2 unselectable p-0"
                      v-for="(topping, index) in toppings"
                      :key="index"
                      @click="increaseTopping(topping)"
                    >
                      <!-- <input class="form-check-input" type="checkbox" :id="index" /> -->
                      <i
                        class="fa fa-plus font-icons"
                        aria-hidden="true"
                        v-if="topping.qty == null"
                      ></i>
                      <i
                        class="fa fa-check green font-icons"
                        aria-hidden="true"
                        v-else
                      ></i>
                      <label class="form-check-label">
                        <span class="topping-title" v-if="topping.qty == null">
                          {{ topping.name }}
                        </span>
                        <span class="topping-title" v-else>
                          {{ topping.name }} X {{ topping.qty }}
                        </span>

                        <span class="price">
                          <span
                            class="topping-title"
                            v-if="topping.qty == null || topping.qty == 0"
                          >
                            {{ addZeroes(topping.price) }} &#8382;
                          </span>
                          <span class="topping-title" v-else>
                            {{
                              addZeroes(
                                Number(topping.price) * Number(topping.qty)
                              )
                            }}
                            &#8382;
                          </span>
                        </span></label
                      >
                    </div>
                  </div>
                  <h6 class="mt-3 view-full-info mb-3 green">
                    {{ $t('sauce') }}
                  </h6>
                  <div class="col-auto p-0">
                    <div
                      class="form-check unselectable"
                      v-for="(sauce, index) in sauces"
                      :key="index"
                      @click="selectSauce(sauce)"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        :id="index"
                        value="option1"
                      />
                      <label
                        :for="index"
                        class="form-check-labe view-full-infol"
                      >
                        {{ sauce.name }}
                      </label>
                    </div>
                  </div>

                  <h6 class="mt-3 view-full-info mb-3 green">
                    {{ $t('extra') }}
                  </h6>
                  <div class="col-auto p-0">
                    <div
                      class="form-check mb-2 p-0 unselectable"
                      v-for="(extra, index) in extras"
                      :key="index"
                      @click="increaseExtra(extra)"
                    >
                      <i
                        class="fa fa-plus font-icons"
                        aria-hidden="true"
                        v-if="extra.qty == null"
                      ></i>
                      <i
                        class="fa fa-check green font-icons"
                        aria-hidden="true"
                        v-else
                      ></i>
                      <label class="form-check-label">
                        <span class="topping-title" v-if="extra.qty == null">
                          {{ extra.name }}
                        </span>
                        <span class="topping-title" v-else>
                          {{ extra.name }} X {{ extra.qty }}
                        </span>

                        <span class="price">
                          <span
                            class="topping-title"
                            v-if="extra.qty == null || extra.qty == 0"
                          >
                            {{ addZeroes(extra.price) }} &#8382;
                          </span>
                          <span class="topping-title" v-else>
                            {{
                              addZeroes(Number(extra.price) * Number(extra.qty))
                            }}
                            &#8382;
                          </span>
                        </span></label
                      >
                    </div>
                  </div>
                  <div class="modal-footer justify-content-between">
                    <div class="row">
                      <div class="col-12">
                        <button type="button" class="btn btn-primary">
                          <div class="input-counter">
                            <span @click="decreaseQuantity()" class="minus-btn"
                              ><i class="fas fa-minus font-icons"></i
                            ></span>
                            <span class="cartquantity p-2">
                              {{ quantity }}
                            </span>
                            <span @click="increaseQuantity()" class="plus-btn"
                              ><i class="fas fa-plus font-icons"></i
                            ></span>
                          </div>
                        </button>

                        <button
                          type="submit"
                          class="btn btn-primary"
                          @click="addToCart(selectedProduct)"
                        >
                          <i class="fas fa-cart-plus font-icons"></i> Add to
                          Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Products QuickView Modal Area -->
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import { store, mutations } from '../../utils/sidebar-util'
import config from '@/nuxt.config'

export default {
  name: 'QuckView',
  data() {
    return {
      quantity: 1,
      ingredients: [],
      toppings: [],
      sauces: [],
      extras: [],
      selectedToppings: [],
      selectedExtra: [],
      selectedSauce: {},
      API_URL: config.head.API_URL,
    }
  },
  mounted() {
    const TOKEN = 'TodKtEjTTqj8HBVGmQPE3gW5TFY'
    axios
      .request({
        method: 'post',
        url: this.API_URL + 'products/get-ingredients',
        headers: {
          Authorization: 'Bearer ' + TOKEN,
        },
      })
      .then((response) => {
        this.ingredients = response.data

        this.ingredients.forEach((x) => {
          if (x.product_category_id == 1) {
            x.qty = null
            this.toppings.push(x)
          } else if (x.product_category_id == 2) {
            this.sauces.push(x)
          } else if (x.product_category_id == 3) {
            x.qty = null
            this.extras.push(x)
          }
        })
      })
  },
  methods: {
    addZeroes(num) {
      return num.toLocaleString('en', {
        useGrouping: false,
        minimumFractionDigits: 2,
      })
    },
    increaseTopping(topping) {
      if (
        this.selectedToppings.filter((x) => x.name === topping.name).length > 0
      ) {
        var index = this.selectedToppings.indexOf(topping)
        if (this.selectedToppings[index].qty < 4) {
          this.selectedToppings[index].qty =
            this.selectedToppings[index].qty + 1
          topping.qty = this.selectedToppings[index].qty
        } else {
          // alert('DELETE TOPPING');

          // this.selectedToppings[index].qty = null;
          this.selectedToppings.splice(index, 1)
          topping.qty = null
        }
      } else {
        topping.qty = 1
        this.selectedToppings.push(topping)
      }
      this.changePrice()
      this.$forceUpdate()
    },
    increaseExtra(extra) {
      if (this.selectedExtra.filter((x) => x.name === extra.name).length > 0) {
        var index = this.selectedExtra.indexOf(extra)
        if (this.selectedExtra[index].qty < 4) {
          this.selectedExtra[index].qty = this.selectedExtra[index].qty + 1
          extra.qty = this.selectedExtra[index].qty
        } else {
          // alert('DELETE TOPPING');

          // this.selectedToppings[index].qty = null;
          this.selectedExtra.splice(index, 1)
          extra.qty = null
        }
      } else {
        extra.qty = 1
        this.selectedExtra.push(extra)
      }
      this.changePrice()
      this.$forceUpdate()
    },
    selectSauce(sauce) {
      this.selectedSauce = sauce
    },
    closeQuickView: mutations.toggleQuickView,
    addToCart(item) {
      var newItem = {}
      if (item.category_name == 'WOK') {
        newItem.id = item.id
        newItem.name = item.name
        newItem.price = item.price
        newItem.image = item.image
        newItem.toppings = this.selectedToppings
        newItem.extras = this.selectedExtra
        newItem.sauce = this.selectedSauce
        newItem.quantity = this.quantity
      }

      const product = [
        {
          id: item.id,
          name: item.name,
          price: this.changePrice(),
          image: item.image,
          toppings: this.selectedToppings,
          extras: this.selectedExtra,
          sauce: this.selectedSauce,
          quantity: newItem.quantity,
        },
      ]

      if (this.cart.length > 0) {
        let id = item.id
        this.getExistPId = id
        let cartIndex = this.cart.findIndex((cart) => {
          return cart.id == id
        })

        if (cartIndex == -1) {
          this.$store.dispatch('addToCart', product)
          this.$toast('Added to cart', {
            icon: 'fas fa-cart-plus  font-icons',
          })
        } else {
          this.$store.dispatch('updateCart', {
            id,
            unit: 1,
            cart: this.cart,
          })
          this.$toast.info('Already added to the cart and update with one')
        }
      } else {
        this.$store.dispatch('addToCart', product)
        this.$toast('Added to cart', {
          icon: 'fas fa-cart-plus  font-icons',
        })
      }
      this.quantity = 1
      this.selectedSauce = {}
      this.selectedToppings = []
      this.selectedExtra = []
      this.closeQuickView()
    },
    increaseQuantity() {
      if (this.quantity > 9) {
        this.$toast.error("Can't add more than 10", {
          icon: 'fas fa-cart-plu  font-iconss',
        })
      } else {
        this.quantity++
      }
    },
    decreaseQuantity() {
      if (this.quantity < 2) {
        this.$toast.error("Can't add less than 1", {
          icon: 'fas fa-cart-plus  font-icons',
        })
      } else {
        this.quantity--
      }
    },
    changePrice() {
      // var additionalPrice = 0;

      var price = Number(this.$store.getters.selectedItem.price)

      this.selectedToppings.forEach((x) => {
        price = price + Number(x.price) * Number(x.qty)
      })

      this.selectedExtra.forEach((y) => {
        price = price + Number(y.price) * Number(y.qty)
      })

      return price
    },
  },
  computed: {
    isQuickViewOpen() {
      return store.isQuickViewOpen
    },
    cart() {
      return this.$store.getters.cart
    },
    selectedProduct() {
      return this.$store.getters.selectedItem
    },
    itemPrice() {
      // var additionalPrice = 0;

      var price = Number(this.$store.getters.selectedItem.price)

      this.selectedToppings.forEach((x) => {
        price = price + Number(x.price) * Number(x.qty)
      })

      return price
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/styles/_transitions.scss';
</style>