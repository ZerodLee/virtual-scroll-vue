// rollup.config.js
// import json from "@rollup/plugin-json";
// import terser from "@rollup/plugin-terser";
// import { nodeResolve } from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import vue from "rollup-plugin-vue";

const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const vue = require("rollup-plugin-vue");

module.exports = {
  input: "src/index.js",
  output: [
    {
      file: "dist/bundle.js",
      format: "umd",
      name: "VirtualScrollVue",
    },
  ],
  external: ["vue"],
  //   plugins: [json()],
  plugins: [
    nodeResolve({
      extensions: [".js", ".jsx", ".json", ".vue"],
    }),
    commonjs(),
    vue({}),
  ],
};
