import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import VueShowdown from "vue-showdown";

Vue.config.productionTip = false;

Vue.use(VueShowdown, { flavor: "github", options: { emoji: false } });

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount("#app");
