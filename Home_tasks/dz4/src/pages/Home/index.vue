<template>
  <div>HOME</div>
  <div class="a">
    <product-list />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
export default {
  name: "Home",

  components: {
    ProductList,
  },

  methods: {},
};
</script>

<style lang="css" scoped>
a{
  margin:2%;
}

</style>