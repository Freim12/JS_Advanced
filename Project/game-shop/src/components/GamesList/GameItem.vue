<template>
    <div class="game-item-block">
        <div class="game-item-holder">
            <div class="img"><a href=""><img :src="gameItem.url"></a></div>
            <div class="prod-info">
                <div class="name"><span><a href="">{{gameItem.title}}</a></span></div>
                <div class="price"><span>{{gameItem.price}} грн</span></div>
                <div><button @click="$emit('buy')">Купити</button></div>
            </div>
        </div>
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
.game-item-block .game-item-holder{
    transition: 0.3s;
    position: relative;
    padding: 15px;
}
.game-item-block{
    width: 25%;
    overflow: hidden;
}
.img{
    display: block;
    margin: 0;
    text-align: center;
    overflow: hidden;
    border-bottom: 1px solid #f2f2f2;
}
.img img{
    border: none;
    margin: 0;
    padding: 0;
    width: 100%;
}
.prod-info .name span a {
    color: #000;
    font-size: 13px;
    font-weight: normal;
    text-align: left;
    display: block;
    line-height: 15px;
    padding: 0;
}
</style>