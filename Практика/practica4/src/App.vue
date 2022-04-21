<template>
  <div>
    <calculation-number
    v-model:current-value="currentValue" 
    />
    <calculation-number 
    :counterValue="currentValue"
    @change="currentValue+=$event"
    />
  </div>
</template>

<script>
import CalculationNumber from './components/Calculation/'

export default {
  name: 'App',
  components: {
    CalculationNumber
  },
  data() {
    return {
      currentValue: 0
    }
  },
  methods: {
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
