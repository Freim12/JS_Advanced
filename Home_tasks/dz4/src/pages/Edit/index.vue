<template>
  <div>EDIT</div>
  <div class="a">
    <div>
      <label>
        Name
        <input type="text" v-model="name" />
      </label>
    </div>
    <div>
      <label>
        Number
        <input type="number" v-model.number="number" />
      </label>
    </div>
    <div>
      <label>
        Country
        <input type="text" v-model="country" />
      </label>
    </div>
  </div>
  <div>
    <button @click="onSave">{{ btnTitle }}</button>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "Edit",

  data() {
    return {
      name: null,
      number: null,
      country:null,

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
          Name: this.name,
          Number: this.number,
          Country:this.country
          
        });
      else store.addProduct(this.name, this.number,this.country);

      this.$router.push({ name: "home" });
    },
  },

  mounted() {
    if (this.currentProductId) {
      const product = store.getProductById(this.currentProductId);
      this.name = product.name;
      this.number = product.number;
      this.country = product.country;
    }
  },
};
</script>

<style lang="css" scoped>
a{
  margin: 2%;
}
</style>