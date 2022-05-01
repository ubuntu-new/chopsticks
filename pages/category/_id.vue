<template>
  <div>
    <!-- Start Page Title Area -->
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
        </ul>
      </div>
    </div>
    <!-- End Page Title Area -->

    <!-- Start Products Details Area -->
    <div class="products-details-area ptb-60">
      <div class="container">
        <div class="row">
          <ProductItem
            v-for="(product, index) in filteredProducts"
            :product="product"
            :key="index"
            @clicked="toggle(product)"
          ></ProductItem>
        </div>
      </div>
    </div>

    <QuckView />
    <DumplingView />
  </div>
</template>



<script>
import axios from 'axios'
import config from "@/nuxt.config"
import ProductItem from '../../components/common/ProductItem.vue'
import QuckView from '../../components/modals/QuckView'
import DumplingView from '../../components/modals/DumplingView'
import { mutations } from '../../utils/sidebar-util'

export default {
  data() {
    return {
      API_URL: config.head.API_URL,
      id: this.$route.params.id,
      filteredProducts: [],
      currentLang: this.$i18n.locale,
    }
  },
  components: {
    ProductItem,
    QuckView,
    DumplingView,
  },
  computed: {
    cart() {
      return this.$store.getters.cart
    },
  },
  mounted(){
      const TOKEN = "TodKtEjTTqj8HBVGmQPE3gW5TFY";
      var bodyFormData = new FormData();
      bodyFormData.set("category_id", this.id);
      // alert(this.currentLang+ "cat");
      axios
      .request({
        method: "post",
        url: this.API_URL + "webertela/products/list",
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
        data: bodyFormData,
      })
      .then((response) => {
        this.filteredProducts = response.data.data;

        this.filteredProducts.forEach(x => {
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
  },
}
</script>