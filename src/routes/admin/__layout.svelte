<script lang="ts">
	import Drawer from '$lib/shared/drawer/drawer.svelte';
	import '../../app.css';

	import store, { useSelector } from '../../lib/store';
	import { authSelectors } from '$lib/auth/store/selectors';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { setCurrentUser } from '$lib/auth/store';

	onMount(() => {
		store.dispatch(setCurrentUser()).then(() => {
			if (!isLoggedIn) {
				goto('/');
			}
		});
	});
	$: isLoggedIn = useSelector(
		authSelectors.isLoggedIn,
		(isLoggedInStore: any) => (isLoggedIn = isLoggedInStore)
	);
</script>

<svelete:head>
	<title>Admin</title>
</svelete:head>

{#if isLoggedIn}
	<!-- ... -->
	<Drawer>
		<!-- Page content here -->
		<slot />
	</Drawer>
{/if}
