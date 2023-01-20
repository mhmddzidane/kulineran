import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/main.css";
import Toaster from "@meforma/vue-toaster";
import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
  },
  mutations: {
    INCREMENT_COUNT(state, payload) {
      state.count = payload;
    },
    DECREMENT_COUNT(state, payload) {
      state.count -= payload;
    },
  },
});

const app = createApp(App).use(Toaster).use(store);

app.use(router);

app.mount("#app");
