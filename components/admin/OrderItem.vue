<template>
    <tr>
        <td class="name"><img :src="item.image" alt="image"> {{item.name}}</td>
        <td>{{item.price}} &#8382;</td>
        <td>{{item.quantity}}</td>
        <td>{{(item.price * item.quantity).toFixed(2)}} &#8382;</td>
        <td><span class="badge badge-primary">Received</span></td>
    </tr>
</template>

<script>
export default {
    props: ['item']
}
</script>