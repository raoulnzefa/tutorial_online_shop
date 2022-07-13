import { createApp } from 'vue'
//import { createStore } from 'vuex'
import App from './App.vue'
import store from './vuex/store.js'
import router from './router/router.js'
//import './assets/styles.scss'
const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')