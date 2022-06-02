<template>
    <div>
        <div>
            <slot name="header">
                <ul class="menu">
                    <router-link class="router-link" to="/about">О нас</router-link>
                    <router-link class="router-link" to="/contacts">Контакты</router-link>
                    <router-link class="router-link" to="/oplata-i-dostavka">Оплата и доставка</router-link>
                    <router-link class="router-link" to="/garantii">Гарантии</router-link>
                    <router-link class="router-link" to="/rostrochka">Рассрочка</router-link>
                    <router-link class="router-link" to="/care">Служба заботы о клиентах</router-link>
                </ul>
                <div class="row">
                    <div class="col-lg-2">
                        <div class="logo">
                            <router-link to="/">
                                <img class="logo_icon" src="https://game-shop.com.ua/images/logo/header-logo-trident.svg">
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <input type="text" v-model="search" placeholder="Search" /> <br />
                    </div>
                    <div class="col-lg-8">
                        <h5>Сall-Сenter:</h5>   
                        <p>Пн-Вс: 10:00-19:00</p>
                    </div>
                </div>
            </slot>
        </div>
        <div>
            <slot>
                Hello
            </slot>
        </div>
        <div>
            <slot name="footer">
                <h1>Footer</h1>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainMasterPage'
    }
</script>

<style lang="scss" scoped>
.menu{
    text-align: left;
    
    .router-link{
        padding-left: 1%;
        color: #1c1f26;
        list-style: none;    
        font-size: 14px;
        height: 40px;
    }
}
.col-lg-2 {
    width: 16.66666667%;
    .logo_icon {
        height: 72px;
        img {
            border: none;
        }
    }
}
.col-lg-8{
    text-align: center;
}
.row{
    display: flex;
}
</style>