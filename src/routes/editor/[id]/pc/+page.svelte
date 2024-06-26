<script lang="ts">
	import { connectToPeer } from '../../store';

	async function startDisplayCapture(displayMediaOptions: DisplayMediaStreamOptions) {
		let captureStream = null;

		try {
			captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
		} catch (err) {
			console.error(`Error: ${err}`);
		}
		return captureStream;
	}

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="fullscreen">
	<button
		on:click={async () => {
			let stream = await startDisplayCapture({ video: true });

			if (!stream) {
				console.error('Failed to get display media');
				return;
			}

			connectToPeer(data.id, stream);
		}}
		class="button"
	>
		Connect
	</button>
</div>

<style>
	.fullscreen {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.button {
		background-color: #3b82f6; /* bg-blue-500 */
		color: white; /* text-white */
		font-weight: bold; /* font-bold */
		padding: 0.5rem 1rem; /* py-2 px-4 */
		border-radius: 0.375rem; /* rounded */
		border: none;
		cursor: pointer;
	}

	.button:hover {
		background-color: #2563eb; /* hover:bg-blue-700 */
	}
</style>
