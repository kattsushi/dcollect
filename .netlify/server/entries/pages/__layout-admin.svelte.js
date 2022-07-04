var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout_admin
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e70aca51 = require("../../chunks/index-e70aca51.js");
var import_drawer_e77a4ce7 = require("../../chunks/drawer-e77a4ce7.js");
const _layout_admin = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_e70aca51.v)(import_drawer_e77a4ce7.D, "Drawer").$$render($$result, {}, {}, {
    default: () => {
      return `
      ${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
