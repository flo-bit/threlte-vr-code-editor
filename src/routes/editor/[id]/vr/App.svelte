<script lang="ts">
	import { Canvas } from '@threlte/core';
	import EditScene from './EditScene.svelte';
	import { onMount } from 'svelte';

	export let id = '';
</script>

<Canvas>
	<EditScene {id} />
</Canvas>
