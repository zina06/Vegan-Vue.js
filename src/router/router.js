import { createRouter, createWebHistory } from "vue-router";
import Main from '@/pages/Main.vue';
import Maintest from '@/pages/Maintest.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Main",
            component: Main
        },
        {
            path: "/product",
            name: "Maintest",
            component: Maintest    
        },
        
    ]
});

export default router;