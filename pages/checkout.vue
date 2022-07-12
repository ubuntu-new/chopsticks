<template>
    <div>
        <CheckoutItem />
    </div>
</template>

<script>
import TopHeader from '../layouts/TopHeader'
import Menubar from '../layouts/Menubar'
import CheckoutItem from '../components/cart/CheckoutItem';
export default {
    components: {
        TopHeader,
        Menubar,
        CheckoutItem,
    },
    computed: {
    cartTotal() {
      return this.$store.getters.totalAmount
    },
    isOpen() {
      return this.$store.getters.getBranchStatus;
    },
  },
  beforeMount(){      
    if(this.cartTotal < 20 ){
      this.$router.push('/');
    }
  },
}
</script>