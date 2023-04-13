import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { createNaverMap } from "vue3-naver-maps";

import  VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App)
  .use(router)
  .use(createNaverMap, {
    clientId: "w7yy7bbaa1", // Required
    category: "ncp", // Optional
    subModules: [], // Optional, "panorama" | "geocoder" | "drawing" | "visualization"
  })
  .use(VueSweetalert2)
  .mount("#app");
