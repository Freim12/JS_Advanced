<template>
    <div class="advert">
        <div class="advert-header">
            <img :src="logo" />
            <h2>{{nameCompany}}</h2>
        </div>
        <div class="image">
            <img :src="image">
        </div>
        <div class="title">
            <a :href="url">{{title}}</a>
        </div>
    </div>
</template>

<script>    
    export default {
        name:'AdvertMes',
        props:{
            logo:{
                type: String,
                default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/640px-ZDF_logo%21_Logo_2021.svg.png'
            },
            nameCompany:{
                type: String,
                default: 'Рекламная сеть'
            },
            image:{
                type: String,
                default: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
            },
            title:{
                type: String,
                default: 'Пальмы'
            },
            url:{
                type: String,
                default: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .advert{
        width: 30%;
        background-color: rgb(53, 51, 51);
    }
    img{
        width: 50%;
        height: 50%;
    }
    .advert-header{
        padding: 2% 2%;
        width: 96%;
        display: flex;
        text-align: right;
        background-color: silver;
    }
    .advert-header img{
        padding: 0% 0%;
    }
    .advert-header h2{
        font-size: 2.2vw;
        background-color: silver;
        padding: 0% 0%;
        margin: 0% 0 0 10%;
    }
    .title a{
        width: 100%;
        color: red;
    }
    .title{
        padding: 0 0 2% 5%;
        text-align: left;
    }
    .image img{ 
        padding: 5% 5% 2% 5%;
        width: 90%;
    }

</style>