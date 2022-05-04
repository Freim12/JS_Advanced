import {createStore} from 'vuex';
import { v4 as uuidv4 } from "uuid";

const store = createStore({
    state(){
        return{
            gamesList: [
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
            ]
        }
    },
    getters: {
        getGamesList: state => {
            return state.gamesList;
        }
    },
    mutations: {
        setGamesList(state, payload) {
            state.gamesList = payload;
        }
    },
    actions: {
        updateGamesList({commit}, payload) {
            commit('setGamesList', payload);
        }
    }
});
export default store