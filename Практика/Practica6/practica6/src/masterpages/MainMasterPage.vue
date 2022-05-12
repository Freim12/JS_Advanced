<template>
    <div>
        <div>
            <h1>Моя піцерія</h1>
            <slot name="header">
                <h2>Home</h2>
            </slot>
        </div>
        <div>
            <slot>
                Hello
            </slot>
        </div>
        <div>
            <slot name="footer">
                <h2>Контакти</h2>
                <ul>
                    <li>Тел.: 0663796652</li>
                    <li>Адреса: м. Ужгород, вул...</li>
                </ul>
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

</style>