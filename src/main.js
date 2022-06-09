import { createApp } from "vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import App from "./App.vue";
import router from "./router";
import store from "./store";
import { i18n } from "./language/i18n";
import { useI18n } from "vue-i18n";
import axios from 'axios'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
axios.defaults.baseURL = `http://127.0.0.1:8000/api/`
const app = createApp(App, {
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
app.use(i18n);
app.use(store);
app.use(router);
app.use(Toast);
app.mount("#app");
