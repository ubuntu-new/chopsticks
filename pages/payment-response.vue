<template>
    <div>
        <!-- Start Page Title Area -->
        <div class="page-title-area">
            <div class="container">
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li>{{ id }}</li>
                </ul>
            </div>
        </div>
        <!-- End Page Title Area -->

        <!-- Start Products Details Area -->
        <section class="products-details-area ptb-60">
            <div class="container">
                <div class="row">
                    <!-- <h1>ORDER ID IS {{ order.shop_order_id }} </h1> -->
                    <h1>BLA BLA</h1>

                    <!-- <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>

                        <tbody v-if="items.length > 0">
                            <tr v-for="(item, i) in items" :key="i">
                                <td class="product-name">
                                        {{item.name}}
                                        <span v-if="item.custom != 'other'">
                                            <br>
                                                Size: <strong>{{ item.size }}</strong>
                                            <br>
                                                Crust: <strong>{{ item.crust }}</strong>
                                            <br>
                                                Sauce: <strong>{{ item.sauce }}</strong>
                                        </span>
                                </td>

                                <td class="product-price">
                                    <span class="unit-amount">{{ parseFloat(item.totalPrice).toFixed(2) }} GEL</span>
                                </td>

                                <td class="product-quantity">
                                        {{item.qty}}
                                </td>

                                <td class="product-subtotal">
                                    <span class="subtotal-amount">{{ parseFloat(item.totalPrice * item.qty).toFixed(2) }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table> -->

                    <!-- <ul>
                        <li v-for="(item, x) in items" :key="x">{{ item.name }}</li>
                    </ul> -->
                </div>
            </div>
        </section>
    </div>
</template>



<script>
import axios from 'axios'
import config from "@/nuxt.config";
export default {
    data(){
        return {
            id: this.$route.query.id,
            order: {},
            items: [],
            API_URL: config.head.API_URL,
        }
    },
    beforeMount() {
       if(!this.id) {
           this.$router.push('/');
       }
       const TOKEN = "TodKtEjTTqj8HBVGmQPE3gW5TFY";
        var bodyFormData = new FormData();
        bodyFormData.set("shop_order_id", this.id);
        axios
            .request({
            method: "post",
            url: this.API_URL + "ipay/get-order-by-shop-id",
            headers: {
                Authorization: "Bearer " + TOKEN,
            },
            data: bodyFormData,
            })
            .then((response) => {
            this.order = response.data;
            this.order.order_data = JSON.parse(this.order.order_data);
            this.items = this.order.order_data.items;
        });
    },
    mounted() {
        // const TOKEN = "TodKtEjTTqj8HBVGmQPE3gW5TFY";
        // var bodyFormData = new FormData();
        // bodyFormData.set("shop_order_id", this.id);
        // axios
        //     .request({
        //     method: "post",
        //     url: this.API_URL + "ipay/get-order-by-shop-id",
        //     headers: {
        //         Authorization: "Bearer " + TOKEN,
        //     },
        //     data: bodyFormData,
        //     })
        //     .then((response) => {
        //     this.order = response.data;
        //     this.order.order_data = JSON.parse(this.order.order_data);
        // });
        this.$forceUpdate();
    },
}
</script>