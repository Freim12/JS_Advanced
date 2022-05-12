<template>
    <div>
        <menu-cart
         v-for="pizzaItem in pizzaList" 
         :key="pizzaItem.id"
         :pizzaItem="pizzaItem"
         @buy="onBuy(pizzaItem)"
         />
    </div>
</template>

<script>
import MenuCart from './MenuCart.vue'
import {mapActions, mapGetters} from 'vuex'
    export default { 
        name: 'HomeCart',
        components: {
            MenuCart
        },
        data() {
            return {
                pizzaList: [
                ]
            }
        },
                    
        computed: {
            ...mapGetters(['getPizzaList', 'getPizzaBuy']),
            
        },
        methods: {
            ...mapActions(['updatePizzaBuy', 'addPizza']),
            onLoad() {
                this.pizzaList=this.getPizzaList;
            },
            onBuy(pizza){
              this.addPizza(pizza)
            },
        },
        mounted () {
            this.onLoad();
        },
    }
</script>

<style lang="scss" scoped>

</style>