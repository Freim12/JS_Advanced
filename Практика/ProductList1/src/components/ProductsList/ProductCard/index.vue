<template>
  <div class="container">
    <div class="image-container">
      <img :src="compData.img" class="image" />
    </div>
    <div class="title">
      <!-- {{ title }} -->
      <a :href="compData.link">{{ compData.title }}</a>
    </div>
    <div class="price">
      {{ compData.price }}
    </div>
    <div>
      <button @click="$emit('del')">Delete</button>
      <button @click="$emit('add-to-cart')">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',

  props: {
    compData: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="css" scoped>
.container {
  border: 2px solid red;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
}
.image-container {
  height: 120px;
}
.image {
  width: 80px;
}
.title {
  font-size: 18px;
}
.price {
  font-weight: bold;
}
</style>
