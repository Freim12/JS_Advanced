<template>
    <div class="prod">
        <div v-for="(product,index) in productPrice" :key="index">
                <h2>{{product.title}}</h2>
                Price: <input type="number" v-model="product.price"><br> Так робити не дуже добре. Вам передали масив чезе props, а ви його змінюєте
                Count: <input type="number" v-model="product.count"><br>
                Tax: <input type="number" v-model="product.tax" disabled>
        </div>
    </div>
</template>

<script>
    export default {
        name:'ProductPriceEditor',
        props: {
            productPrice: {
                type: Object,
                default: () => ({})
            },

        },
        
    }
</script>

<style lang="css" scoped>
.prod{
    display: flex;
}
</style>
