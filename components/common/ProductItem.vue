<template>
  <client-only>
    <div class="col-lg-3 col-md-6 col-sm-6 mb-5">
      <div class="single-product-box">
        <div class="product-image pb-3">
          <!-- <nuxt-link :to="`/products-details/${product.id}`"> -->
          <img
            :src="product.image"
            :alt="product.name"
            class="rounded mx-auto d-block"
          />
          <img
            :src="product.imageHover"
            :alt="product.name"
            class="rounded mx-auto d-block"
          />
        </div>

        <div class="product-content">
          <h3>
            {{ product.name }}
          </h3>
          <div class="descr">
            <small v-html="product.description"></small>
          </div>

          <div class="p-2 modal-footer">
            <span class="old-price" v-if="product.offer">
              {{ addZeroes(product.price - product.offerPrice) }} &#8382;
            </span>
            <span class="new-price" v-else
              >{{ addZeroes(product.price) }} &#8382;</span
            >
            <a
              class="btn btn-light"
              href="javascript:void(0)"
              style="width: 100px; float: right"
              :title="product.name"
              v-b-tooltip.hover
              @click.prevent="quickView"
              v-if="product.category_id == 1 || product.category_id == 8"
            >
              {{ $t('select') }}
            </a>
            <div class="price d-flex align-content-around" v-else>
              <div class="qty w-110 p-1">
                <i
                  class="fa fa-minus"
                  aria-hidden="true"
                  @click="decreaseQty"
                ></i>
                {{ itemQty }}
                <i
                  class="fa fa-plus"
                  aria-hidden="true"
                  @click="increaseQty"
                ></i>
              </div>
              <button
                type="button"
                class="btn btn-light"
                @click="addToCart(product)"
              >
                {{ $t('addCart') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'ProductItem',
  data() {
    return {
      getExistPId: null,
      itemQty: 1,
    }
  },
  props: ['product'],
  computed: {
    cart() {
      return this.$store.getters.cart
    },
  },
  methods: {
    addZeroes(num) {
      return num.toLocaleString('en', {
        useGrouping: false,
        minimumFractionDigits: 2,
      })
    },
    decreaseQty() {
      if (this.itemQty > 1) {
        this.itemQty--
      }
    },
    increaseQty() {
      this.itemQty++
    },
    quickView(e) {
      this.$emit('clicked')
    },
    addToCart(item) {
      const product = [
        {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          category_id: item.category_id,
          quantity: this.itemQty,
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
      this.itemQty = 1
    },
  },
}
</script>