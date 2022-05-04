<template>
  <div>EDIT</div>
  <div>
    <div>
      <label>
        Image
        <img :src="urlPhoto">
      </label>
      <button @click="addPhoto(url)">Add Photo</button>
    </div>
    <div>
      <label>
        URL
        <input type="text" v-model="url" />
      </label>
    </div>
    <div>
      <label>
        Title
        <input type="text" v-model="title" />
      </label>
    </div>
    <div>
      <label>
        Price
        <input type="number" v-model.number="price" />
      </label>
    </div>
  </div>
  <div>
    <button @click="onSave">{{ btnTitle }}</button>
  </div>
    <div>
    <button @click="onDelete()">Delete</button>
  </div>
</template>

<script>
import store from "@/store";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Edit",

  data() {
    return {
      url: null,
      urlPhoto: null,
      title: null,
      price: null,
    };
  },

  computed: {
    btnTitle() {
      if (this.currentProductId) return "Save";
      else return "Add";
      // return this.currentProductId ? 'Save':'Add'
    },
    currentProductId() {
      return this.$route.params.id;
    },
  },

  methods: {
    onSave() {
      if (this.currentProductId)
        store.updateProduct({
          id: this.currentProductId,
          url: this.url,
          title: this.title,
          price: this.price,
        });
      else store.addProduct(this.title, this.price, this.url);

      this.$router.push({ name: "home" });
    },
      onDelete() {
        if (this.currentProductId)
          store.deleteProduct(this.currentProductId);
        this.$router.push({ name: "home" });
    },
    addPhoto(url){
      this.urlPhoto = url
    }
  },

  mounted() {
    if (this.currentProductId) {
      const product = store.getProductById(this.currentProductId);
      this.url = product.url;
      this.title = product.title;
      this.price = product.price;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>