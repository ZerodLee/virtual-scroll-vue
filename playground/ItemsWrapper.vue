<template>
  <div>
    {{value}}
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: "ItemsWrapper.vue",
    },
  },
  provide() {
    console.log(this.change);
    return {
      changeFn: this.change,
    };
  },
  methods: {
    change(v) {
      console.log("change", v);
      this.$emit("input", v);
    },
  },
  // 组件选项
  created() {},
};
</script>

<style>
/* 组件样式 */
</style>
