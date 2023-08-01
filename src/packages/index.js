import VSelect from "./custom-select/index.vue";
export { VSelect };

const install = (app) => {
  app.component("VSelect", VSelect);
};

let windowObj = window;
/* 支持使用标签的方式引入 */
if (typeof windowObj !== "undefined" && windowObj.Vue) {
  install(windowObj.Vue);
}
export default {
  install,
  VSelect,
};
