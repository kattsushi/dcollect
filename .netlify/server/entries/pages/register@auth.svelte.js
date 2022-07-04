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
  default: () => Register_auth,
  prerender: () => prerender
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e70aca51 = require("../../chunks/index-e70aca51.js");
var import_Form_a63d6498 = require("../../chunks/Form-a63d6498.js");
var import_clsx = require("clsx");
const form_name = "LoginForm";
function onSubmit(data) {
}
const Register = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  const fields = [
    {
      type: "input",
      name: "username",
      attributes: {
        classes: ["form-control", "input", "input-bordered", "w-full"],
        type: "text",
        id: "username",
        label: "Username",
        placeholder: "Username"
      }
    },
    {
      type: "input",
      name: "email",
      attributes: {
        classes: ["form-control", "input", "input-bordered", "w-full"],
        type: "text",
        id: "username",
        label: "Email",
        placeholder: "Email"
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
  return `${(0, import_index_e70aca51.v)(import_Form_a63d6498.F, "Form").$$render($$result, {
    form_name,
    fields,
    submitButtonText: "Register",
    onSubmitForm: onSubmit,
    hasCancelButton: false
  }, {}, {
    default: () => {
      return `<a class="${"btn btn-link my-2"}" sveltekit:prefetch href="${"/"}">Already have an account? go to login
  </a>`;
    }
  })}`;
});
const prerender = true;
const Register_auth = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Register new Account Dcollect App</title>`, ""}<meta name="${"description"}" content="${"Dcollect App"}" data-svelte="svelte-n37fih">`, ""}

  

	${(0, import_index_e70aca51.v)(Register, "AuthRegister").$$render($$result, {}, {}, {})}`;
});
