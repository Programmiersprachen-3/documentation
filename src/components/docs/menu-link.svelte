<script>
	import { page } from '$app/stores';

	export let href;

	$: normalizedPath = /self-hosted\/\d\.\d\.\d/.test($page.path)
		? $page.path.replace(/\d\.\d\.\d/, 'latest')
		: $page.path;
	$: active = href === normalizedPath || href === `${normalizedPath}/`;
</script>

<a class:active {href} sveltekit:prefetch {...$$props}><slot /></a>

<style>
	.active {
		color: black;
	}
</style>
