<template>
    <div class="game-list">
        <game-item 
        v-for="gameItem in gamesList" 
        :key="gameItem.id"
        :gameItem="gameItem"
        />
    </div>
</template>

<script>
import GameItem from "./GameItem.vue";
import { v4 as uuidv4 } from "uuid";
    export default {
        name: "GamesList",
        components: {
            GameItem,
        },
        data() {
            return {
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
    }
</script>

<style lang="css" scoped>
.game-list{
    float: left;
    clear: both;
    border-top: none;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-left: 1%;
}
</style>