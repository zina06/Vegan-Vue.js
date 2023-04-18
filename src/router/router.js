import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";
import Error from "@/pages/error/error.vue";
import Signup from "@/pages/member/signup.vue";
import Detail from "@/pages/restaurant/detail.vue";
import Search from "@/pages/restaurant/search.vue";
import Login from "@/pages/member/login.vue";
import Mydining from "@/pages/member/my-dining.vue";
import Mypage from "@/pages/member/mypage.vue";
import Reviewinsert from "@/pages/member/review-insert.vue";
import Owner from "@/pages/owner/manage.vue";
import Reserve from "@/pages/reservation/reserve.vue";
import Confirm from "@/pages/reservation/confirm.vue";
import FindMyId from "@/pages/member/findMyId.vue";
import FindMyPassword from "@/pages/member/findMyPassword.vue";
import Aftersignup from "@/pages/member/aftersignup.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/Catchvegan/member/aftersignup",
      name: "Aftersignup",
      component: Aftersignup,
    },
    {
      path: "/Catchvegan",
      name: "Main",
      component: Main,
    },
    {
      path: "/Catchvegan/error",
      name: "Error",
      component: Error,
    },
    {
      path: "/Catchvegan/restaurant/detail/:restaurantIdx",
      name: "Detail",
      component: Detail,
    },
    {
      path: "/Catchvegan/reserve/:restaurantIdx",
      name: "Reserve",
      component: Reserve,
    },
    {
      path: "/Catchvegan/member/findMyId",
      name: "FindMyId",
      component: FindMyId,
    },
    {
      path: "/Catchvegan/member/findMyPassword",
      name: "FindMyPassword",
      component: FindMyPassword,
    },
    {
      path: "/Catchvegan/member/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/Catchvegan/restaurant/search",
      name: "Search",
      component: Search,
    },
    {
      path: "/Catchvegan/member/my-dining",
      name: "Mydining",
      component: Mydining,
    },
    {
      path: "/Catchvegan/member/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/Catchvegan/member/mypage",
      name: "Mypage",
      component: Mypage,
    },
    {
      path: "/Catchvegan/review",
      name: "Reviewinsert",
      component: Reviewinsert,
    },
    {
      path: "/Catchvegan/manage/:managerIdx",
      name: "Owner",
      component: Owner,
    },
    {
      path: "/Catchvegan/reserve",
      name: "Reservee",
      component: Reserve,
    },
    {
      path: "/Catchvegan/reserve/confirm",
      name: "Confirm",
      component: Confirm,
    },
  ],
});

export default router;
