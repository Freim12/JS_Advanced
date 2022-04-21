<template>
  <div>
    <div>Корзина ({{ totalPrice }})</div>
    <div>
      <ul>
        <li v-for="product in cartItems" :key="product.id">
          {{ product.title }} - {{ product.price }} -
          <button @click="onRemove(product.id)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',

  props: {
    cartItems: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (prevSum, product) => prevSum + product.price,
        0
      )
    },
  },

  methods: {
    onRemove(id) {
      this.$emit('cart-remove', id)
    },
  },
}
</script>

<style lang="scss" scoped></style>
