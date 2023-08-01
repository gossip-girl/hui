import './style.css';
import { defineComponent as p, computed as f, openBlock as s, createElementBlock as c, withDirectives as m, createElementVNode as _, Fragment as v, renderList as V, toDisplayString as y, vModelSelect as g } from "vue";
const S = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [l, n] of o)
    t[l] = n;
  return t;
}, b = p({
  name: "VSelect"
}), x = /* @__PURE__ */ Object.assign(b, {
  props: {
    name: "VSelect",
    selectValue: {
      type: String,
      default: null
    },
    optionsList: {
      type: Array,
      default: () => []
    },
    fieldNames: {
      type: Object,
      default: () => ({
        label: "label",
        value: "value"
      })
    }
  },
  emits: ["update:selectValue"],
  setup(e, { emit: o }) {
    const t = e, l = f({
      get: () => t.selectValue,
      set: (n) => o("update:selectValue", n)
    });
    return (n, d) => (s(), c("div", null, [
      m(_("select", {
        "onUpdate:modelValue": d[0] || (d[0] = (a) => l.value = a)
      }, [
        (s(!0), c(v, null, V(e.optionsList, (a) => (s(), c("option", {
          key: a[e.fieldNames.label]
        }, y(a[e.fieldNames.value]), 1))), 128))
      ], 512), [
        [g, l.value]
      ])
    ]));
  }
}), i = /* @__PURE__ */ S(x, [["__scopeId", "data-v-97a6ca0f"]]), r = (e) => {
  e.component("VSelect", i);
};
let u = window;
typeof u != "undefined" && u.Vue && r(u.Vue);
const k = {
  install: r,
  VSelect: i
};
export {
  i as VSelect,
  k as default
};
