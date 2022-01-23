import { c as create_ssr_component } from "../../../chunks/index-211225cf.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "table.svelte-1arvmjo{border-collapse:collapse}table.svelte-1arvmjo,th.svelte-1arvmjo,td.svelte-1arvmjo{padding:0.5rem;border:1px solid black}a.svelte-1arvmjo{white-space:nowrap}",
  map: null
};
const Tools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h2>Tools</h2>
<p>Below is the tools to manage your life.</p>

<table class="${"svelte-1arvmjo"}"><thead><tr><th class="${"svelte-1arvmjo"}">Tools</th>
			<th class="${"svelte-1arvmjo"}">Uses</th></tr></thead>
	<tbody><tr><td class="${"svelte-1arvmjo"}"><a href="${"/tools/finance"}" class="${"svelte-1arvmjo"}">Finance</a></td>
			<td class="${"svelte-1arvmjo"}">Manage you transactions, budget, assest, subscriptions in one place.
			</td></tr>
		<tr><td class="${"svelte-1arvmjo"}"><a href="${"/tools/wiki"}" class="${"svelte-1arvmjo"}">Life Wiki</a></td>
			<td class="${"svelte-1arvmjo"}">Manage your journals, reading list, goals etc., in one place</td></tr></tbody>
</table>`;
});
export { Tools as default };
