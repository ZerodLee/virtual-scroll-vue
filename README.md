# virtual-scroll-vue

vue 的虚拟滚动组件

## usage

1. global component

```javascript
import Vue from "vue";
import { VirtualScroll } from "virtual-scroll-vue-slot";

Vue.use(VirtualScroll);
```

2. local component

```vue
<template>
  <div>
    <virtual-scroll-vue
      style="height: 200px"
      :parent="{
        tag: 'ItemsWrapper',
        props: {
          class: 'test-class',
          props: { value: vmTest },
          on: {
            input: (v) => {
              vmTest = v;
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
import VirtualScrollVue from "virtual-scroll-vue-slot";
import ItemOption from "./ItemOption.vue";

export default {
  name: "myDemo",
  components: { VirtualScrollVue, ItemOption },
  data() {
    return {
      vmTest: "",
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
```

### props

> waiting for update...
