<script lang="ts">
	import Scene from '$lib/components/Scene.svelte';

	import { onMount } from 'svelte';
	import { T } from '@threlte/core';
	import { XR } from '@threlte/xr';
	import { Container, Root, Video, Text } from 'threlte-uikit';
	import { setupEditorConnection, stream } from '../../store';

	export let id = '';
	onMount(async () => {
		setupEditorConnection(id, (data: unknown) => {});
	});
</script>

<Scene />
<XR />

<T.Group position.z={-1.5} position.y={1}>
	<Root pixelSize={0.001} sizeX={2} sizeY={2} flexDirection="column">
		{#if $stream}
			<Video src={$stream} autoplay />
		{/if}
	</Root>
</T.Group>
