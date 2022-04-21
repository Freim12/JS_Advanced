<template>
  <div>
    <h1>Повний список</h1>
    <div class="list-container">
      <product-card
        v-for="product in productListData"
        :key="product.id"
        :comp-data="product"
        @del="
          $emit('remove', {
            id: product.id,
            date: new Date(),
          })
        "
        @add-to-cart="$emit('add-to-cart', product.id)"
      />
    </div>
    <div>
      <div>
        <label>
          Назва товару
          <!-- <input type="text" v-model="searchProductTitle" /> -->
          <select v-model="searchProductTitle">
            <option
              v-for="product in productListData"
              :key="product.id"
              :value="product.title"
            >
              {{ product.title }}
            </option>
          </select>
        </label>
      </div>
      <h1>Відфільтровані товари</h1>
      <div class="list-container">
        <product-card
          v-for="product in filteredProductListData"
          :key="product.id"
          :comp-data="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
export default {
  name: 'ProductList',

  components: {
    ProductCard,
  },

  props: {
    productListData: {
      type: Array,
      default: () => [], //Якщо об"єкт - то функція, що повертає значення
    },
  },

  data() {
    return {
      searchProductTitle: null,
    }
  },

  computed: {
    filteredProductListData() {
      if (this.searchProductTitle) {
        const titleInLowerCase = this.searchProductTitle.toLowerCase()
        return this.productListData.filter((product) =>
          product.title.toLowerCase().includes(titleInLowerCase)
        )
      }
      return this.productListData
    },
  },
}
</script>

<style lang="css" scoped>
.list-container {
  display: flex;
}
</style>
