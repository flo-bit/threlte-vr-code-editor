<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { Environment, Float, Grid, OrbitControls, Text3DGeometry } from '@threlte/extras';
	import PlanetModel from './PlanetModel.svelte';

	let r = 0;
	useTask((dt) => {
		r += dt * 0.2;
	});
</script>

<T.PerspectiveCamera makeDefault position={[0, 1.2, 3]} fov={15}>
	<OrbitControls enableZoom={true} enableDamping autoRotateSpeed={0.5} target.y={1.2} />
</T.PerspectiveCamera>

<T.DirectionalLight intensity={1.8} position.x={5} position.y={10} />
<T.AmbientLight intensity={0.2} />

<Float>
	<PlanetModel position={[-0.6, 1, -0.6]} scale={0.25} rotation.y={r} />
</Float>

<Float>
	<T.Mesh scale={0.001} position={[-0.3, 0.8, -0.8]}>
		<Text3DGeometry text="hello world" />
		<T.MeshStandardMaterial color="green" />
	</T.Mesh>
</Float>
<Environment files="/env.hdr" />
