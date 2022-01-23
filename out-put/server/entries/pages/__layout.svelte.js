import { c as create_ssr_component, v as validate_component } from "../../chunks/index-211225cf.js";
var app = "";
var Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-13pez2z{display:flex;flex-direction:row;align-items:center;justify-content:center;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:auto}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="${"svelte-13pez2z"}"><a href="${"/"}">Home</a>
	<a href="${"/tools"}">Tools</a>
	<a href="${"/about"}">About</a>
	<a href="${"/settings"}">Settings</a>
</nav>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-12vfxs7.svelte-12vfxs7,main.svelte-12vfxs7.svelte-12vfxs7,footer.svelte-12vfxs7.svelte-12vfxs7{display:flex;flex-direction:column;justify-content:center;align-items:center}footer.svelte-12vfxs7.svelte-12vfxs7{display:flex;flex-direction:row}footer.svelte-12vfxs7 .heart.svelte-12vfxs7{font-family:sans-serif;display:inline}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-12vfxs7"}"><h1>Welcome to Lifi</h1></header>
${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
<main class="${"svelte-12vfxs7"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-12vfxs7"}">Made with <span class="${"heart svelte-12vfxs7"}">\u2764\uFE0F</span> by xvishaldongre
</footer>`;
});
export { _layout as default };
