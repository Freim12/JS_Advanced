<template>
  <div class="product-container">

    <div>
    {{ product.name }}
     {{ product.number }}
     {{ product.country }}
     </div>
    <div><button @click="$emit('edit')">Edit</button></div>
    <div><button @click="$emit('delete')">Delete</button></div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",

  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="css" scoped>
.product-container {
  display: flex;

}
.b{
   padding:1%; 
}
</style>