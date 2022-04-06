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
                    src="../../assets/img/img7-alaska_roll.jpg"
                    alt="image"
                    class="rounded mx-auto d-block"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <div class="product-content">
                  <h3><a href="#">ქათმის პოკებოლი შიტაკის სოკოთი</a></h3>

                  <div class="price">
                    <span class="new-price">191.00 GEL</span>
                  </div>
                  <div class="col">
                    <span class="description">
                      კვერცხი, კომბოსტო, ხახვი, სტაფილო, სოიოს ღერები და საფირმო
                      სოუსით
                    </span>
                  </div>

                  <!-- <div class="product-review">
                    <div class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star-half-alt"></i>
                    </div>
                    <a href="#" class="rating-count">3 reviews</a>
                  </div> -->
                  <h6 class="mt-3 view-full-info">აირჩიე ტოპინგები</h6>
                  <div class="col-auto">
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="1" />
                      <label class="form-check-label" for="1">
                        ქათამი

                        <span class="price"> +GEL 4.00 </span></label
                      >
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="2" />
                      <label class="form-check-label" for="2">
                        ფრანგული ლობიო

                        <span class="price"> +GEL 4.00 </span></label
                      >
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="3" />
                      <label class="form-check-label" for="3">
                        ქათამი

                        <span class="price"> +GEL 4.00 </span></label
                      >
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="4" />
                      <label class="form-check-label" for="4">
                        ქათამი

                        <span class="price"> +GEL 4.00 </span></label
                      >
                    </div>
                  </div>
                  <h6 class="mt-3 view-full-info">აირჩიე სოუსი</h6>
                  <div class="col-auto">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label
                        class="form-check-labe view-full-infol"
                        for="exampleRadios1"
                      >
                        მოტკბო მომჟაო
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        ტაი ქარი
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        ნიპოლ ტერიაკი
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        ბალი ქოქონათ ქარი
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        რედ ქარი
                      </label>
                    </div>
                  </div>

                  <h6 class="mt-3 view-full-info">ექსტრა ტოპინგი</h6>
                  <div class="col-auto">
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="1" />
                      <label class="form-check-label" for="1">
                        ქათამი

                        <span class="price"> +GEL 4.00 </span></label
                      >
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="2" />
                      <label class="form-check-label" for="2">
                        ფრანგული ლობიო

                        <span class="price"> +GEL 4.00 </span></label
                      >
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="3" />
                      <label class="form-check-label" for="3">
                        ქათამი

                        <span class="price"> +GEL 4.00 </span></label
                      >
                    </div>
                    <div class="form-check mb-2">
                      <input class="form-check-input" type="checkbox" id="4" />
                      <label class="form-check-label" for="4">
                        ქათამი

                        <span class="price"> +GEL 4.00 </span></label
                      >
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
                      @click="addToCart(item)"
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
import { store, mutations } from '../../utils/sidebar-util'
export default {
  name: 'QuckView',
  data() {
    return {
      quantity: 1,
      item: {
        id: 4,
        name: 'Criss-cross V neck bodycon',
        price: 200.0,
        offer: false,
        offerPrice: 7,
        latest: true,
        bestSellers: false,
        trending: false,
        image: require('../../assets/img/img4.jpg'),
        imageHover: require('../../assets/img/img-hover4.jpg'),
        timePeriod: false,
        dateTime: new Date('December 19, 2020 17:00:00 PDT'),
      },
    }
  },
  methods: {
    closeQuickView: mutations.toggleQuickView,
    addToCart(item) {
      const product = [
        {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: this.quantity,
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
    isQuickViewOpen() {
      return store.isQuickViewOpen
    },
    cart() {
      return this.$store.getters.cart
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/styles/_transitions.scss';
</style>