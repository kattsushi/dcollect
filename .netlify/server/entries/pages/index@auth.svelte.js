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
  default: () => Index_auth,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e70aca51 = require("../../chunks/index-e70aca51.js");
var import_Form_ece6bb0a = require("../../chunks/Form-ece6bb0a.js");
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
const form_name = "LoginForm";
const Login = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  const fields = [
    {
      type: "input",
      name: "color",
      attributes: {
        classes: ["form-control", "input", "input-bordered", "w-full"],
        type: "text",
        id: "username",
        label: "Email or Username",
        placeholder: "Email or Username"
      }
    },
    {
      type: "input",
      name: "password",
      value: "",
      attributes: {
        classes: ["form-control", "input", "input-bordered", "w-full"],
        type: "password",
        id: "password",
        label: "Password",
        placeholder: "Password"
      }
    }
  ];
  function onSubmit(data) {
    goto(`/admin`, { replaceState: true });
  }
  return `${(0, import_index_e70aca51.v)(import_Form_ece6bb0a.F, "Form").$$render($$result, {
    form_name,
    fields,
    submitButtonText: "Login",
    onSubmitForm: onSubmit,
    hasCancelButton: false
  }, {}, {
    default: () => {
      return `<a class="${"btn btn-secondary my-2"}" sveltekit:prefetch href="${"/register"}">Register
  </a>`;
    }
  })}`;
});
const prerender = true;
const Index_auth = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Login Dcollect App</title>`, ""}<meta name="${"description"}" content="${"Dcollect App"}" data-svelte="svelte-1lfvwmg">`, ""}

  

	${(0, import_index_e70aca51.v)(Login, "AuthLogin").$$render($$result, {}, {}, {})}`;
});
