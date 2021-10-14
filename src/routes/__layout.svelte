<script>
	import '../app.css';
	import LayoutMain from '../components/layout-main.svelte';
	import LayoutRoot from '../components/layout-root.svelte';
</script>

<LayoutRoot>
	<LayoutMain>
		<slot />
	</LayoutMain>
</LayoutRoot>
