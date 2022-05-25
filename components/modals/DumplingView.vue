<template>
  <div>
    <div class="modal-backdrop" v-if="isDumplingViewOpen"></div>
    <transition name="slide-fade">
      <!-- Start Products QuickView Modal Area -->
      <div
        v-if="isDumplingViewOpen"
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
                    v-if="selectedType == 'Boiled'"
                    :src="selectedProduct.image"
                    alt="image"
                    class="rounded mx-auto d-block"
                  />
                  <img
                    v-else
                    src="https://chopsticks.webertela.online/back_api/backend/web/images/store/Products/dumpl_fried.jpg"
                    alt="image"
                    class="rounded mx-auto d-block"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="product-content">
                  <h3><a href="#">{{ selectedProduct.name }}</a></h3>

                  <div class="price">
                    <span class="new-price">{{ itemPrice }} GEL</span>
                  </div>
                  <div class="col">
                    <span class="description">
                      {{ selectedProduct.description }}
                    </span>
                  </div>

                  <h6 class="mt-3 view-full-info">აირჩიე მეთოდი</h6>
                  <div class="col-auto">

                    <div class="form-check unselectable" v-for="(type, index) in types" :key="index" @click="selectType(type)">
                      <label
                        class="form-check-labe view-full-infol"
                        for="exampleRadios"
                      >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        :id="index"
                        value="option1"
                        checked
                      />
                        {{ type }}
                      </label>
                    </div>
                  </div>

                  
                  <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-primary">
                      <div class="input-counter">
                        <span @click="decreaseQuantity()" class="minus-btn"
                          ><i class="fas fa-minus"></i
                        ></span>
                        <span class="cartquantity p-2"> {{ quantity }} </span>
                        <span @click="increaseQuantity()" class="plus-btn"
                          ><i class="fas fa-plus"></i
                        ></span>
                      </div>
                    </button>

                    <button
                      type="submit"
                      class="btn btn-primary"
                      @click="addToCart(selectedProduct)"
                    >
                      <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
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
// import axios from 'axios'
import { store, mutations } from '../../utils/sidebar-util'
import config from "@/nuxt.config"

export default {
  name: 'DumplingView',
  data() {
    return {
      quantity: 1,
      types: ["Fried", "Boiled"],
      selectedType: "Boiled",      
      API_URL: config.head.API_URL,
    }
  },
  methods: {
    selectType(type){
      // var friedDumpling = 'https://chopsticks.webertela.online/back_api/backend/web/images/store/Products/dumpl_fried.jpg';
      // if(type == 'Fried') {
      //   this.selectedProduct.oldImage = this.selectedProduct.image;
      //   this.selectedProduct.image = friedDumpling;
      //   alert('FRIED');
      // } else {
      //   this.selectedProduct.image = this.selectedProduct.oldImage;
      //   alert('BOILED');
      // }
      this.selectedType = type;
      this.$forceUpdate();
    },
    closeQuickView: mutations.toggleDumplingView,
    addToCart(item) {
      var newItem = {};
      if(item.category_id == 8){
        newItem.id = item.id;
        newItem.name = item.name;
        newItem.price = item.price;
        newItem.image = item.image;
        newItem.types = this.selectedType;
        newItem.quantity = this.quantity;
        newItem.category_id = item.category_id;
        }
        const product = [
        {
          id: item.id,
          name: item.name,
          price: this.itemPrice,
          image: item.image,
          type: this.selectedType,
          quantity: newItem.quantity,
          category_id: newItem.category_id,
        },
      ];
      if (this.cart.length > 0) {
        let id = item.id
        this.getExistPId = id
        let cartIndex = this.cart.findIndex((cart) => {
          return cart.id == id
        })
        if (cartIndex == -1) {
          this.$store.dispatch('addToCart', product)
          this.$toast('Added to cart', {
            icon: 'fas fa-cart-plus',
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
          icon: 'fas fa-cart-plus',
        })
      }
      this.quantity = 1;
      this.selectedSauce = {};
      this.selectedToppings = [];
      this.selectedExtra = [];
      this.closeQuickView()
    },
    increaseQuantity() {
      if (this.quantity > 9) {
        this.$toast.error("Can't add more than 10", {
          icon: 'fas fa-cart-plus',
        })
      } else {
        this.quantity++
      }
    },
    decreaseQuantity() {
      if (this.quantity < 2) {
        this.$toast.error("Can't add less than 1", {
          icon: 'fas fa-cart-plus',
        })
      } else {
        this.quantity--
      }
    },
  },
  computed: {
    isDumplingViewOpen() {
      return store.isDumplingViewOpen
    },
    cart() {
      return this.$store.getters.cart
    },
    selectedProduct() {
      return this.$store.getters.selectedItem
    },
    itemPrice(){
      // var additionalPrice = 0;

      var price = Number(this.$store.getters.selectedItem.price);

      return price;
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/styles/_transitions.scss';
</style>