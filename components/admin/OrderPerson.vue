<template>
    <div class="recent-orders-box">
        <div class="title">
            <h3 v-b-toggle="`collapse-${data.id}`">
                <i class="fas fa-expand-arrows-alt"></i>
                {{ loggedUser.first_name }}'s Orders ({{data.order_data.length}} Items)
            </h3>
            <ul>
                <li><a href="#">View</a></li>
                <li><a href="#">Edit</a></li>
                <li ><button>Delete</button></li>
            </ul>
        </div>

        <b-collapse :id="`collapse-${data.id}`">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Unit Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <OrderItem v-for="(item, j) in data.order_data" :key="j" :item="item"></OrderItem>
                    </tbody>
                </table>
            </div>
        </b-collapse>
    </div>
</template>

<script>
import OrderItem from './OrderItem';
import firebase from '../../plugins/firebase';

export default {
    components: {
        OrderItem
    },
    props: ['data'], 
    methods: {
        
    },
    computed: {
        loggedUser(){
            return this.$store.getters.getUser
        },
    },
}
</script>

<style scoped>
h3{
    cursor: pointer;
}
</style>