import Peer from 'peerjs';
import type { DataConnection } from 'peerjs';
import { writable, type Writable } from 'svelte/store';

export const peerIdPrefix = 'peer-threlte-vr-editor-';

export function randomId(len = 4) {
	// 6 random lowercase letters
	return Array.from({ length: len }, () =>
		Math.floor(Math.random() * 36)
			.toString(36)
			.toUpperCase()
	).join('');
}

export const stream: Writable<MediaStream | null> = writable(null);

export function setupEditorConnection(peerId: string, callback: (data: unknown) => void) {
	const id = `${peerIdPrefix}${peerId}`;
	console.log('Peer ID:', id);
	const peer = new Peer(id);
	peer.on('open', (id) => {
		console.log('Connected as', id);
		peer.on('connection', (conn) => {
			console.log('Connected to', conn.peer);
			conn.on('data', (data) => {
				callback(data);
			});
		});

		peer.on('call', (call) => {
			console.log('Incoming call from', call.peer);
			call.answer();
			call.on('stream', (remoteStream) => {
				console.log('Receiving remote stream');
				stream.set(remoteStream);
			});
		});
	});
	return peer;
}

export const editor: Writable<DataConnection | null> = writable(null);

export function connectToPeer(remotePeerId: string, stream?: MediaStream) {
	console.log('Connecting to', remotePeerId);
	const peerId = randomId();
	const id = `${peerIdPrefix}${peerId}`;
	console.log('Peer ID:', id);
	const peer = new Peer(id);
	peer.on('open', (id) => {
		console.log('Connected as', id);

		if (stream) {
			console.log('sharing screen with', `${peerIdPrefix}${remotePeerId}`);
			peer.call(`${peerIdPrefix}${remotePeerId}`, stream);
		}

		console.log('opening data connection to', `${peerIdPrefix}${remotePeerId}`);
		const conn = peer.connect(`${peerIdPrefix}${remotePeerId}`);

		conn.on('open', () => {
			console.log('Connected to', conn.peer);
			editor.set(conn);
		});
		return conn;
	});
}
