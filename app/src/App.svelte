<script>
import { onMount } from "svelte";

import Address from "./components/Address.svelte";
import CurrentTime from "./components/CurrentTime.svelte";
import PrevTable from "./components/PrevTable.svelte";
import StateList from "./components/StateList.svelte";
import Status from "./components/Status.svelte";
import { Jumper } from 'svelte-loading-spinners'

import { onInterval } from "./util";
	// fetch data : newest data, previous data
	const getEcoData = async () => {
		const response = await fetch("http://localhost:7000/eco");
		return await response.json();
	}

	let eco;
	onMount(async () => {
		eco = await getEcoData()
	})
	// fetch data per 5 seconds
	onInterval(async() => {
		eco = await getEcoData();
	}, 5000)
</script>

<div class="container">
	{#if !eco}
	<Jumper size="60" color="#FF3E00" unit="px" duration="1s"></Jumper>
	{:else}
	<header>
		<PrevTable prev={eco.prev || []}/>
		<CurrentTime/>
	</header>
	<main>
		<Status status={eco.newest[1] > 5 ? "good" : eco.newest[1] < 5 ? "bad": "normal" }/>
		<StateList newestStates={eco.newest}/>
	</main>
	<footer>
		<Address address="주소 : 대전시 유성구 한밭대학교"/>
	</footer>
	{/if}
</div>

<style>
	.container {
		text-align: center;
		margin: 0 auto;
		background-image: url('/asset/background.jpg');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		height: 100%;
		padding: 10px;
	}

	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	footer {
		height: 150px;
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
	}


	@media (min-width: 640px) {
		.container {
			max-width: none;
		}
	}
</style>