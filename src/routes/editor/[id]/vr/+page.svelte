<script lang="ts">
	import App from './App.svelte';
	import { ARButton, VRButton } from '@threlte/xr';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="fullscreen">
	<App id={data.id} />
</div>
<ARButton />

<style>
	.fullscreen {
		width: 100vw;
		height: 100vh;
	}
</style>
