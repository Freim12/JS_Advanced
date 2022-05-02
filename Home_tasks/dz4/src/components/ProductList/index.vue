<template>
  <div>
    <div v-if="isDataEmpty">
      Please load data
      <button @click="onLoad">Load</button>
    </div>
    <div v-else>
      <product-item
        v-for="product in productList"
        :key="product.id"
        :product="product"
        @edit="onEdit(product.id)"
        @delete="onDelete(product.id)"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import store from "@/store";
export default {
  name: "ProductList",

  components: {
    ProductItem,
  },

  data() {
    return {
      productList: [],
    };
  },

  computed: {
    isDataEmpty() {
      return this.productList.length === 0;
    },
  },

  methods: {
    onLoad() {
      this.productList = store.readProducts();
    },
    onEdit(id) {
      this.$router.push({
        name: "editPage",
        params: {
          id,
        },
      });
    },
    onDelete(id) {
      store.deleteProduct(id);
      this.onLoad();
    },
  },

  mounted() {
    this.onLoad();
  },
};
</script>

<style lang="scss" scoped>
</style>