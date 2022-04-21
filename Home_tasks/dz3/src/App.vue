<template>
  <div>
    <price-summator 
    v-model:price-sum="priceSum"
    />
  </div>
</template>

<script>
import PriceSummator from './components/PriceSummator/index.vue'

export default {
  name: 'App',
  components: {
    PriceSummator
  },
  data() {
    return {
      priceSum: 0
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
