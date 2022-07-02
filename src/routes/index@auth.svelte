<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import AuthLogin from '$lib/auth/login.svelte';
</script>

<svelte:head>
	<title>Login Dcollect App</title>
	<meta name="description" content="Dcollect App" />
</svelte:head>

  <!-- ... -->

	<AuthLogin />

<style>
	
</style>
