<template>
    <div class="game-list">
        <game-item 
        v-for="gameItem in gamesList" 
        :key="gameItem.id"
        :gameItem="gameItem"
        @edit="onEdit(gameItem.id)"
        @buy="onBuy(gameItem.id)"
        />
    </div>
</template>

<script>
import GameItem from "./GameItem.vue";
import {mapGetters} from 'vuex'
    export default {
        name: "GamesList",
        components: {
            GameItem,
        },
        data() {
            return {
                gamesList: [
                    
                ]
            }
        },
        computed: {
            ...mapGetters(['getGamesList'])
        },
       methods: {
            onLoad() {
            this.gamesList = this.getGamesList;
            },
            onEdit(id) {
            this.$router.push({
                name: "editPage",
                params: {
                id,
                },
            });
            },
        },

        mounted() {
            this.onLoad();
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