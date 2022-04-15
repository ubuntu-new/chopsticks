<template>
  <div>
    <!-- <Banner></Banner> -->
    <PopularProducts></PopularProducts>
    <!-- <ProductCategory></ProductCategory> -->
    <Partner></Partner>
  </div>
</template>

<script>
import Banner from '../components/diction-seven/Banner'
import PopularProducts from '../components/common/PopularProducts'
import ProductCategory from '../components/common/ProductCategory'
import Partner from '../components/common/Partner'

export default {
  components: {
    Banner,
    PopularProducts,
    ProductCategory,
    Partner,
  },
}
</script>