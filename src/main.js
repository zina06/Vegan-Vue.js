import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import VCalendar from "v-calendar";
import "v-calendar/style.css";
import { createNaverMap } from "vue3-naver-maps";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia } from "pinia";



library.add(faQuestionCircle);

createApp(App)
  .use(router)
  .use(VCalendar, {})
  .use(createPinia())
  .use(createNaverMap, {
    clientId: "w7yy7bbaa1", // Required
    category: "ncp", // Optional
    subModules: [], // Optional, "panorama" | "geocoder" | "drawing" | "visualization"
  })
  .use(VueSweetalert2)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
