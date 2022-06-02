<template>
    <div>
        <main-master-page>
            <router-link class="router-link" to="/">Home</router-link>
            <games-list />
        </main-master-page>
    </div>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue';
import GamesList from "@/components/GamesList/index.vue";
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "XboxOne",
        components: {
            GamesList,
            MainMasterPage
        },
    };
</script>

<style lang="scss" scoped>

</style>