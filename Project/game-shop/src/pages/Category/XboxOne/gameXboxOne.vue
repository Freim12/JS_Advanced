<template>
<div class="gameXboxOne">
    <div>
        <h1>{{title}}</h1>
    </div>
    <div class="product">
        <div>
            <img :src="url">
        </div>
        <div>
            <h1>{{price}}</h1>
        </div>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Edit",

  data() {
    return {
      url: null,
      title: null,
      price: null,
    };
  },

  computed: {
    currentProductId() {
      return this.$route.params.id;
    },
    ...mapGetters(['getGamesList']),
  },

  methods: {

  },

  mounted() {
    if (this.currentProductId) {
      // eslint-disable-next-line no-unused-vars
      let gamesList = this.getGamesList;
      // eslint-disable-next-line no-unused-vars
      const games = gamesList.find((item) => item.id === this.currentProductId);
      this.url = games.url;
      this.title = games.title;
      this.price = games.price;
    }
  },
};
</script>

<style lang="css" scoped>
.product{
    display: flex;
}
</style>