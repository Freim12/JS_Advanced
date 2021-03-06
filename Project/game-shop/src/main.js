import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuex from './store/vuex'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(vuex)
  .mount('#app')
