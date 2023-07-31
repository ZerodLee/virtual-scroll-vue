import Vue from "vue";
import VirtualScrollVue from "./VirtualScroll.vue";

export default VirtualScrollVue;

export const VirtualScroll = {
  install() {
    Vue.component("VirtualScroll", VirtualScroll);
  },
};
