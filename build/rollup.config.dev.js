// rollup.config.js
// import json from "@rollup/plugin-json";
// import terser from "@rollup/plugin-terser";
// import { nodeResolve } from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import vue from "rollup-plugin-vue";
import merge from "deepmerge";
import config from "./rollup.config.js";
import serve from "rollup-plugin-serve";
import copy from "rollup-plugin-copy";

export default merge(config, {
  input: "playground/main.js",
  // output: [
  //   {
  //     file: "dist/bundle.js",
  //     format: "iife", // 输出格式，这里使用iife可以在浏览器中直接运行
  //     // sourcemap: true, // 生成sourcemap文件，方便调试
  //   },
  // ],
  //   plugins: [json()],
  plugins: [
    serve("dist"),
    copy({
      targets: [{ src: "public/index.html", dest: "dist" }],
    }),
  ],
});
