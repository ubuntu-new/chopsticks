<template>
  <div>
    <div class="popular-products-area ptb-60">
      <div class="container">
        <div class="products-category-tab-style-2">
          <div class="title">
            <h2><span class="dot"></span> {{ $t("shop") }}</h2>
          </div>
          <b-tabs content-class="mt-3 tab_content">
            <b-tab title="All">
              <div class="tabs_item">
                <div class="row">
                  <ProductItem
                    v-for="(product, index) in products"
                    :product="product"
                    :key="index"
                    @clicked="toggle(product)"
                  ></ProductItem>
                </div>
              </div>
            </b-tab>

            <!-- <b-tab title="Men">
              <div class="tabs_item">
                <div class="row">
                  <ProductItem
                    v-for="(product, index) in products"
                    :product="product"
                    :key="index"
                    @clicked="toggle(product)"
                  ></ProductItem>
                </div>
              </div>
            </b-tab>
            
            <b-tab title="Women">
              <div class="tabs_item">
                <div class="row">
                  <ProductItem
                    v-for="(product, index) in products"
                    :product="product"
                    :key="index"
                    @clicked="toggle(product)"
                  ></ProductItem>
                </div>
              </div>
            </b-tab> -->

          </b-tabs>
        </div>
      </div>
    </div>

    <QuckView />
    <DumplingView />
  </div>
</template>

<script>
import axios from 'axios'
import QuckView from '../modals/QuckView'
import DumplingView from '../../components/modals/DumplingView'
import { mutations } from '../../utils/sidebar-util'
import ProductItem from './ProductItem'
import config from "@/nuxt.config"

export default {
  name: 'PopularProducts',
  components: {
    QuckView,
    ProductItem,
    DumplingView,
  },
  data(){
    return {
      API_URL: config.head.API_URL,
      products: [],
    }
  },
  mounted() {
    this.getproducts();
  },
  methods: {
    toggle(product) {
      this.$store.dispatch('selectProduct', product)
      if(product.category_name == "WOK"){
        mutations.toggleQuickView()
      } else if(product.category_id == 8) {
        mutations.toggleDumplingView()
      } else {
        const item = [{
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          nutritional: product.nutritional,
          description: product.description,
          quantity: 1,
        }];

        if (this.cart.length > 0) {
        let id = product.id
        this.getExistPId = id
        let cartIndex = this.cart.findIndex((cart) => {
          return cart.id == id
        })

        if (cartIndex == -1) {
          this.$store.dispatch('addToCart', item)
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
        this.$store.dispatch('addToCart', item)
        this.$toast('Added to cart', {
          icon: 'fas fa-cart-plus',
        })
      }

        // this.$store.dispatch('addToCart', item)
      }
    },
    getproducts(){
      const TOKEN = "TodKtEjTTqj8HBVGmQPE3gW5TFY";
      axios
      .request({
        method: "post",
        url: this.API_URL + "products/get-productssite",
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
      })
      .then((response) => {
        this.products = response.data;
        this.products.forEach(x => {
          if(x.s != null || x.m != null) {
            x.image = x.s;
            x.imageHover = x.m;
          } else {
            x.image = "https://highresbio.com/wp-content/uploads/2018/03/placeholder-260x260.png";
            x.imageHover = "https://highresbio.com/wp-content/uploads/2018/03/placeholder-260x260.png";
          } 
        });
      });
    },
  },
  computed: {
    // products() {
    //   return this.$store.state.products.all.filter(
    //     (product) => product.latest === true
    //   )
    // },
    cart() {
      return this.$store.getters.cart
    },
  },
}
</script>