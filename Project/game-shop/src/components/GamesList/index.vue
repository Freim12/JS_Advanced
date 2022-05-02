<template>
    <div>
        <game-item 
        v-for="gameItem in gamesList" 
        :key="gameItem.id"
        :gameItem="gameItem"
        />
    </div>
</template>

<script>
import GameItem from "./GameItem.vue";
// eslint-disable-next-line
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
                    }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>