<template>
  <div>
    <div>
      <games-list />
    </div>
  </div>
</template>

<script>
import GamesList from "@/components/GamesList/index.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",

  components: {
    GamesList
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>