<template>
        <div>
        <cart
         v-for="cartItem in pizzaBuyList" 
         :key="cartItem.id"
         :cartItem="cartItem"
         />
    </div>
</template>

<script>
import Cart from './Cart.vue'
import {mapGetters} from 'vuex'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'MenuCart',
        components: {
            // eslint-disable-next-line vue/no-unused-components
            Cart,
        },
        data() {
            return {
                pizzaBuyList: []
            }
        },
        computed: {
            ...mapGetters(['getPizzaBuy']),
        },
        methods: {
            onLoad() {
                this.pizzaBuyList=this.getPizzaBuy;
            },
        },
        mounted () {
            this.onLoad();
        }
    }
</script>

<style lang="scss" scoped>

</style>