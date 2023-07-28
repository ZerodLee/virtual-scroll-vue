// rollup.config.js
// import merge from "deepmerge";
// import config from "./rollup.config.js";
// import serve from "rollup-plugin-serve";
// import copy from "rollup-plugin-copy";

const merge = require("deepmerge");
const config = require("./rollup.config.js");
const serve = require("rollup-plugin-serve");
const copy = require("rollup-plugin-copy");

module.exports = merge(config, {
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
      targets: [
        { src: "public/index.html", dest: "dist" },
        { src: "public/fastly.jsdelivr.net_npm_vue@2.6.14_dist_vue.js", dest: "dist" },
      ],
    }),
  ],
});
