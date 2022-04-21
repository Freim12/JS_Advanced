<template>
    <div>
        <div>
            <product-price-editor 
            v-model:product-price="productPrice"
            />
        </div>
        <br>
        <div class="sum">
            <span>Total {{Sum}}</span>
        </div>
    </div>
</template>

<script>
import ProductPriceEditor from '../../components/PriceSummator/ProductPriceEditor/'

    export default {
        name: 'PriceSummator',
        components: {
            ProductPriceEditor,
        },
        props: {
            priceSum: {
                type: Number,
                default: 0
            },
        },
        data() {
            return {
                productPrice: [{
                    title:'Prod1',
                    price: 0,
                    count: 0,
                    tax: 0
                },
                {
                    title:'Prod2',
                    price: 0,
                    count: 0,
                    tax: 0
                }]
            }
        },
        computed: {
            Sum() {
                var sum = 0
                for(var i=0;i<this.productPrice.length;i++){
                    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                    this.productPrice[i].tax = (this.productPrice[i].price*this.productPrice[i].count)*0.1
                    sum += this.productPrice[i].price*this.productPrice[i].count-this.productPrice[i].tax
                }
                if(this.priceSum != sum){
                        this.$emit("update:priceSum", sum)
                }
                return this.priceSum
            }
        },  
        methods: {
        },
    }
</script>

<style lang="css" scoped>
.sum{
    text-align: left;
    margin-left: 13%;
}
</style>