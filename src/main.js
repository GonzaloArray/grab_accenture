import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'material-icons/iconfont/material-icons.css'
import './style.css'
import App from './App.vue'

import router from './router'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
