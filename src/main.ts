import "./lib/basic-jelly.scss";
import "./index.scss";
import App from './App.vue'
import { createApp } from 'vue'
import { router } from './router';
import 'github-markdown-css'


const app = createApp(App)
app.use(router)
app.mount('#app')
