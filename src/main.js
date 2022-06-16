import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/styles/main.scss'
import router from '../src/router/router'

const app = createApp(App);
app.use(router);
app.mount('#app');