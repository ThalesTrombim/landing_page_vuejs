import Vue from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faBluetoothB } from "@fortawesome/free-brands-svg-icons";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { faBatteryEmpty } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import DropDown from "@/components/DropDown";

Vue.config.productionTip = false;

library.add(
  faMagnifyingGlass,
  faCartShopping,
  faBars,
  faStar,
  regularStar,
  faBluetoothB,
  faWaveSquare,
  faBatteryEmpty,
  faTrashCan
);

Vue.component("the-header", TheHeader);
Vue.component("the-footer", TheFooter);
Vue.component("drop-down", DropDown);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
