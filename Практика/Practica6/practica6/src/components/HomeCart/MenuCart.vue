<template>
    <div>
        <img :src="pizzaItem.url">
        <h3>{{pizzaItem.title}}</h3>
        <h4>{{pizzaItem.price}}</h4>
        <button @click="$emit('buy')">Buy</button>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "MenuCart",
        props: {
            pizzaItem: {
                type: Object,
                default: ()=>({})
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>