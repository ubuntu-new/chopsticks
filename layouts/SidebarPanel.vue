<template>
    <div>
        <div class="modal-backdrop" v-if="isPanelOpen" @click="closeBla"></div>
        <!-- Start Shopping Cart Modal -->
        <transition name="slide-fade">
            <div v-if="isPanelOpen" class="modal right shoppingCartModal" id="shoppingCartModal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <button type="button" class="close" @click="closeSidebarPanel"><span aria-hidden="true">&times;</span></button>

                        <div 
                            class="modal-body"
                            v-if="cart.length > 0"
                        >
                            <h3>{{ $t('cart')}} ({{cart.length}})</h3>

                            <div class="product-cart-content">

                                <div 
                                    class="product-cart"
                                    v-for="cart in cart"
                                    :key="cart.id"
                                >
                                    <div class="product-image">
                                        <img :src="cart.image" :alt="cart.name" />
                                    </div>

                                    <div class="product-content">
                                        <h3><a href="#">{{cart.name}}</a></h3>
                                        <div class="product-price">
                                            <span>{{cart.quantity}}</span>
                                            <span>x</span>
                                            <span class="price">{{cart.price}} &#8382;</span>
                                        </div>
                                    </div>

                                    <div class="product-content col-6">
                                        <div class="qty">
                                            <i class="fas fa-trash" v-if="cart.quantity == 1" @click="onDecrement(cart.id, cart.quantity)"></i>
                                            <i class="fas fa-minus" v-else @click="onDecrement(cart.id, cart.quantity)"></i>
                                            {{ cart.quantity }}
                                            <i class="fas fa-plus" @click="onIncrement(cart.id, cart.quantity)"></i>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="product-cart-subtotal">
                                <span>{{$t('subtotal')}}</span>

                                <span class="subtotal">{{cartTotal}} &#8382;</span>
                            </div>

                            <div @click="closeSidebarPanel" class="product-cart-btn" v-if="cartTotal >= 20">
                                <nuxt-link to="/checkout" class="btn btn-primary">{{$t('proceedtocheckout')}}</nuxt-link>
                                <nuxt-link to="/cart" class="btn btn-light">{{$t('viewshoppingcart')}}</nuxt-link>
                            </div>
                            <div class="product-cart-btn " v-else>
                                <div class="btn btn-primary disabled">{{$t('minorder')}}</div>
                            </div>
                        </div>
                        <div class="modal-body" v-else>
                            <h3>Empty!</h3>
                            <div @click="closeSidebarPanel" class="product-cart-btn">
                                Cart is empty!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <!-- End Shopping Cart Modal -->
    </div>
</template>

<script>
import { store, mutations } from '../utils/sidebar-util';
export default {
    name: 'SidebarPanel',
    methods: {
        closeSidebarPanel: mutations.toggleNav,
        closeBla(){
            alert('OUTSIDE');
        },
        removeItemFromCart(id){
            this.$store.dispatch('deleteCart', id)
        },
        onIncrement(id){
            this.$store.dispatch('updateCart', {
                id,
                unit: 1,
                cart: this.cart
            })
        },
        onDecrement(id, quantity){
            if (quantity > 1) {
                this.$store.dispatch('updateCart', {
                    id,
                    unit: -1,
                    cart: this.cart
                })
            } else {
                this.removeItemFromCart(id);
                this.$toast.warning("Item deleted!");
            }
        },
    },
    computed: {
        isPanelOpen(){
            return store.isNavOpen
        },
        cart(){
            return this.$store.getters.cart
        },
        cartTotal(){
            return this.$store.getters.totalAmount
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/styles/_transitions.scss";
</style>