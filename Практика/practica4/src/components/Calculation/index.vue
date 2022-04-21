<template>
    <div>
        <div>
            {{currentValue}}
        </div>
        <div>
            <button @click="onChange(-1)">-1</button>
            <button @click="onChange(+1)">+1</button>
        </div>
        <div>
            {{numberType}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CalculationNumber',
        props: {
            currentValue: {
                type: Number,
                default: 0
            },
        },
        computed: {
            numberType() {
                if(this.currentValue>0) return 'Positive'
                if(this.currentValue<0) return 'Negative'
                else return 'Zero'
            },
        },
        methods: {
            onChange(increment) {
                this.$emit("update:currentValue", this.currentValue+increment)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>