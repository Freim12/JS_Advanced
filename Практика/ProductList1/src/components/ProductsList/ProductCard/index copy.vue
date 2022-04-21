<template>
  <div class="container">
    <div class="image-container">
      <img :src="imageSource" class="image" />
    </div>
    <div class="title">
      <!-- {{ title }} -->
      <a :href="link">{{ title }}</a>
    </div>
    <div class="price">
      {{ price }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',

  props: {
    imageSource: {
      type: String,
      default: 'https://www.daveraine.com/img/products/no-image.jpg',
    },
    title: {
      type: String,
      default: 'No title',
    },
    link: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      required: true, //Обов"язковий параметр
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
