<script>
	let command = "";
	let richcommmand = "Enter a command";

	let data = [];

	let tags = [
		{ tag: "#recharge", color: "green" },
		{
			tag: "#bill",
			color: "#98BE74",
		},
	];

	// change tag color and return html code
	function changeTagColor(tag, color) {
		return `<span style="background: ${color}">${tag}</span>`;
	}

	// if tags matches with command, change color
	function changeColor() {
		let html = command;
		tags.forEach((tag) => {
			if (command.includes(tag.tag)) {
				html = html.replace(tag.tag, changeTagColor(tag.tag, tag.color));
			}
		});
		richcommmand = html;
		console.log(richcommmand);
	}

	function hello() {
		console.log(command);
		if (command == "") {
			return;
		}
		let transaction = {
			date: extractDate(command) || new Date().toDateString(),
			description: extractDescription(command) || "",
			amount: extractAmount(command) || 0,
			tags: extractTags(command) || [],
		};

		data = [transaction, ...data];
		command = "";
	}

	function extractDescription(transaction) {
		let comment = transaction.split("//")[1];
		if (!comment) {
			return "Not Available";
		}
		return comment.charAt(0).toUpperCase() + comment.slice(1);
	}

	function extractTags(text) {
		let hashtags = [];
		let regex = /#\w+/g;
		let match;
		while ((match = regex.exec(text)) !== null) {
			hashtags.push(match[0]);
		}
		return hashtags;
	}

	function extractDate(text) {
		let regex = /\d{2}[a-z]{3}\d{4}/g;
		let match;
		while ((match = regex.exec(text)) !== null) {
			return new Date(match[0]).toDateString();
		}
	}

	// convert s100 to -100 and r100 to 100
	function extractAmount(text) {
		let regex = /^[s|r]\d+/g;
		let match;
		while ((match = regex.exec(text)) !== null) {
			let num = parseInt(match[0].slice(1));
			if (match[0].charAt(0) === "s") {
				return num * -1;
			} else {
				return num;
			}
		}
	}

	console.log(extractAmount("s100"));
	console.log(extractAmount("r100"));
</script>

<h1>Finance</h1>
<div class="container">
	<div class="dashboard">
		dashboard <br />{@html richcommmand}
	</div>
	<div class="transactions">
		<table>
			<thead>
				<tr>
					<th>Date</th>
					<th>Description</th>
					<th>Tags</th>
					<th>Amount</th>
				</tr>
			</thead>
			<tbody>
				{#each data as trans}
					<tr>
						<td>{trans.date}</td>
						<td>{trans.description}</td>
						<td>{trans.tags}</td>
						<td>{trans.amount}</td>
					</tr>
				{:else}
					No Tansactions<!-- empty list -->
				{/each}
			</tbody>
		</table>
	</div>

	<div class="console">
		<form on:submit|preventDefault={hello}>
			<input type="text" bind:value={command} on:input={changeColor} />
		</form>
	</div>
	<div class="rich-input">
		<span>{@html richcommmand}</span>
	</div>
</div>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 30% 1fr 10%;
		grid-column-gap: 0px;
		grid-row-gap: 8px;
		height: 100%;
		width: 100%;

		.dashboard {
			grid-area: 1 / 1 / 2 / 2;
			border: 1px solid black;
			height: 100%;
			width: 100%;
		}
		.transactions {
			grid-area: 2 / 1 / 3 / 2;

			table {
				min-width: 100%;
				min-height: 100%;
				border-collapse: collapse;
			}

			table,
			th,
			td {
				padding: 0.5rem;
				border: 1px solid black;
			}

			a {
				white-space: nowrap;
			}
		}
		.console {
			z-index: 9;
			grid-area: 3 / 1 / 4 / 2;

			input {
				border: 1px solid black;
				width: 100%;
				height: 100%;
				outline: none;
				padding: 8px;
				font-family: "Droid Sans Mono", Menlo, Monaco, Consolas,
					"Liberation Mono", "Courier New";
				font-size: 0.9em;

				background-color: transparent;
				color: transparent;
				caret-color: black;
			}
		}

		.rich-input {
			border-bottom: 1px solid transparent;
			grid-area: 3 / 1 / 4 / 2;
			// light grey background
			background-color: #f0f0f0;
			width: 100%;
			height: 100%;
			outline: none;
			padding: 8px;
			font-family: "Droid Sans Mono", Menlo, Monaco, Consolas, "Liberation Mono",
				"Courier New";
			font-size: 0.9em;

			background-color: transparent;
		}

		> * {
			height: 100%;
			min-width: 100%;
		}
	}
</style>
