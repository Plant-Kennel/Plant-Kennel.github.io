import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../components/HomeView.vue";
import AboutView from "../components/AboutView.vue";
import CSSColors from "../components/CSSColors.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/CSSColors', component: CSSColors }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;