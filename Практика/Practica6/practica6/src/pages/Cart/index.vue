<template>
    <div>
        <router-link to="/">Home</router-link>
        <main-master-page >
            <template v-slot:header><h2>Cart</h2></template>
            <menu-cart />
        </main-master-page>
    </div>
</template>

<script>
import MainMasterPage from "@/masterpages/MainMasterPage"
import MenuCart from '@/components/MenuCart/index.vue'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Cart',
        components: {
            MenuCart,
            MainMasterPage
        },
    }
</script>

<style lang="scss" scoped>

</style>