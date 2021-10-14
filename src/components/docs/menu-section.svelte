<script>
	import docsCurrentSectionStore from '../../stores/docs-current-section';
	import MenuLink from './menu-link.svelte';

	export let menuItem;

	$: isActiveSection = $docsCurrentSectionStore
		? menuItem.path.indexOf(
				/self-hosted\/\d\.\d\.\d/.test($docsCurrentSectionStore)
					? $docsCurrentSectionStore.replace(/\d\.\d\.\d/, 'latest')
					: $docsCurrentSectionStore
		  ) >= 0
		: /\/docs\/?$/.test(menuItem.path);
</script>

<li class="mb-0">
	<div class:isActiveSection class="px-6 inline-block text-lg leading-snug">
		<MenuLink href={menuItem.path} class="text-large">{menuItem.title}</MenuLink>
		{#if menuItem.subMenu && isActiveSection}
			<ul class="submenu ml-4 mt-4 text-base leading-snug">
				{#each menuItem.subMenu as sub}
					<li class="menu-item">
						<MenuLink href={sub.path}>{sub.title}</MenuLink>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</li>

<style lang="postcss">
	/* override _forms.scss */
	.menu-item {
		margin-bottom: 0;
	}

	.isActiveSection {
		@apply bg-white;
		@apply py-6;
		border-radius: 1rem;
		box-shadow: var(--shadow);
	}
</style>
