import { createRouter, createWebHistory } from "vue-router";
import Main from '@/pages/Main.vue';
import Signup from '@/pages/member/signup.vue';
import Detail from '@/pages/restaurant/detail.vue';
import Search from '@/pages/restaurant/search.vue';
import Login from '@/pages/member/login.vue';
import Mydining from '@/pages/member/my-dining.vue';
import Mypage from '@/pages/member/mypage.vue';
import Reviewinsert from '@/pages/member/review-insert.vue';
import Owner from '@/pages/owner/manage.vue';
import Reserve from '@/pages/reservation/reserve.vue';
import Confirm from '@/pages/reservation/confirm.vue';

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
            path: "/member/signup",
            name: "Signup",
            component: Signup    
        },
        {
            path: "/restaurant/search",
            name: "Search",
            component: Search    
        },
        {
            path: "/member/my-dining",
            name: "Mydining",
            component: Mydining    
        },
        {
            path: "/member/login",
            name: "Login",
            component: Login    
        },
        {
            path: "/member/mypage",
            name: "Mypage",
            component: Mypage    
        },
        {
            path: "/member/reviewinsert",
            name: "Reviewinsert",
            component: Reviewinsert    
        },
        {
            path: "/manage",
            name: "Owner",
            component: Owner    
        },
        {
            path: "/reserve",
            name: "Reserve",
            component: Reserve    
        },
        {
            path: "/reserve/confirm",
            name: "Confirm",
            component: Confirm    
        },

        
    ]
});

export default router;