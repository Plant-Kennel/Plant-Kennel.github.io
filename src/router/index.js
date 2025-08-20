import { createRouter, createWebHashHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import CSSColors from "@/views/CSSColors.vue";
import HomeView from "@/views/HomeView.vue";

//define routes as an array of objects:
const routes = [
    { path: "/", name: "Home", component: HomeView },
    { path: "/about", name: "About", component: AboutView },
    { path: "/CSSColors", name: "CSSColors", component: CSSColors }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;