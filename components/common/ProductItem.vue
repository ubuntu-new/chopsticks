<template>
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
        <small class=""> {{ product.description }} </small>

        <div class="product-price text-left p-3">
          <span class="old-price" v-if="product.offer">
            {{ product.price - product.offerPrice }} &#8382;
          </span>
          <span class="new-price">{{ product.price }} &#8382;</span>
          <a
            class="btn btn-light"
            href="javascript:void(0)"
            style="width: 100px; float: right"
            :title="product.name"
            v-b-tooltip.hover
            @click.prevent="quickView"
          >
            Select
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  data() {
    return {
      getExistPId: null,
    }
  },
  props: ['product'],
  computed: {
    cart() {
      return this.$store.getters.cart
    },
  },
  methods: {
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
          quantity: 1,
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
    },
  },
}
</script>