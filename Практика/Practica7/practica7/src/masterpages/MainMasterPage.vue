<template>
    <div class="main">
        <div>
            <slot name="header" >
                <h1>Заголовок</h1>
                <button @click="$emit('about')">About</button>
            </slot>
        </div>
        <div>
            <h1>Мій тестовий сайт</h1>
            <slot>
                <div>
                    <h2>Список задач</h2>
                    <ol>
                        <li>випити каву</li>
                        <li>включити комп.</li>
                        <li>виключити комп.</li>
                    </ol>
                </div>
                <div>
                    <h3>Головна мета життя - жити і радіти життю</h3>
                </div>
            </slot>
        </div>
        <div>
            <slot name="footer">
                <h2>Мої контакти:</h2>
                <p>планета Земля</p>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainMasterPage'
    }
</script>

<style lang="css" scoped>
.main{
    text-align: left;
}
</style>