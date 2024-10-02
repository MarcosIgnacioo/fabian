import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { ROUTES } from './globals';
const router = createRouter({
    history: createWebHashHistory(),
    routes: ROUTES,
});
createApp(App).use(router).mount('#app');
