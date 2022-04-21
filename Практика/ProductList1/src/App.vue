<template>
  <div>
    <cart :cart-items="cart" @cart-remove="onCartRemove" />
    <!-- 3. Використовуємо -->
    <products-list
      :product-list-data="listData"
      @remove="onRemove"
      @add-to-cart="onAddToCart"
    />
  </div>
</template>

<script>
//1.Імпортуємо компонент
import ProductsList from './components/ProductsList'
import Cart from './components/Cart'
export default {
  name: 'App',
  components: {
    //2.Реєструємо
    ProductsList,
    Cart,
  },

  data() {
    return {
      listData: [
        {
          id: 1,
          img: 'https://content2.rozetka.com.ua/goods/images/big_tile/185608067.jpg',
          title: 'Хлібопічка 1',
          link: 'https://www.ukr.net/',
          price: 1000,
        },
        {
          id: 2,
          img: 'https://content.rozetka.com.ua/goods/images/big_tile/185622291.jpg',
          title: 'Хлібопічка 2',
          link: 'https://www.ukr.net/',
          price: 2000,
        },
        {
          id: 3,
          img: 'https://content2.rozetka.com.ua/goods/images/big_tile/12600231.jpg',
          title: 'Хлібопічка 3',
          link: 'https://www.ukr.net/',
          price: 6000,
        },
        {
          id: 5,
          img: 'https://content1.rozetka.com.ua/goods/images/big_tile/63982322.jpg',
          title: 'Хлібопічка 4',
          link: 'https://www.ukr.net/',
          price: 3000,
        },
        {
          id: 6,
          img: 'https://content2.rozetka.com.ua/goods/images/big_tile/21296941.jpg',
          title: 'Хлібопічка 5',
          link: 'https://www.ukr.net/',
          price: 67000,
        },
      ],
      cart: [],
    }
  },

  methods: {
    onRemove(obj) {
      console.log(obj.date)
      this.listData = this.listData.filter((product) => product.id !== obj.id)
    },
    onCartRemove(id) {
      this.cart = this.cart.filter((product) => product.id !== id)
    },
    onAddToCart(id) {
      const product = this.listData.find((item) => item.id === id)
      this.cart.push(product)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
