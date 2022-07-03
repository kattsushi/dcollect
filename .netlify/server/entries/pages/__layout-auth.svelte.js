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
  default: () => _layout_auth
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e70aca51 = require("../../chunks/index-e70aca51.js");
var background_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "@import url(//fonts.googleapis.com/css?family=Lato:300:400);\np.svelte-14n2b2o.svelte-14n2b2o{font-family:'Lato', sans-serif;letter-spacing:1px;font-size:14px;color:#333333}\n.header.svelte-14n2b2o.svelte-14n2b2o{position:relative;text-align:center;background:linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);color:white}\n.inner-header.svelte-14n2b2o.svelte-14n2b2o{height:65vh;width:100%;margin:0;padding:0}\n.flex.svelte-14n2b2o.svelte-14n2b2o{display:flex;justify-content:center;align-items:center;text-align:center}\n.waves.svelte-14n2b2o.svelte-14n2b2o{position:relative;width:100%;height:15vh;margin-bottom:-7px;min-height:100px;max-height:150px}\n.content.svelte-14n2b2o.svelte-14n2b2o{position:relative;height:20vh;text-align:center;background-color:white}\n.parallax.svelte-14n2b2o>use.svelte-14n2b2o{-webkit-animation:svelte-14n2b2o-move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;animation:svelte-14n2b2o-move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite}\n.parallax.svelte-14n2b2o>use.svelte-14n2b2o:nth-child(1){-webkit-animation-delay:-2s;animation-delay:-2s;-webkit-animation-duration:7s;animation-duration:7s}\n.parallax.svelte-14n2b2o>use.svelte-14n2b2o:nth-child(2){-webkit-animation-delay:-3s;animation-delay:-3s;-webkit-animation-duration:10s;animation-duration:10s}\n.parallax.svelte-14n2b2o>use.svelte-14n2b2o:nth-child(3){-webkit-animation-delay:-4s;animation-delay:-4s;-webkit-animation-duration:13s;animation-duration:13s}\n.parallax.svelte-14n2b2o>use.svelte-14n2b2o:nth-child(4){-webkit-animation-delay:-5s;animation-delay:-5s;-webkit-animation-duration:20s;animation-duration:20s}\n@-webkit-keyframes svelte-14n2b2o-move-forever{0%{transform:translate3d(-90px, 0, 0)}100%{transform:translate3d(85px, 0, 0)}}\n@keyframes svelte-14n2b2o-move-forever{0%{transform:translate3d(-90px, 0, 0)}100%{transform:translate3d(85px, 0, 0)}}\n@media(max-width: 768px){.waves.svelte-14n2b2o.svelte-14n2b2o{height:40px;min-height:40px}.content.svelte-14n2b2o.svelte-14n2b2o{height:30vh}}")();
const css = {
  code: "@import url(//fonts.googleapis.com/css?family=Lato:300:400);p.svelte-14n2b2o.svelte-14n2b2o{font-family:'Lato', sans-serif;letter-spacing:1px;font-size:14px;color:#333333}.header.svelte-14n2b2o.svelte-14n2b2o{position:relative;text-align:center;background:linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%);color:white}.inner-header.svelte-14n2b2o.svelte-14n2b2o{height:65vh;width:100%;margin:0;padding:0}.flex.svelte-14n2b2o.svelte-14n2b2o{display:flex;justify-content:center;align-items:center;text-align:center}.waves.svelte-14n2b2o.svelte-14n2b2o{position:relative;width:100%;height:15vh;margin-bottom:-7px;min-height:100px;max-height:150px}.content.svelte-14n2b2o.svelte-14n2b2o{position:relative;height:20vh;text-align:center;background-color:white}.parallax.svelte-14n2b2o>use.svelte-14n2b2o{-webkit-animation:svelte-14n2b2o-move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;animation:svelte-14n2b2o-move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite}.parallax.svelte-14n2b2o>use.svelte-14n2b2o:nth-child(1){-webkit-animation-delay:-2s;animation-delay:-2s;-webkit-animation-duration:7s;animation-duration:7s}.parallax.svelte-14n2b2o>use.svelte-14n2b2o:nth-child(2){-webkit-animation-delay:-3s;animation-delay:-3s;-webkit-animation-duration:10s;animation-duration:10s}.parallax.svelte-14n2b2o>use.svelte-14n2b2o:nth-child(3){-webkit-animation-delay:-4s;animation-delay:-4s;-webkit-animation-duration:13s;animation-duration:13s}.parallax.svelte-14n2b2o>use.svelte-14n2b2o:nth-child(4){-webkit-animation-delay:-5s;animation-delay:-5s;-webkit-animation-duration:20s;animation-duration:20s}@-webkit-keyframes svelte-14n2b2o-move-forever{0%{transform:translate3d(-90px, 0, 0)}100%{transform:translate3d(85px, 0, 0)}}@keyframes svelte-14n2b2o-move-forever{0%{transform:translate3d(-90px, 0, 0)}100%{transform:translate3d(85px, 0, 0)}}@media(max-width: 768px){.waves.svelte-14n2b2o.svelte-14n2b2o{height:40px;min-height:40px}.content.svelte-14n2b2o.svelte-14n2b2o{height:30vh}}",
  map: null
};
const Background = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"header svelte-14n2b2o"}">
	<div class="${"inner-header flex svelte-14n2b2o"}">
		${slots.default ? slots.default({}) : ``}</div>

	
	<div><svg class="${"waves svelte-14n2b2o"}" xmlns="${"http://www.w3.org/2000/svg"}" xmlns:xlink="${"http://www.w3.org/1999/xlink"}" viewBox="${"0 24 150 28"}" preserveAspectRatio="${"none"}" shape-rendering="${"auto"}"><defs><path id="${"gentle-wave"}" d="${"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"}"></path></defs><g class="${"parallax svelte-14n2b2o"}"><use xlink:href="${"#gentle-wave"}" x="${"48"}" y="${"0"}" fill="${"rgba(255,255,255,0.7"}" class="${"svelte-14n2b2o"}"></use><use xlink:href="${"#gentle-wave"}" x="${"48"}" y="${"3"}" fill="${"rgba(255,255,255,0.5)"}" class="${"svelte-14n2b2o"}"></use><use xlink:href="${"#gentle-wave"}" x="${"48"}" y="${"5"}" fill="${"rgba(255,255,255,0.3)"}" class="${"svelte-14n2b2o"}"></use><use xlink:href="${"#gentle-wave"}" x="${"48"}" y="${"7"}" fill="${"#fff"}" class="${"svelte-14n2b2o"}"></use></g></svg></div>
	</div>



<div class="${"content flex svelte-14n2b2o"}"><p class="${"svelte-14n2b2o"}">Devmoon |\xA0Labs</p></div>

`;
});
const _layout_auth = (0, import_index_e70aca51.c)(($$result, $$props, $$bindings, slots) => {
  return `<main>${(0, import_index_e70aca51.v)(Background, "Background").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"hero min-h-screen bg-base-200"}"><div class="${"hero-content flex-col lg:flex-row-reverse"}"><div class="${"text-center lg:text-left"}"><h1 class="${"text-5xl font-bold text-secondary"}">Login now!</h1>
					<p class="${"py-6 text-primary"}">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p></div>
				${slots.default ? slots.default({}) : ``}</div></div>`;
    }
  })}
</main>`;
});
