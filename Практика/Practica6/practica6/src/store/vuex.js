import {createStore} from 'vuex';
import { v4 as uuidv4 } from "uuid";

const store = createStore({
    state(){
        return{
            pizzaList: [
                {
                    id: uuidv4(),
                    url: "https://game-shop.com.ua/prodimages/25445/thumbs/119123_300_300.jpg",
                    title: "Kings Bounty II Day One Edition Xbox Series X/XboxOne Русская версия",
                    price: 2058
                },
                {
                    id: uuidv4(),
                    url: "https://game-shop.com.ua/prodimages/26012/thumbs/122095_300_300.jpg",
                    title: "Elden Ring Xbox Series/Xbox One Русская версия",
                    price: 1895
                },
                                    {
                    id: uuidv4(),
                    url: "https://game-shop.com.ua/prodimages/25445/thumbs/119123_300_300.jpg",
                    title: "Kings Bounty II Day One Edition Xbox Series X/XboxOne Русская версия",
                    price: 2058
                },
                                    {
                    id: uuidv4(),
                    url: "https://game-shop.com.ua/prodimages/25445/thumbs/119123_300_300.jpg",
                    title: "Kings Bounty II Day One Edition Xbox Series X/XboxOne Русская версия",
                    price: 2058
                },
                                    {
                    id: uuidv4(),
                    url: "https://game-shop.com.ua/prodimages/25445/thumbs/119123_300_300.jpg",
                    title: "Kings Bounty II Day One Edition Xbox Series X/XboxOne Русская версия",
                    price: 2058
                },
                                    {
                    id: uuidv4(),
                    url: "https://game-shop.com.ua/prodimages/25445/thumbs/119123_300_300.jpg",
                    title: "Kings Bounty II Day One Edition Xbox Series X/XboxOne Русская версия",
                    price: 2058
                },
            ],
            pizzaBuy:[]
        }
    },
    getters: {
        getPizzaList: state => {
            return state.pizzaList;
        },
        getPizzaBuy: state => {
            return state.pizzaBuy;
        }
    },
    mutations: {
        setPizzaList(state, payload) {
            state.pizzaList = payload;
        },
        setPizzaBuy(state, payload) {
            state.pizzaBuy = payload;
        },
        addPizza(state, pizza){
            state.pizzaBuy.push(pizza)
        }
    },
    actions: {
        updatePizzaList({commit}, payload) {
            commit('setPizzaList', payload);
        },
        updatePizzaBuy({commit}, payload) {
            commit('setPizzaBuy', payload);
        },
        addPizza({commit}, pizza){
            commit('addPizza',pizza)
        }
    }
});
export default store