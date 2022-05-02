<template>
    <div class="game-item">
        <div><img :src="gameItem.url"></div>
        <div><span>{{gameItem.title}}</span></div>
        <div><span>{{gameItem.price}} грн</span></div>
        <div><button @click="$emit('buy')">Купити</button></div>
    </div>
</template>

<script>
    export default {
        name: "GameItem",
        props: {
            gameItem: {
                type: Object,
                default: () => {}
            },
        },
    }
</script>

<style lang="css" scoped>
.game-item{
}
</style>