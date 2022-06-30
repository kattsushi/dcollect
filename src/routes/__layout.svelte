<script lang="ts">
	import Background from '$lib/shared/background/background.svelte';
import '../app.css';
</script>

<main>
	<Background>
		<div class="hero min-h-screen bg-base-200">
			<div class="hero-content flex-col lg:flex-row-reverse">
				<div class="text-center lg:text-left">
					<h1 class="text-5xl font-bold text-secondary">Login now!</h1>
					<p class="py-6 text-primary">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
				</div>
				<slot />
			</div>
		</div>
	</Background>
</main>


<style>
</style>
