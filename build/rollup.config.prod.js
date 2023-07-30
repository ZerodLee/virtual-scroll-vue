// rollup.config.js
// import json from "@rollup/plugin-json";
// import terser from "@rollup/plugin-terser";
// import { nodeResolve } from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import vue from "rollup-plugin-vue";
// import merge from "deepmerge";
// import config from "./rollup.config.js";
// import babel from "@rollup/plugin-babel";
const merge = require("deepmerge");
const config = require("./rollup.config.js");
const babel = require("@rollup/plugin-babel");
const terser = require("@rollup/plugin-terser");

module.exports = merge(config, {
  // input: "src/main.js",
  output: [
    // {
    //   file: "bundle.js",
    //   format: "cjs",
    // },
    {
      file: "dist/bundle.min.js",
      format: "umd",
      name:"VirtualScroll",
      plugins: [terser()],
    },
  ],
  //   plugins: [json()],
  plugins: [
    babel({
      babelHelpers: "bundled", // 使用 'bundled' 或 'runtime'，具体取决于你的需求
      exclude: "node_modules/**", // 排除 node_modules 目录
    }),
  ],
});
