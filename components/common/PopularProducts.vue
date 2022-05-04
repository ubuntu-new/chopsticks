<template>
<client-only>
  <div>
    <div class="popular-products-area ptb-60">
      <div class="container">
        <div class="products-category-tab-style-2">
          <div class="row title">
            <h2><span class="dot"></span> {{ $t("shop") }}</h2>
          </div>
          <b-tabs content-class="mt-3 tab_content">
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
          </b-tabs>
        </div>
      </div>
    </div>
    <QuckView />
    <DumplingView />
  </div>
</client-only>
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
      currentLang: this.$i18n.locale,
    }
  },
  mounted() {
    this.getproducts();
    // alert(this.currentLang);
    this.$store.dispatch('activeLang', this.currentLang);
  },
  methods: {
    toggle(product) {
        this.$store.dispatch('selectProduct', product)
        if(product.category_id == 1){
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
            category_id: product.category_id,
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
      }
    },
    getproducts(){
      const TOKEN = "TodKtEjTTqj8HBVGmQPE3gW5TFY";
      axios
      .request({
        method: "post",
        url: this.API_URL + "webertela/products/list",
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
      })
      .then((response) => {
        this.products = response.data.data;
        this.products.forEach(x => {
          // PRODUCT LANG CHECK
          if(this.currentLang == 'ka'){
            x.description_en = x.description;
            x.name_en = x.name;
            x.description = x.description_ge;
            x.name = x.name_ge;
          } else if(this.currentLang == 'ru'){
            x.description_en = x.description;
            x.name_en = x.name;
            x.description = x.description_ru;
            x.name = x.name_ru;
          }
          // END OF PRODUCT LANG CHECK

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
    cart() {
      return this.$store.getters.cart
    },
  },
}
</script>