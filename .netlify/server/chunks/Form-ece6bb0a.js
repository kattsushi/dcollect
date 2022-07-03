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
  F: () => Form
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e70aca51 = require("./index-e70aca51.js");
const subscriber_queue = [];
function writable(value, start = import_index_e70aca51.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_e70aca51.f)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = import_index_e70aca51.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_e70aca51.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
function min(val, args) {
  const minValue = parseFloat(args[0]);
  val = val ? val : "";
  const value = isNaN(val) ? val.length : parseFloat(val);
  return value >= minValue;
}
function max(val, args) {
  const maxValue = parseFloat(args[0]);
  val = val ? val : "";
  const value = isNaN(val) ? val.length : parseFloat(val);
  return isNaN(value) ? true : value <= maxValue;
}
function between(val, args) {
  return min(val, [args[0]]) && max(val, [args[1]]);
}
function email(val, args) {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return val && regex.test(val);
}
function required(val, args) {
  if (val === void 0 || val === null || val === "undefined" || val === "null") {
    return false;
  }
  if (typeof val === "string") {
    const tmp = val.replace(/\s/g, "");
    return tmp.length > 0;
  }
  if (typeof val === "object") {
    return val.length > 0;
  }
  return true;
}
function url(val, args) {
  const regex = /(https?|ftp|git|svn):\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  return regex.test(url);
}
function equal(val, args) {
  return val === args[0];
}
function bytesToSize(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0)
    return "n/a";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  if (i === 0)
    return `${bytes} ${sizes[i]})`;
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}
function getFileExtension(file) {
  const filenameParts = file.name.split(".");
  return filenameParts[filenameParts.length - 1].toLowerCase();
}
function types(file, allowedFileTypes) {
  if (!allowedFileTypes.includes(getFileExtension(file))) {
    return false;
  }
  return true;
}
function maxsize(file, maxFileSize) {
  const maxSize = parseFloat(maxFileSize) * 1024 * 1024;
  if (file.size > maxSize) {
    return false;
  }
  return true;
}
var CoreRules = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  between,
  email,
  max,
  min,
  required,
  url,
  equal,
  bytesToSize,
  getFileExtension,
  types,
  maxsize
}, Symbol.toStringTag, { value: "Module" }));
function validate(field) {
  let { value, rules } = field;
  let valid = true;
  let rule;
  let errors = [];
  if (rules) {
    rules.map((validator) => {
      if (validator === "file") {
        if (value) {
          Object.keys(value).map((i) => {
            Object.keys(field.file).map((r) => {
              valid = CoreRules[r].call(null, value[i], field.file[r]);
              if (!valid) {
                errors = [...errors, r];
              }
            });
          });
        }
      } else {
        if (typeof validator === "function") {
          valid = validator.call();
          rule = validator.name;
        } else {
          const args = validator.split(/:/g);
          rule = args.shift();
          valid = CoreRules[rule].call(null, value, args);
        }
        if (!valid) {
          errors = [...errors, rule];
        }
      }
    });
    return { ...field, validation: { errors, dirty: errors.length > 0 } };
  } else {
    return { ...field, validation: { errors, dirty: false } };
  }
}
const values_form = writable([]);
const fields_store = writable([]);
function isRequired(field) {
  if (field.rules) {
    if (field.rules.length > 0) {
      return true;
    }
  }
  return false;
}
function inArray(arr, element) {
  if (arr.indexOf(element) != -1) {
    return true;
  }
  return false;
}
async function preprocessField(field, fields, values) {
  const fnc = field.preprocess;
  field = await fnc.call(null, field, fields, values);
  return field;
}
function toVal(mix) {
  var k, y, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx() {
  var i = 0, tmp, x, str = "";
  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}
const Tag = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  let { tag = "div" } = $$props;
  let { id = "" } = $$props;
  let { classes = [] } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  return `${tag === "span" ? `<span${(0, import_index_e70aca51.b)("class", classes.length > 0 ? clsx(classes) : null, 0)}>${slots.default ? slots.default({}) : ``}</span>` : `${tag === "small" ? `<small${(0, import_index_e70aca51.b)("class", classes.length > 0 ? clsx(classes) : null, 0)}>${slots.default ? slots.default({}) : ``}</small>` : `${tag === "strong" ? `<strong${(0, import_index_e70aca51.b)("class", classes.length > 0 ? clsx(classes) : null, 0)}>${slots.default ? slots.default({}) : ``}</strong>` : `${tag === "label" ? `<label${(0, import_index_e70aca51.b)("for", id, 0)}${(0, import_index_e70aca51.b)("class", classes.length > 0 ? clsx(classes) : null, 0)}>${slots.default ? slots.default({}) : ``}</label>` : `<div${(0, import_index_e70aca51.b)("class", classes.length > 0 ? clsx(classes) : null, 0)}>${slots.default ? slots.default({}) : ``}</div>`}`}`}`}`;
});
const Input = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  let { field = {} } = $$props;
  const defaultAttributes = {
    type: "text",
    id: "",
    classes: "",
    min: null,
    max: null,
    step: null,
    autocomplete: "off",
    placeholder: "",
    disabled: false,
    readonly: false
  };
  const fieldAttributes = field.attributes ? field.attributes : {};
  field.attributes = { ...defaultAttributes, ...fieldAttributes };
  (0, import_index_e70aca51.a)();
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `<input${(0, import_index_e70aca51.b)("type", field.attributes.type, 0)}${(0, import_index_e70aca51.b)("name", field.name, 0)}${(0, import_index_e70aca51.b)("value", field.value, 0)}${(0, import_index_e70aca51.b)("id", field.attributes.id ? field.attributes.id : field.name, 0)}${(0, import_index_e70aca51.b)("class", clsx(field.attributes.classes), 0)}${(0, import_index_e70aca51.b)("placeholder", field.attributes.placeholder, 0)} ${isRequired(field) ? "required" : ""} ${field.attributes.disabled ? "disabled" : ""} ${field.attributes.readonly ? "readonly" : ""}${(0, import_index_e70aca51.b)("min", field.attributes.min, 0)}${(0, import_index_e70aca51.b)("max", field.attributes.max, 0)}${(0, import_index_e70aca51.b)("step", field.attributes.step, 0)}${(0, import_index_e70aca51.b)("autocomplete", field.attributes.autocomplete, 0)}>`;
});
const Textarea = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  let { field = {} } = $$props;
  const defaultAttributes = {
    id: "",
    classes: "",
    min: null,
    max: null,
    step: null,
    autocomplete: "off",
    placeholder: "",
    required: false,
    disabled: false,
    readonly: false
  };
  const fieldAttributes = field.attributes ? field.attributes : {};
  field.attributes = { ...defaultAttributes, ...fieldAttributes };
  let classe = null;
  (0, import_index_e70aca51.a)();
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `<textarea${(0, import_index_e70aca51.b)("name", field.name, 0)}${(0, import_index_e70aca51.b)("class", classe, 0)}${(0, import_index_e70aca51.b)("placeholder", field.attributes.placeholder, 0)} ${isRequired(field) ? "required" : ""} ${field.attributes.disabled ? "disabled" : ""} ${field.attributes.readonly ? "readonly" : ""}${(0, import_index_e70aca51.b)("rows", field.attributes.rows, 0)}${(0, import_index_e70aca51.b)("cols", field.attributes.cols, 0)}>${(0, import_index_e70aca51.e)(field.value)}</textarea>`;
});
const Select = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  let { field = {} } = $$props;
  const defaultAttributes = { id: "", classes: "", disabled: false };
  const fieldAttributes = field.attributes ? field.attributes : {};
  field.attributes = { ...defaultAttributes, ...fieldAttributes };
  let classe = null;
  let multiple = false;
  if (field.extra) {
    multiple = field.extra.multiple ? field.extra.multiple : null;
  }
  (0, import_index_e70aca51.a)();
  function checkSelected(is_multiple, option_value, field_value) {
    if (is_multiple) {
      if (field_value && field_value.length) {
        const res = field_value.indexOf(option_value) != -1;
        return res;
      } else if (field.default_value && field.default_value.length) {
        const res = field.default_value.indexOf(option_value) != -1;
        return res;
      }
      return null;
    }
    return option_value === field_value;
  }
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `<select${(0, import_index_e70aca51.b)("name", field.name, 0)}${(0, import_index_e70aca51.b)("id", field.attributes.id, 0)}${(0, import_index_e70aca51.b)("class", classe, 0)} ${isRequired(field) ? "required" : ""} ${field.attributes.disabled ? "disabled" : ""} ${multiple ? "multiple" : ""}>${field.extra ? `${field.extra.options ? `${(0, import_index_e70aca51.d)(field.extra.options, (option) => {
    return `<option${(0, import_index_e70aca51.b)("value", option.value, 0)} ${checkSelected(multiple, option.value, field.value) ? "selected" : ""}>${(0, import_index_e70aca51.e)(option.title)}
        </option>`;
  })}` : ``}` : ``}</select>`;
});
var AutoComplete_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".select-container.svelte-1b1kqw.svelte-1b1kqw{border:solid 1px #dddddd;border-radius:4px;height:auto;position:relative;display:flex;flex-wrap:wrap}.select-container.svelte-1b1kqw input.svelte-1b1kqw{border:none;padding:0 15px;height:40px;width:100%;box-sizing:border-box}.items-container.svelte-1b1kqw.svelte-1b1kqw{box-shadow:0 2px 3px 0 rgba(44, 62, 80, 0.24);background:#ffffff;border-radius:0 0 5px 5px;overflow-y:auto;position:absolute;top:0;z-index:2;width:100%}.items-container.svelte-1b1kqw .item.svelte-1b1kqw,.item-selected.svelte-1b1kqw.svelte-1b1kqw{height:40px;line-height:40px;padding:0 20px;overflow:hidden}.items-container.svelte-1b1kqw .item.svelte-1b1kqw:first-child,.items-container.svelte-1b1kqw .item.svelte-1b1kqw:hover{background-color:#fbd5c8;cursor:pointer}.item-selected.svelte-1b1kqw.svelte-1b1kqw,.clear-all.svelte-1b1kqw.svelte-1b1kqw{position:absolute;z-index:2}.item-selected.svelte-1b1kqw.svelte-1b1kqw{display:flex;flex-wrap:wrap}.clear-all.svelte-1b1kqw.svelte-1b1kqw{right:20px;width:20px;height:40px;cursor:pointer}.clear.svelte-1b1kqw.svelte-1b1kqw{cursor:pointer}.tag.svelte-1b1kqw.svelte-1b1kqw{background-color:#ddd;border-radius:15px;height:25px;line-height:25px;margin:8px 5px;padding:0 30px 0 10px;position:relative;display:flex;flex-wrap:wrap}.tag.svelte-1b1kqw .clear.svelte-1b1kqw{box-shadow:0 2px 3px 0 rgba(44, 62, 80, 0.24);border-radius:50%;width:15px;height:15px;padding:2px;position:absolute;right:5px;top:3px;background-color:#ff3e00}.tag.svelte-1b1kqw .clear.svelte-1b1kqw:hover{background-color:#fbd5c8}.tag.svelte-1b1kqw .clear svg.svelte-1b1kqw{fill:white;vertical-align:top}input.svelte-1b1kqw.svelte-1b1kqw:focus{outline:none}")();
const css$1 = {
  code: ".select-container.svelte-1b1kqw.svelte-1b1kqw{border:solid 1px #dddddd;border-radius:4px;height:auto;position:relative;display:flex;flex-wrap:wrap}.select-container.svelte-1b1kqw input.svelte-1b1kqw{border:none;padding:0 15px;height:40px;width:100%;box-sizing:border-box}.items-container.svelte-1b1kqw.svelte-1b1kqw{box-shadow:0 2px 3px 0 rgba(44, 62, 80, 0.24);background:#ffffff;border-radius:0 0 5px 5px;overflow-y:auto;position:absolute;top:0;z-index:2;width:100%}.items-container.svelte-1b1kqw .item.svelte-1b1kqw,.item-selected.svelte-1b1kqw.svelte-1b1kqw{height:40px;line-height:40px;padding:0 20px;overflow:hidden}.items-container.svelte-1b1kqw .item.svelte-1b1kqw:first-child,.items-container.svelte-1b1kqw .item.svelte-1b1kqw:hover{background-color:#fbd5c8;cursor:pointer}.item-selected.svelte-1b1kqw.svelte-1b1kqw,.clear-all.svelte-1b1kqw.svelte-1b1kqw{position:absolute;z-index:2}.item-selected.svelte-1b1kqw.svelte-1b1kqw{display:flex;flex-wrap:wrap}.clear-all.svelte-1b1kqw.svelte-1b1kqw{right:20px;width:20px;height:40px;cursor:pointer}.clear.svelte-1b1kqw.svelte-1b1kqw{cursor:pointer}.tag.svelte-1b1kqw.svelte-1b1kqw{background-color:#ddd;border-radius:15px;height:25px;line-height:25px;margin:8px 5px;padding:0 30px 0 10px;position:relative;display:flex;flex-wrap:wrap}.tag.svelte-1b1kqw .clear.svelte-1b1kqw{box-shadow:0 2px 3px 0 rgba(44, 62, 80, 0.24);border-radius:50%;width:15px;height:15px;padding:2px;position:absolute;right:5px;top:3px;background-color:#ff3e00}.tag.svelte-1b1kqw .clear.svelte-1b1kqw:hover{background-color:#fbd5c8}.tag.svelte-1b1kqw .clear svg.svelte-1b1kqw{fill:white;vertical-align:top}input.svelte-1b1kqw.svelte-1b1kqw:focus{outline:none}",
  map: null
};
const AutoComplete = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  let { field = {} } = $$props;
  const defaultAttributes = {
    id: "",
    spellcheck: false,
    autocorrect: "off",
    autocomplete: "off",
    placeholder: "Tap here..."
  };
  const fieldAttributes = field.attributes ? field.attributes : {};
  field.attributes = { ...defaultAttributes, ...fieldAttributes };
  const defaultExtra = { loadItemes: [], multiple: false };
  const fieldExtra = field.extra ? field.extra : {};
  field.extra = { ...defaultExtra, ...fieldExtra };
  let items = field.extra.loadItemes;
  let itemsSelectedFilterer = () => {
    if (field.value && Array.isArray(field.value) && field.value.length) {
      const defaultValues = field.value.filter((item) => {
        const oldSelected = items.filter((s) => s.value === item.value && s.title === item.title);
        if (oldSelected.length) {
          return oldSelected[0];
        }
      });
      return defaultValues;
    } else {
      return [];
    }
  };
  let itemsSelected = itemsSelectedFilterer();
  let value = null;
  (0, import_index_e70aca51.a)();
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  $$result.css.add(css$1);
  return `<div class="${"select-container svelte-1b1kqw"}">${itemsSelected.length > 0 ? `${(0, import_index_e70aca51.d)(itemsSelected, (itemSelected) => {
    return `<div class="${"item-selected " + (0, import_index_e70aca51.e)(field.extra.multiple ? "tag" : "") + " svelte-1b1kqw"}"><span>${(0, import_index_e70aca51.e)(itemSelected.title)}</span>
        ${field.extra.multiple ? `<div class="${"clear svelte-1b1kqw"}"><svg width="${"100%"}" height="${"100%"}" viewBox="${"-2 -2 50 50"}" focusable="${"false"}" class="${"svelte-1b1kqw"}"><path d="${"M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124\n                l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"}"></path></svg>
          </div>` : ``}
      </div>`;
  })}
    <div class="${"clear-all svelte-1b1kqw"}"><svg width="${"100%"}" height="${"100%"}" viewBox="${"-2 -2 50 50"}" focusable="${"false"}" role="${"presentation"}" class="${"svelte-e3bo9s"}"><path fill="${"currentColor"}" d="${"M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124\n          l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"}"></path></svg></div>` : ``}

  <input${(0, import_index_e70aca51.b)("id", field.attributes.id, 0)} type="${"text"}"${(0, import_index_e70aca51.b)("spellcheck", field.attributes.spellcheck, 0)}${(0, import_index_e70aca51.b)("autocorrect", field.attributes.autocorrect, 0)}${(0, import_index_e70aca51.b)("autocomplete", field.attributes.autocomplete, 0)}${(0, import_index_e70aca51.b)("placeholder", field.attributes.placeholder, 0)} class="${"svelte-1b1kqw"}"${(0, import_index_e70aca51.b)("value", value, 0)}>

  ${``}
</div>`;
});
function getItems(field) {
  let list = [];
  if (field.extra) {
    if (field.extra.items) {
      list = field.extra.items;
    }
  }
  return list;
}
const Radio = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  let { field = {} } = $$props;
  let classe = null;
  let { items = getItems(field) } = $$props;
  (0, import_index_e70aca51.a)();
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  return `${(0, import_index_e70aca51.d)(items, (item, i) => {
    return `<div${(0, import_index_e70aca51.b)("class", field.extra.aligne === "inline" ? "form-check form-check-inline" : "form-check", 0)}><input type="${"radio"}"${(0, import_index_e70aca51.b)("class", classe, 0)}${(0, import_index_e70aca51.b)("id", item.id, 0)}${(0, import_index_e70aca51.b)("name", field.name, 0)}${(0, import_index_e70aca51.b)("value", item.value, 0)} ${item.value === field.value ? "checked" : ""}>
    <span>${(0, import_index_e70aca51.e)(item.title)}</span>
  </div>`;
  })}`;
});
const Checkbox = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  let { field = {} } = $$props;
  let values = [];
  let classe = null;
  const dispatch = (0, import_index_e70aca51.a)();
  if (field.extra.items.length > 0) {
    field.extra.items.map((item) => {
      if (field.value && field.value.length) {
        item.checked = inArray(field.value, item.value);
      }
      if (item.checked) {
        values = [...values, item.value];
        field.value = field.value ? [...field.value, item.value] : values;
      }
    });
    dispatch("changeValue", { name: field.name, value: values });
  }
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  return `${(0, import_index_e70aca51.d)(field.extra.items, (item, i) => {
    return `<div${(0, import_index_e70aca51.b)("class", field.extra.aligne === "inline" ? "form-check-inline" : "form-check", 0)}><input type="${"checkbox"}"${(0, import_index_e70aca51.b)("class", classe, 0)}${(0, import_index_e70aca51.b)("value", item.value, 0)}${(0, import_index_e70aca51.b)("name", item.name, 0)} ${(item.value ? item.checked : false) ? "checked" : ""}>
    <span>${(0, import_index_e70aca51.e)(item.title)}</span>
  </div>`;
  })}`;
});
var File_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".list-files.svelte-1bah02z.svelte-1bah02z{margin-top:10px}.list-files.svelte-1bah02z .file.svelte-1bah02z{display:flex;margin-top:10px;border:solid 4px #dddddd;padding:10px}.list-files.svelte-1bah02z .file .img.svelte-1bah02z,.list-files.svelte-1bah02z .file .infos.svelte-1bah02z{width:50%;font-size:0.75rem}.list-files.svelte-1bah02z .file .img img.svelte-1bah02z{width:100%}")();
const css = {
  code: ".list-files.svelte-1bah02z.svelte-1bah02z{margin-top:10px}.list-files.svelte-1bah02z .file.svelte-1bah02z{display:flex;margin-top:10px;border:solid 4px #dddddd;padding:10px}.list-files.svelte-1bah02z .file .img.svelte-1bah02z,.list-files.svelte-1bah02z .file .infos.svelte-1bah02z{width:50%;font-size:0.75rem}.list-files.svelte-1bah02z .file .img img.svelte-1bah02z{width:100%}",
  map: null
};
const File = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  let { field = {} } = $$props;
  const defaultAttributes = { id: "", classes: "", disabled: null };
  const fieldAttributes = field.attributes ? field.attributes : {};
  field.attributes = { ...defaultAttributes, ...fieldAttributes };
  let classe = null;
  (0, import_index_e70aca51.a)();
  if ($$props.field === void 0 && $$bindings.field && field !== void 0)
    $$bindings.field(field);
  $$result.css.add(css);
  return `<input type="${"file"}"${(0, import_index_e70aca51.b)("name", field.name, 0)}${(0, import_index_e70aca51.b)("id", field.attributes.id, 0)} class="${(0, import_index_e70aca51.e)((0, import_index_e70aca51.g)(classe)) + " svelte-1bah02z"}" ${""}>

${field.file ? `<div class="${"file-rules"}"><ul>${(0, import_index_e70aca51.d)(Object.entries(field.file), ([rule, ruleValue]) => {
    return `<li><strong>${(0, import_index_e70aca51.e)(rule)}</strong>: ${(0, import_index_e70aca51.e)(ruleValue)}</li>`;
  })}</ul></div>` : ``}

${``}`;
});
const Message = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  let { error } = $$props;
  let { messages = {} } = $$props;
  const rules = {
    required: "This field is required",
    min: "This field must be more characters long",
    max: "This field must be less characters long",
    between: "This field must be between values defined",
    equal: "This field must be equal to value defined",
    email: "This email format is not valid",
    types: "Must to allowed file types",
    maxsize: "This file has size more than max size",
    custom_rule: "Error"
  };
  function displayError(rule) {
    let message = "";
    if (messages[rule]) {
      message += messages[rule] ? messages[rule] : rules["custom_rule"];
    } else {
      message += rules[rule] ? rules[rule] : rules["custom_rule"];
    }
    return message;
  }
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.messages === void 0 && $$bindings.messages && messages !== void 0)
    $$bindings.messages(messages);
  return `<div class="${"invalid-feedback"}">${error ? `${(0, import_index_e70aca51.e)(displayError(error))}` : ``}</div>`;
});
const Field = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  let { fields = [] } = $$props;
  let { name = "" } = $$props;
  let isValidForm = true;
  let values = [];
  let itemsField = [];
  let form = { fields: [], values: null };
  const dispatch = (0, import_index_e70aca51.a)();
  Promise.all(fields.map(async (field) => {
    values = { ...values, [field.name]: field.value };
    if (field.preprocess) {
      field = await preprocessField(field, fields, values);
    }
    field = await validate(field);
    values[`${field.name}`] = field.value;
    return field;
  })).then(async (data) => {
    const isValid = await data.find((item) => {
      if (item.validation) {
        return item.validation.dirty === true;
      }
    });
    isValidForm = isValid ? false : true;
    itemsField = data;
    fields_form_update();
    values_form_update();
  });
  itemsField = fields;
  fields_form_update();
  values_form_update();
  function fields_form_update() {
    fields_store.update((data) => {
      if (!data.length || !data[name]) {
        data.push(itemsField);
      }
      return data;
    });
  }
  function values_form_update() {
    values_form.update((data) => {
      data.map((item) => {
        if (item.form === name) {
          item = { form: name, values, valid: isValidForm };
        }
        return item;
      });
      form = {
        data: { form: name, values, valid: isValidForm }
      };
      dispatch("Values", form);
      return data;
    });
  }
  if ($$props.fields === void 0 && $$bindings.fields && fields !== void 0)
    $$bindings.fields(fields);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${(0, import_index_e70aca51.d)(itemsField, (field) => {
    return `${(0, import_index_e70aca51.v)(Tag, "Tag").$$render($$result, {
      tag: field.prefix ? field.prefix.tag ? field.prefix.tag : "div" : "div",
      classes: field.prefix ? field.prefix.classes ? field.prefix.classes : "form-group" : "form-group"
    }, {}, {
      default: () => {
        return `
    ${field.attributes ? `${field.attributes.label ? `<label${(0, import_index_e70aca51.b)("for", field.id, 0)} class="${"label"}">${(0, import_index_e70aca51.e)(field.attributes.label)}</label>` : ``}` : ``}
    
    ${field.type === "input" ? `${(0, import_index_e70aca51.v)(Input, "Input").$$render($$result, { field }, {}, {})}` : `${field.type === "textarea" ? `${(0, import_index_e70aca51.v)(Textarea, "Textarea").$$render($$result, { field }, {}, {})}` : `${field.type === "select" ? `${(0, import_index_e70aca51.v)(Select, "Select").$$render($$result, { field }, {}, {})}` : `${field.type === "autocomplete" ? `${(0, import_index_e70aca51.v)(AutoComplete, "AutoComplete").$$render($$result, { field }, {}, {})}` : `${field.type === "radio" ? `${(0, import_index_e70aca51.v)(Radio, "Radio").$$render($$result, { field }, {}, {})}` : `${field.type == "checkbox" ? `${(0, import_index_e70aca51.v)(Checkbox, "Checkbox").$$render($$result, { field }, {}, {})}` : `${field.type === "file" ? `${(0, import_index_e70aca51.v)(File, "File").$$render($$result, { field }, {}, {})}` : ``}`}`}`}`}`}`}
    
    ${field.description ? `${field.description.text ? `${(0, import_index_e70aca51.v)(Tag, "Tag").$$render($$result, {
          tag: field.description.tag,
          classes: field.description.classes ? field.description.classes : ""
        }, {}, {
          default: () => {
            return `${(0, import_index_e70aca51.e)(field.description.text)}
        `;
          }
        })}` : ``}` : ``}
    
    ${!form.data.valid ? `${field.validation.errors.length > 0 ? `${(0, import_index_e70aca51.d)(field.validation.errors, (error) => {
          return `${(0, import_index_e70aca51.v)(Message, "Message").$$render($$result, {
            error,
            messages: field.messages ? field.messages : []
          }, {}, {})}`;
        })}` : ``}` : ``}
  `;
      }
    })}`;
  })}`;
});
const Form = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  let { hasCancelButton } = $$props;
  let { submitButtonText = "Submit" } = $$props;
  let { form_name } = $$props;
  let { fields } = $$props;
  let { onSubmitForm } = $$props;
  let color = "#0054c2";
  if ($$props.hasCancelButton === void 0 && $$bindings.hasCancelButton && hasCancelButton !== void 0)
    $$bindings.hasCancelButton(hasCancelButton);
  if ($$props.submitButtonText === void 0 && $$bindings.submitButtonText && submitButtonText !== void 0)
    $$bindings.submitButtonText(submitButtonText);
  if ($$props.form_name === void 0 && $$bindings.form_name && form_name !== void 0)
    $$bindings.form_name(form_name);
  if ($$props.fields === void 0 && $$bindings.fields && fields !== void 0)
    $$bindings.fields(fields);
  if ($$props.onSubmitForm === void 0 && $$bindings.onSubmitForm && onSubmitForm !== void 0)
    $$bindings.onSubmitForm(onSubmitForm);
  return `<div class="${"card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"}"><div class="${"card-body"}"><form class="${"custom-form"}" style="${"--theme-color: " + (0, import_index_e70aca51.e)(color)}">${(0, import_index_e70aca51.v)(Field, "Field").$$render($$result, { fields, name: form_name }, {}, {})}
      <div class="${"form-control mt-6"}">${hasCancelButton ? `<button class="${"btn btn-secondary my-2"}" type="${"button"}">Cancel</button>` : ``}
        ${slots.default ? slots.default({}) : ``}
        <button class="${"btn btn-primary"}" type="${"submit"}">${(0, import_index_e70aca51.e)(submitButtonText)}</button></div></form></div></div>`;
});
