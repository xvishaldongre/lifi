<div class="dashboard">
	<div class="tool todo">Todo</div>
	<div class="tool finance">Finance</div>
	<div class="tool wiki">Wiki</div>
	<div class="tool goals">Goals</div>
</div>

<style lang="scss">
	.dashboard {
		display: grid;
		margin: auto;
		width: 100%;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		.tool {
			min-width: 20rem;
			min-height: 10rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px solid black;
			padding: 1rem;
		}
	}
</style>
