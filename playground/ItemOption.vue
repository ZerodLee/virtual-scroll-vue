<template>
  <div @click="clickFn(change)">这是 - {{ value }}</div>
</template>

<script>
function clickFn(fn) {
  typeof fn == "function" ? fn() : alert(1);
}
export default {
  props: {
    value: {
      default: "ItemsWrapper.vue",
    },
  },
  data() {
    return { clickFn };
  },
  inject: ['changeFn'],
  //   provide() {
  //     return {
  //       change: this.change,
  //     };
  //   },
  methods: {
    change(v) {
      //   this.$emit("input", v);
    },
  },
  // 组件选项
  created() {
    console.log(this);
    this.changeFn(3)
  },
};
</script>

<style>
/* 组件样式 */
</style>
