import Vue from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import TheHeader from "@/components/TheHeader";

Vue.config.productionTip = false;

library.add(faMagnifyingGlass, faCartShopping, faBars);

Vue.component("the-header", TheHeader);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
