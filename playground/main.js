import App from "./App";
import Vue from "vue";
import ItemsWrapperVue from "./ItemsWrapper.vue";
Vue.component("ItemsWrapper", ItemsWrapperVue);
new Vue({
  el: "#app",
  render(h) {
    return h(App);
  },
});
