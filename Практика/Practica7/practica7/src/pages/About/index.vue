<template>
    <div>
        <main-master-page>
            <template v-slot:header>
                <h1>Це мій проект</h1>
                <button @click="goHome()">Home</button>
            </template>
            <div>
                    <h2>Автори:</h2>
                    <ul>
                        <li>я</li>
                        <li>мій кум</li>
                        <li>мій сусід</li>
                    </ul>
                </div>
                <div>
                    <h3>Головна мета життя:</h3>
                    <p>спільно дослідити сенс життя</p>
                </div>
        </main-master-page>
    </div>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'About',
        components: { MainMasterPage },
        methods: {
            goHome() {
                this.$router.push({ name: "home" }); 
            }
        },
    }
</script>

<style lang="css" scoped>
li{list-style-type:"– ";}
</style>