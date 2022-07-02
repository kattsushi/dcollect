<script lang="ts">
  import { createEventDispatcher } from 'svelte'
import Logo from '../logo/logo.svelte';
  const dispatch = createEventDispatcher()
  function toogleDrawer(): void {
    dispatch('toogleDrawer')
  }
</script>

<div class="navbar bg-base-100 rounded-xl">
  <div class="flex-none">
    <button on:click={toogleDrawer} class="btn btn-square btn-ghost drawer-button">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
	<div class="flex-1">
    <Logo logo="dCollect"/>
	</div>
	<div class="flex-none gap-2">
		<div class="form-control">
			<input type="text" placeholder="Search" class="input input-bordered" />
		</div>
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label tabindex="0" class="btn btn-ghost btn-circle avatar">
				<div class="w-10 rounded-full">
					<!-- svelte-ignore a11y-missing-attribute -->
					<img src="https://placeimg.com/80/80/people" />
				</div>
			</label>
			<ul
				tabindex="0"
				class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
			>
				<li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<a class="justify-between">
						Profile
						<span class="badge">New</span>
					</a>
				</li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Settings</a></li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<li><a>Logout</a></li>
			</ul>
		</div>
	</div>
</div>
