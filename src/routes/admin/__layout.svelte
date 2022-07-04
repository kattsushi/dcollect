<script lang="ts">
	import Drawer from '$lib/shared/drawer/drawer.svelte';
	import '../../app.css';
</script>

<svelete:head>
	<title>Admin</title>
</svelete:head>
<Drawer>
	<!-- Page content here -->
	<slot />
</Drawer>
