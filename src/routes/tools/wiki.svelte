<script>
	let data = [
		{
			date: "21-Jan-2022",
			content:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, ea?.",
		},
		{
			date: "22-Jan-2022",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta repellat quisquam labore hic adipisci dolore vitae ullam eos iste quia necessitatibus perspiciatis eum a dolorem minus ipsum magnam quo..",
		},
		{
			date: "22-Jan-2022",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta repellat quisquam labore hic adipisci dolore vitae ullam eos iste quia necessitatibus perspiciatis eum a dolorem minus ipsum magnam quo..",
		},

		{
			date: "22-Jan-2022",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta repellat quisquam labore hic adipisci dolore vitae ullam eos iste quia necessitatibus perspiciatis eum a dolorem minus ipsum magnam quo..",
		},

		{
			date: "22-Jan-2022",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta repellat quisquam labore hic adipisci dolore vitae ullam eos iste quia necessitatibus perspiciatis eum a dolorem minus ipsum magnam quo..",
		},

		{
			date: "22-Jan-2022",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta repellat quisquam labore hic adipisci dolore vitae ullam eos iste quia necessitatibus perspiciatis eum a dolorem minus ipsum magnam quo..",
		},

		{ date: "23-Jan-2022", content: "Today is the great day." },
	];
</script>

<h1>Life Wiki</h1>
{#each data as item}
	<h3>{item.date}</h3>
	<p>{item.content}</p>
{:else}
	Wiki is empty please write something.
{/each}
