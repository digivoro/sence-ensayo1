import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Firebase from "firebase";
import firebaseConfig from "../config/firebaseConfig";
import "material-design-icons-iconfont/dist/material-design-icons.css";

// Initialize firebase app
Firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
