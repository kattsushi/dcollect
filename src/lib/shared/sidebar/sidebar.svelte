<script lang="ts">
import Icon from "../icon/icon.svelte";
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons/index.es';
  export let sidebarItems: any[]
</script>
<div class="hidden sm:block h-full">
  <div class="flex-column menu bg-base-100 mt-2 p-2 rounded-box h-full">
    <ul>
      {#each sidebarItems as item}
        <li>
          <a href={item.href}>
            <Icon icon={item.icon}/>
          </a>
        </li>
      {/each}
    </ul>
    <ul class="mt-auto">
      <li>
        <a>
          <!-- svelte-ignore missing-declaration -->
          <Icon icon={faSignOutAlt}/>
        </a>
      </li>
    </ul>
  </div>
</div>