import { createRouter, createWebHistory } from "vue-router";
import Main from '@/pages/Main.vue';
import Join from '@/pages/member/join.vue';
import Detail from '@/pages/restaurant/detail.vue';
import Search from '@/pages/restaurant/search.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Main",
            component: Main
        },
        {
            path: "/restaurant/detail",
            name: "Detail",
            component: Detail    
        },
        {
            path: "/member/join",
            name: "Join",
            component: Join    
        },
        {
            path: "/restaurant/search",
            name: "Search",
            component: Search    
        },
        
    ]
});

export default router;