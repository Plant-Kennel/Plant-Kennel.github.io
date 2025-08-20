import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from "./router/index.js";

const pinia = createPinia(); // create pinia instance
const app = createApp(App);

app.use(pinia); // use pinia as a vue plugin
app.use(router);
app.mount('#app');
