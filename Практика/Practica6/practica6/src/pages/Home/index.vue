<template>
    <div>
        <router-link to="/cart/">Carts</router-link>
        <main-master-page >
            <home-cart />
        </main-master-page>
    </div>
</template>

<script>
import HomeCart from "@/components/HomeCart/index.vue"
import MainMasterPage from "@/masterpages/MainMasterPage"
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Home',
        components: {
            MainMasterPage,
            HomeCart
        },
    }
</script>

<style lang="scss" scoped>

</style>