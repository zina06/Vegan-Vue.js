import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import { createNaverMap } from "vue3-naver-maps";

createApp(App)
  .use(router)
  .use(createNaverMap, {
    clientId: "w7yy7bbaa1", // Required
    category: "ncp", // Optional
    subModules: [], // Optional, "panorama" | "geocoder" | "drawing" | "visualization"
  })
  .mount("#app");
