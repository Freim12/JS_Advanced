<template>
  <div>
    <h1>{{ messageText }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MyComp',

  props: {
    messageText: {
      type: String,
      default: 'No text',
    },
  },
}
</script>

<style lang="scss" scoped></style>
