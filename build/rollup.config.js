// rollup.config.js
// import json from "@rollup/plugin-json";
// import terser from "@rollup/plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";

export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.js",
      format: "umd",
      name: "VirtualScrollVue",
    },
  ],
  //   plugins: [json()],
  plugins: [
    nodeResolve({
      extensions: [".js", ".jsx", ".json", ".vue"],
    }),
    commonjs(),
    vue({}),
  ],
};
