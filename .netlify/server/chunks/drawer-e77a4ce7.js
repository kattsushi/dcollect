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
  D: () => Drawer
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e70aca51 = require("./index-e70aca51.js");
const Logo = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  let { logo } = $$props;
  if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0)
    $$bindings.logo(logo);
  return `<label class="${"normal-case text-xl"}" for="${""}">${(0, import_index_e70aca51.e)(logo)}</label>`;
});
const Navbar = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  (0, import_index_e70aca51.a)();
  return `<div class="${"navbar bg-base-100 rounded-xl"}"><div class="${"flex-none"}"><button class="${"btn btn-square btn-ghost drawer-button"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" class="${"inline-block w-5 h-5 stroke-current"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg></button></div>
	<div class="${"flex-1"}">${(0, import_index_e70aca51.v)(Logo, "Logo").$$render($$result, { logo: "dCollect" }, {}, {})}</div>
	<div class="${"flex-none gap-2"}"><div class="${"form-control"}"><input type="${"text"}" placeholder="${"Search"}" class="${"input input-bordered"}"></div>
		<div class="${"dropdown dropdown-end"}">
			<label tabindex="${"0"}" class="${"btn btn-ghost btn-circle avatar"}"><div class="${"w-10 rounded-full"}">
					<img src="${"https://placeimg.com/80/80/people"}"></div></label>
			<ul tabindex="${"0"}" class="${"mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"}"><li>
					<a class="${"justify-between"}">Profile
						<span class="${"badge"}">New</span></a></li>
				
				<li><a>Settings</a></li>
				
				<li><a>Logout</a></li></ul></div></div></div>`;
});
const parseNumber = parseFloat;
function joinCss(obj, separator = ";") {
  let texts;
  if (Array.isArray(obj)) {
    texts = obj.filter((text) => text);
  } else {
    texts = [];
    for (const prop in obj) {
      if (obj[prop]) {
        texts.push(`${prop}:${obj[prop]}`);
      }
    }
  }
  return texts.join(separator);
}
function getStyles(style, size, pull, fw) {
  let float;
  let width;
  const height = "1em";
  let lineHeight;
  let fontSize;
  let textAlign;
  let verticalAlign = "-.125em";
  const overflow = "visible";
  if (fw) {
    textAlign = "center";
    width = "1.25em";
  }
  if (pull) {
    float = pull;
  }
  if (size) {
    if (size == "lg") {
      fontSize = "1.33333em";
      lineHeight = ".75em";
      verticalAlign = "-.225em";
    } else if (size == "xs") {
      fontSize = ".75em";
    } else if (size == "sm") {
      fontSize = ".875em";
    } else {
      fontSize = size.replace("x", "em");
    }
  }
  return joinCss([
    joinCss({
      float,
      width,
      height,
      "line-height": lineHeight,
      "font-size": fontSize,
      "text-align": textAlign,
      "vertical-align": verticalAlign,
      "transform-origin": "center",
      overflow
    }),
    style
  ]);
}
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  return joinCss([
    `translate(${parseNumber(translateX) * translateTimes}${translateUnit},${parseNumber(translateY) * translateTimes}${translateUnit})`,
    `scale(${flipX * parseNumber(scale)},${flipY * parseNumber(scale)})`,
    rotate && `rotate(${rotate}${rotateUnit})`
  ], " ");
}
var fa_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".spin.svelte-1w3t65e{-webkit-animation:svelte-1w3t65e-spin 2s 0s infinite linear;animation:svelte-1w3t65e-spin 2s 0s infinite linear}.pulse.svelte-1w3t65e{-webkit-animation:svelte-1w3t65e-spin 1s infinite steps(8);animation:svelte-1w3t65e-spin 1s infinite steps(8)}@-webkit-keyframes svelte-1w3t65e-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes svelte-1w3t65e-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}")();
const css = {
  code: ".spin.svelte-1w3t65e{-webkit-animation:svelte-1w3t65e-spin 2s 0s infinite linear;animation:svelte-1w3t65e-spin 2s 0s infinite linear}.pulse.svelte-1w3t65e{-webkit-animation:svelte-1w3t65e-spin 1s infinite steps(8);animation:svelte-1w3t65e-spin 1s infinite steps(8)}@-webkit-keyframes svelte-1w3t65e-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes svelte-1w3t65e-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}",
  map: null
};
const Fa = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { id = "" } = $$props;
  let { style = "" } = $$props;
  let { icon } = $$props;
  let { size = "" } = $$props;
  let { color = "" } = $$props;
  let { fw = false } = $$props;
  let { pull = "" } = $$props;
  let { scale = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = "" } = $$props;
  let { flip = false } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let i;
  let s;
  let transform;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
    $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
    $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
    $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css);
  i = icon && icon.icon || [0, 0, "", [], ""];
  s = getStyles(style, size, pull, fw);
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  return `${i[4] ? `<svg${(0, import_index_e70aca51.b)("id", id, 0)} class="${[
    "svelte-fa " + (0, import_index_e70aca51.e)(clazz) + " svelte-1w3t65e",
    (pulse ? "pulse" : "") + " " + (spin ? "spin" : "")
  ].join(" ").trim()}"${(0, import_index_e70aca51.b)("style", s, 0)} viewBox="${"0 0 " + (0, import_index_e70aca51.e)(i[0]) + " " + (0, import_index_e70aca51.e)(i[1])}" aria-hidden="${"true"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}"><g transform="${"translate(" + (0, import_index_e70aca51.e)(i[0] / 2) + " " + (0, import_index_e70aca51.e)(i[1] / 2) + ")"}" transform-origin="${(0, import_index_e70aca51.e)(i[0] / 4) + " 0"}"><g${(0, import_index_e70aca51.b)("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${(0, import_index_e70aca51.b)("d", i[4], 0)}${(0, import_index_e70aca51.b)("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(" + (0, import_index_e70aca51.e)(i[0] / -2) + " " + (0, import_index_e70aca51.e)(i[1] / -2) + ")"}"></path>` : `
          <path${(0, import_index_e70aca51.b)("d", i[4][0], 0)}${(0, import_index_e70aca51.b)("fill", secondaryColor || color || "currentColor", 0)}${(0, import_index_e70aca51.b)("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(" + (0, import_index_e70aca51.e)(i[0] / -2) + " " + (0, import_index_e70aca51.e)(i[1] / -2) + ")"}"></path>
          <path${(0, import_index_e70aca51.b)("d", i[4][1], 0)}${(0, import_index_e70aca51.b)("fill", primaryColor || color || "currentColor", 0)}${(0, import_index_e70aca51.b)("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(" + (0, import_index_e70aca51.e)(i[0] / -2) + " " + (0, import_index_e70aca51.e)(i[1] / -2) + ")"}"></path>`}</g></g></svg>` : ``}`;
});
const Icon = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  return `${(0, import_index_e70aca51.v)(Fa, "Fa").$$render($$result, { icon }, {}, {})}`;
});
/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
var faBacterium = {
  prefix: "fas",
  iconName: "bacterium",
  icon: [576, 512, [], "e05a", "M543 102.9c-3.711-12.51-16.92-19.61-29.53-15.92l-15.12 4.48c-11.05-20.65-27.98-37.14-48.5-47.43l3.783-14.46c3.309-12.64-4.299-25.55-16.99-28.83c-12.76-3.309-25.67 4.295-28.96 16.92l-3.76 14.37c-9.947-.3398-26.22 .1016-66.67 11.88l-4.301-12.03c-4.406-12.3-17.1-18.81-30.34-14.34c-12.35 4.371-18.8 17.88-14.41 30.2l4.303 12.04c-20.6 8.889-40.16 19.64-58.69 31.83L225.9 81.01C217.1 70.56 203.1 68.42 192.6 76.21C182.1 84.03 179.9 98.83 187.8 109.3l7.975 10.63C178.8 134.3 163.3 150.3 149.1 167.4L138 159.3C127.5 151.6 112.6 153.9 104.8 164.5c-7.748 10.54-5.428 25.33 5.164 33.03l11.09 8.066C109.2 224.1 98.79 243.7 90.18 264.3l-12.93-4.431c-12.45-4.248-25.92 2.293-30.18 14.65C42.78 286.9 49.38 300.3 61.78 304.6l13.05 4.474c-11.86 42.33-11.02 55.76-10.39 65.93l-15.45 4.566c-12.59 3.709-19.74 16.87-16 29.38c4.053 13.61 18.1 19.36 29.52 15.93l15.02-4.441c10.78 20.21 27.57 36.73 48.53 47.24l-3.852 14.75C119.7 491.1 124.8 512 145.2 512c10.56 0 20.19-7.049 22.98-17.7l3.816-14.63c10.2 .377 35.85 .873 65.01-18.17l11.45 11.74c5.037 5.164 20.59 13.04 33.58 .4922c9.416-9.096 9.633-24.06 .4941-33.43l-12.19-12.5c7.805-12.29 13.56-26.13 16.11-41.4c1.186-7.107 3.082-13.95 5.158-20.7c10.66 4.988 15.16 7.881 22.12 7.881c8.922 0 17.46-5.018 21.51-13.59c5.582-11.8 .4785-25.89-11.4-31.45l-11.73-5.486c20.09-29.62 45.89-44.76 46.44-45.11l5.23 11.81c5.273 11.86 19.19 17.36 31.33 12.1c11.1-5.279 17.44-19.22 12.15-31.18L401.9 258.5c5.438-1.512 10.86-3.078 16.52-4.021c16.8-2.797 31.88-9.459 45.02-18.54l13.33 12.02c9.289 8.395 24.37 8.439 33.54-1.648c8.814-9.68 8.072-24.62-1.654-33.38l-12.95-11.68c11.32-18.9 16.99-41.02 15.52-64.23l15.81-4.681C539.6 128.6 546.7 115.4 543 102.9zM192 368c-26.51 0-48.01-21.49-48.01-48s21.5-48 48.01-48S240.1 293.5 240.1 320S218.6 368 192 368zM272 232c-13.25 0-23.92-10.75-23.92-24c0-13.26 10.67-23.1 23.92-23.1c13.26 0 23.1 10.74 23.1 23.1C295.1 221.3 285.3 232 272 232z"]
};
var faBarsProgress = {
  prefix: "fas",
  iconName: "bars-progress",
  icon: [512, 512, ["tasks-alt"], "f828", "M464 64C490.5 64 512 85.49 512 112V176C512 202.5 490.5 224 464 224H48C21.49 224 0 202.5 0 176V112C0 85.49 21.49 64 48 64H464zM448 128H320V160H448V128zM464 288C490.5 288 512 309.5 512 336V400C512 426.5 490.5 448 464 448H48C21.49 448 0 426.5 0 400V336C0 309.5 21.49 288 48 288H464zM192 352V384H448V352H192z"]
};
var faRightFromBracket = {
  prefix: "fas",
  iconName: "right-from-bracket",
  icon: [512, 512, ["sign-out-alt"], "f2f5", "M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"]
};
var faSignOutAlt = faRightFromBracket;
const Sidebar = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  let { sidebarItems } = $$props;
  if ($$props.sidebarItems === void 0 && $$bindings.sidebarItems && sidebarItems !== void 0)
    $$bindings.sidebarItems(sidebarItems);
  return `<div class="${"hidden sm:block h-full"}"><div class="${"flex-column menu bg-base-100 mt-2 p-2 rounded-box h-full"}"><ul>${(0, import_index_e70aca51.d)(sidebarItems, (item) => {
    return `<li><a${(0, import_index_e70aca51.b)("href", item.href, 0)}>${(0, import_index_e70aca51.v)(Icon, "Icon").$$render($$result, { icon: item.icon }, {}, {})}</a>
        </li>`;
  })}</ul>
    <ul class="${"mt-auto"}"><li><a href="${"/"}">
          ${(0, import_index_e70aca51.v)(Icon, "Icon").$$render($$result, { icon: faSignOutAlt }, {}, {})}</a></li></ul></div></div>`;
});
const Drawer = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  let checked = false;
  let sidebarItems = [
    {
      name: "Dashboard",
      icon: faBarsProgress,
      href: "/dashboard"
    },
    {
      name: "Entities",
      icon: faBacterium,
      href: "/entity"
    }
  ];
  return `<div class="${"drawer"}"><input id="${"my-drawer-3"}" type="${"checkbox"}" class="${"drawer-toggle"}"${(0, import_index_e70aca51.b)("checked", checked, 1)}>
	<div class="${"drawer-content flex flex-col p-2"}">
		${(0, import_index_e70aca51.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}

		<div class="${"flex flex-row h-full mb-2"}"><div class="${"basis-2"}">${(0, import_index_e70aca51.v)(Sidebar, "Sidebar").$$render($$result, { sidebarItems }, {}, {})}</div>
      <div class="${"basis-full"}">${slots.default ? slots.default({ class: "w-full" }) : ``}</div></div>
		</div>
	<div class="${"drawer-side"}"><label for="${"my-drawer-3"}" class="${"drawer-overlay"}"></label>
		<ul class="${"menu p-4 overflow-y-auto w-80 bg-base-100 rounded-box mt-2 mb-2"}">
			<li>
				<a class="${"btn btn-ghost normal-case text-xl drawer-button hover:no-underline no-underline"}">${(0, import_index_e70aca51.v)(Logo, "Logo").$$render($$result, { logo: "dCollect" }, {}, {})}</a></li>
      ${(0, import_index_e70aca51.d)(sidebarItems, (item) => {
    return `<li><a class="${"bordered no-underline hover:no-underline"}"${(0, import_index_e70aca51.b)("href", item.href, 0)}>${item.icon ? `${(0, import_index_e70aca51.v)(Icon, "Icon").$$render($$result, { icon: item.icon }, {}, {})}` : ``}
            ${(0, import_index_e70aca51.e)(item.name)}</a>
        </li>`;
  })}
      <li class="${"mt-auto"}"><a href="${"/"}" class="${"bordered no-underline hover:no-underline"}">${(0, import_index_e70aca51.v)(Icon, "Icon").$$render($$result, { icon: faSignOutAlt }, {}, {})}
          Logout
        </a></li></ul></div></div>`;
});
