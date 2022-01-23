import { c as create_ssr_component, v as validate_component } from "../../chunks/index-211225cf.js";
var Dashboard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dashboard.svelte-1sie9me.svelte-1sie9me{display:grid;margin:auto;width:100%;grid-template-columns:repeat(auto-fit, minmax(20rem, 1fr))}.dashboard.svelte-1sie9me .tool.svelte-1sie9me{min-width:20rem;min-height:10rem;display:flex;justify-content:center;align-items:center;border:1px solid black;padding:1rem}",
  map: null
};
const Dashboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"dashboard svelte-1sie9me"}"><div class="${"tool todo svelte-1sie9me"}">Todo</div>
	<div class="${"tool finance svelte-1sie9me"}">Finance</div>
	<div class="${"tool wiki svelte-1sie9me"}">Wiki</div>
	<div class="${"tool goals svelte-1sie9me"}">Goals</div>
</div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("Welcome to Home");
  return `<h2>Dashboard</h2>

${validate_component(Dashboard, "Dashboard").$$render($$result, {}, {}, {})}`;
});
export { Routes as default };
