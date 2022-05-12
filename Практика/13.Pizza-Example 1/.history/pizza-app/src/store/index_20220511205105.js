import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  //Розділ, де описумєо глобальні змінні додатку
  state() {
    return {
      count: 0,
      pizzaList: [
        {
          id: "1",
          imgSrc:
            "http://pizzawood.com.ua/image/cache/catalog/5_element-200x200.jpg",
          title: "Pizza 1",
          price: "11",
        },
        {
          id: "2",
          imgSrc:
            "http://pizzawood.com.ua/image/cache/catalog/al_capone-200x200.jpg",
          title: "Pizza 2",
          price: "22",
        },
        {
          id: "3",
          imgSrc:
            "http://pizzawood.com.ua/image/cache/catalog/aquaman-200x200.jpg",
          title: "Pizza 3",
          price: "33",
        },
        {
          id: "4",
          imgSrc:
            "http://pizzawood.com.ua/image/cache/catalog/trip_to_italy-200x200.jpg",
          title: "Pizza 4",
          price: "44",
        },
      ],
      cartList: [
        {
          id: "aas2dfsd",
          pizzaId: "2",
          count: 3,
        },
        {
          id: "azxcvdfh",
          pizzaId: "4",
          count: 2,
        },
      ],
    };
  },
  //Функції, які здійснюють зчитування значень з стейта і які ми можемо використати у компонентах
  getters: {
    pizzaList: (state) => state.pizzaList,
    getPizzaById: (state) => (pizzaId) =>
      state.pizzaList.find((item) => item.id === pizzaId),
    cartList: (state) => state.cartList,
    getTotalPrice: (state) =>
      state.cartList.reduce((prevSum, cartItem) => {
        const pizza = state.pizzaList.find(
          (item) => item.id === cartItem.pizzaId
        );
        return prevSum + pizza.price * cartItem.count;
      }, 0),
  },
  //Розділ, де описуємо функції, які мають право робити зміни у стейті
  mutations: {
    incrementCartItemCount(state, cartItemId) {
      const item = state.cartList.find((item) => item.id === cartItemId);
      item.count += 1;
    },
    decrementCartItemCount(state, cartItemId) {
      const item = state.cartList.find((item) => item.id === cartItemId);
      if (item.count > 1) item.count -= 1;
    },
    deleteCartItemCount(state, cartItemId) {
      state.cartList = state.cartList.filter((item) => item.id !== cartItemId);
    },
    addPizza(state, pizzaId) {
      const pizza = state.cartList.find((item) => item.pizzaId === pizzaId);
      if (pizza) pizza.count++;
      else
        state.cartList.push({
          id: new Date().getTime(),
          pizzaId,
          count: 1,
        });
    },
  },
  //Розділ, де описуємо функції, які викликаємо у копонентах, якщо хочемо змінити стейт
  actions: {
    cartAction({ commit }, payload) {
      switch (payload.type) {
        case "increment":
          commit("incrementCartItemCount", payload.value);
          break;
        case "decrement":
          commit("decrementCartItemCount", payload.value);
          break;
        case "delete":
          commit("deleteCartItemCount", payload.value);
          break;
      }
    },
    // updateValue({ commit }, payload) {
    //   commit("increment", payload);
    // },
    // updateMessage({ commit }, newMsg) {
    //   commit("setMessage", newMsg);
    // },
    // updateMyText({ commit, dispatch }, newText) {
    //   commit("setMyText", newText);
    //   dispatch("updateValue", 5);
    // },
  },
});
export default store;
