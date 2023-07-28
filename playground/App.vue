<template>
  <div>
    <ItemsWrapper />
    <virtual-scroll-vue
      style="height: 200px"
      :parent="{
        tag: 'ItemsWrapper',
        props: {
          class: 'qq',
          props: { value: aaa },
          on: {
            input: (v) => {
              aaa = v;
            },
          },
        },
      }"
      :items="arr"
      :itemHeight="22"
    >
      <template v-slot="item">
        <ItemOption :value="item" />
      </template>
    </virtual-scroll-vue>
  </div>
</template>

<script>
import VirtualScrollVue from "../src/VirtualScroll.vue";
import ItemOption from "./ItemOption.vue";

export default {
  name: "myDemo",
  components: { VirtualScrollVue, ItemOption },
  data() {
    return {
      aaa: "",
      arr: Array(10000)
        .fill(null)
        .map((v, i) => i),
    };
  },
};
</script>

<style>
/* 组件样式 */
</style>
