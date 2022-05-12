<template>
    <div class="cartItem">
        <div><img :src="cartItem.url"></div>
        <div><h3>{{cartItem.title}}</h3></div>
        <div><h4>{{cartItem.price}}</h4></div>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Cart",
        props: {
            cartItem: {
                type: Object,
                default: ()=>({})
            },
        },
    }
</script>

<style lang="css" scoped>
.cartItem{
    display: flex;
}
</style>