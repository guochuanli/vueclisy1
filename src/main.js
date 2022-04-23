import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './router/routerRight'
import store from './store'

const app=createApp(App)
function zhuce(r){
    r.keys().forEach(element => {
      app.component(r(element).default.name,r(element).default)
    });
    }
zhuce(require.context('@/components/Global_components/',false,/.vue$/))
app.use(store).use(router).mount('#app')

