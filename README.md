# threlte vr editor

Proof of concept for a live VR code editor using svelte, three.js, threlte and peer.js.

## How to use in your own project:

1. Make sure you have a threlte project set up (including the extras and xr packages), or create a new one by running:

```bash
npm create threlte my-project
cd my-project
```

2. Install the following two dependencies:

```bash
npm i threlte-uikit peerjs
```

3. Copy the `editor` folder in `src/routes` from this project into your projects `src/routes` folder.

4. Either make sure your main scene is in `src/lib/components/Scene.svelte` or change the import in `src/routes/editor/[id]/vr/EditScene.svelte` to point to your main scene.

5. make sure your vr device and pc are on the same network.

6. run `npm run dev` in your project and navigate to `your-host-ip/editor/[your random id]/vr` on your vr device (replace `your random id` with your own string). You should see the scene from your main scene file.

7. Open `your-host-ip/editor/[your random id]/pc` on your pc (with the same `your random id` as in step 5). Click connect, choose what you want to share (e.g. your screen or just a window) and click sharne.

8. You should now see your pc screen in the vr scene. Edit the scene with using your computers mouse and keyboard and see the changes in vr.

Note: some threlte components don't work in vr. Specificially when installing a fresh threlte project, the `<ContactShadow>` component will cause the scene to not render in vr. You can remove it from your main scene file to fix this.