<script>
	import Menu from '../../components/docs/menu.svelte';
	// import MobileMenu from '../../components/docs/mobile-menu/index.svelte';
	// import Search from '../../components/docs/search.svelte';
	import { MENU } from './menu';
</script>

<div class="docs-layout pb-10 row">
	<div class="menu w-2/5 pt-24 pr-8">
		<Menu {MENU} />
	</div>
	<div class="doc-contents markdown-body">
		<!-- <Search /> -->
		<!-- <MobileMenu {MENU} /> -->
		<slot />
	</div>
</div>

<style lang="postcss">
	.docs-layout {
		@apply pb-10;
	}
	@media (min-width: 769px) {
		.docs-layout {
			@apply flex;
			@apply pt-10;
		}
	}

	@media (max-width: 768px) {
		.menu {
			display: none;
		}
	}
	@media (min-width: 769px) {
		.doc-contents {
			@apply w-3/5;
		}
	}
</style>
