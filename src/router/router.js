import { createRouter, createWebHistory } from "vue-router";
import Main from '@/pages/Main.vue';
import Join from '@/pages/member/join.vue';
import Detail from '@/pages/restaurant/detail.vue';
import Search from '@/pages/restaurant/search.vue';
import Login from '@/pages/member/login.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/Catchvegan",
            name: "Main",
            component: Main
        },
        {
            path: "/Catchvegan/restaurant/detail",
            name: "Detail",
            component: Detail    
        },
        {
            path: "/Catchvegan/member/join",
            name: "Join",
            component: Join    
        },
        {
            path: "/Catchvegan/member/login",
            name: "Login",
            component: Login
        },
        {
            path: "/Catchvegan/restaurant/search",
            name: "Search",
            component: Search    
        },
        
    ]
});

export default router;