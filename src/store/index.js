import { createStore } from "vuex";
import auth from "./module-admin/user-admin/index";
const store = createStore({
  modules : {
    auth
  }
});
export default store;
