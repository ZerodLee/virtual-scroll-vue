<template>
  <div>
    345
    <virtual-scroll-vue></virtual-scroll-vue>
  </div>
</template>

<script>
import VirtualScrollVue from "../src/VirtualScroll.vue";

export default {
  name: "myDemo",
  components: { VirtualScrollVue },
  // 组件选项
  created() {
    [1, 2, 3, [3]].flat().forEach((v) => {
      console.log(v);
    });
  },
};
</script>

<style>
/* 组件样式 */
</style>
