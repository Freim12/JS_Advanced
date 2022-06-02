<template>
    <div>
        <main-master-page>
                        <router-link class="router-link" to="/category/xboxOne">Xbox</router-link>
            <template>
                <div>
                    <v-row justify="space-around">
                    <v-icon @click="model--">
                        mdi-minus
                    </v-icon>
                    {{ model }}
                    <v-icon @click="model++">
                        mdi-plus
                    </v-icon>
                    </v-row>
                    <v-carousel v-model="model">
                    <v-carousel-item
                        v-for="(color, i) in colors"
                        :key="color"
                    >
                        <v-sheet
                        :color="color"
                        height="100%"
                        tile
                        >
                        <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                        >
                            <div class="text-h2">
                            Slide {{ i + 1 }}
                            </div>
                        </v-row>
                        </v-sheet>
                    </v-carousel-item>
                    </v-carousel>
                </div>
                </template>
        </main-master-page>
    </div>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue';
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: "Home",
        components: {
            MainMasterPage
        },
        data () {
            return {
                colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
                ],
                model: 0,
            }
        },
    };
</script>

<style lang="scss" scoped>

</style>