import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './pages/router/index.js'
// import 'amfe-flexible';

const app = createApp(App)

app.use(router);


app.use(ElementPlus)
app.mount('#app')
