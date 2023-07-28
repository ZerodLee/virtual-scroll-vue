<!--<template>
  <div>
    <template v-for="n of 3">
      <slot></slot>
    </template>
  </div>
</template>
-->
<script>
export default {
  name: "VirtualScroll",
  props: {
    parent: {
      type: Object | String,
      default() {
        return {
          tag: "div",
          props: {},
        };
      },
    },
    items: {
      type: Array,
      default() {
        return [];
      },
    },
    itemHeight: {
      type: Number,
      default: 40,
    },
    expand: {
      validator(val) {
        return val > 0;
      },
      type: Number,
      default: 3,
    },
  },
  data() {
    return {
      visibleStartIndex: 0, // 可见区域的起始索引
      visibleEndIndex: 10, // 可见区域的结束索引
      // itemHeight: 40, // 单个区域项的高度
      containerHeight: 200, // 容器高度
    };
  },
  computed: {
    visibleRegions() {
      return this.items.slice(this.visibleStartIndex, this.visibleEndIndex + 1);
    },
    totalHeight() {
      return this.items.length * this.itemHeight;
    },
  },
  methods: {
    handleScroll() {
      const container = this.$refs.containerRef.$el;
      const scrollTop = container.scrollTop;
      const start = Math.floor(scrollTop / this.itemHeight) - this.expand;
      this.visibleStartIndex = start > 0 ? start : 1;
      this.visibleEndIndex =
        Math.min(this.visibleStartIndex + Math.ceil(this.containerHeight / this.itemHeight), this.items.length - 1) +
        this.expand;
    },
    getChildren() {
      console.log(this.visibleRegions);
      return this.visibleRegions.map((item) => {
        return this.$scopedSlots.default(item);
      });
    },
  },
  render(h) {
    let parentTag = "div";
    let parentProps = {};
    const defaultProps = {
      ref: "containerRef",
      class: "scroll-container ",
      nativeOn: {
        scroll: (e) => {
          console.log("scroll", e);
          this.handleScroll();
        },
      },
    };
    if (this.parent) {
      if (typeof this.parent == "string") {
        parent = this.parent;
      } else {
        parentTag = this.parent.tag;
        const props = this.parent.props || {};
        parentProps = Object.keys(props).reduce((target, key) => {
          if (props[key] && typeof props[key] == "object") {
            target[key] = Object.assign(defaultProps[key] || {}, props[key]);
          } else if (typeof props[key] == "string") {
            target[key] = (defaultProps[key] || "") + props[key];
          } else {
            target[key] = props[key];
          }
          return target;
        }, defaultProps);
      }
    }
    const listStyle = {
      height: `${this.totalHeight}px`,
      padding: `${this.visibleStartIndex * this.itemHeight}px 0 ${
        (this.items.length - this.visibleEndIndex - 1) * this.itemHeight
      }px`,
    };
    const listVNode = h("div", { style: listStyle, class: "virtual-list" }, this.getChildren());

    // const childrenList = this.getChildren();
    // console.log(childrenList);
    return h(parentTag, parentProps, [listVNode]);
  },
};
</script>

<style>
/* 组件样式 */
.scroll-container {
  height: 400px;
  overflow-y: auto;
}

.virtual-list {
  position: relative;
  box-sizing: border-box;
}

.virtual-list > * {
  /* height: 40px;
  line-height: 40px; */
  border-bottom: 1px solid #ccc;
  /* padding: 10px; */
}
</style>
