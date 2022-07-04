<script lang="ts">
  import Logo from '../logo/logo.svelte';
	import Navbar from '../navbar/navbar.svelte';
  import Sidebar from '../sidebar/sidebar.svelte';
  import { faBarsProgress, faSignOutAlt, faBacterium } from '@fortawesome/free-solid-svg-icons/index.es';
import Icon from '../icon/icon.svelte';

	let checked = false
  interface Items {
    name: string
    icon: any
    href: string
  }
  let sidebarItems: Items[] = [
    {
      name: 'Dashboard',
      icon: faBarsProgress,
      href: '/dashboard'
    },
    {
      name: 'Entities',
      icon: faBacterium,
      href: '/entity'
    },
    // {
    //   name: 'Posts',
    //   icon: faBarsProgress,
    //   href: '/posts'
    // },
    // {
    //   name: 'Pages',
    //   icon: faBarsProgress,
    //   href: '/pages'
    // },
    // {
    //   name: 'Settings',
    //   icon: faBarsProgress,
    //   href: '/admin/settings'
    // }
  ]

	function toogleDrawer(): void {
		checked = !checked;
	}
	function offDrawer(): void {
		checked = false;
	}

</script>
<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" bind:checked />
	<div class="drawer-content flex flex-col p-2">
		<!-- Navbar -->
		<Navbar on:toogleDrawer={toogleDrawer} />

		<div class="flex flex-row h-full mb-2">
      <div class="basis-2">
        <Sidebar sidebarItems={sidebarItems}/>
      </div>
      <div class="basis-full">
          <slot class="w-full" />
			</div>
		</div>
		<!-- Drawer -->
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu p-4 overflow-y-auto w-80 bg-base-100 rounded-box mt-2 mb-2">
			<!-- Sidebar content here -->
			<li>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a on:click={offDrawer} class="btn btn-ghost normal-case text-xl drawer-button hover:no-underline no-underline">
          <Logo logo="dCollect"/>
        </a>
			</li>
      {#each sidebarItems as item}
        <li>
          <a class="bordered no-underline hover:no-underline" href={item.href}>
            {#if item.icon}
              <Icon icon={item.icon}/>
            {/if}
            {item.name}
          </a>
        </li>
      {/each}
      <li class="mt-auto">
        <a href="/" class="bordered no-underline hover:no-underline">
          <Icon icon={faSignOutAlt}/>
          Logout
        </a>
      </li>
		</ul>
	</div>
</div>
