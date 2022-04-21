<template>
<div>
  <advert-mes />
  <weather-menu />
   <table-prod />

</div>
</template>

<script>
import AdvertMes from './components/AdvertMes'
import WeatherMenu from './components/WeatherMenu'
import TableProd from './components/TableProd';


export default {
  name: 'App',
  components: {
    AdvertMes,
    WeatherMenu,
    TableProd,
  }
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