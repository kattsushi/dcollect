/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		userid: string;
	}

	// interface Platform {}

	// interface Session {}

	// interface Stuff {}
	declare module '@fortawesome/pro-solid-svg-icons/index.es' {
		export * from '@fortawesome/pro-solid-svg-icons';
	}
}
