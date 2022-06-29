<script lang="ts">
    import { Route } from 'svelte-routing';

    export let path: string;
    export let component: any;
</script>

<Route path={path} component={component} />