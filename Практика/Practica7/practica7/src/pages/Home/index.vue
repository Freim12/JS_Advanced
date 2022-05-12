<template>
    <div>
        <main-master-page @about="goAbout()"></main-master-page>
    </div>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Home',
        components: { 
            MainMasterPage 
        },
        methods: {
            goAbout() {
               this.$router.push({ name: "about" }); 
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>