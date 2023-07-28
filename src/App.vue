<template>
  <div>
    <!-- 组件内容 -->
  </div>
</template>

<script>
export default {
  name: "myDemo",
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
