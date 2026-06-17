<script>
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { setIsMobileContext } from '$lib/isMobile';
	import NavBar from './NavBar.svelte';
	import "../app.css"

	let { children } = $props();

	let isMobile = $state(false);

	onMount(() => {
		const update = () => {
			isMobile = window.innerWidth <= 768;
		};
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	});

	setIsMobileContext({
		get current() {
			return isMobile;
		}
	});

	const selected = $derived.by(() => {
		const path = page.url.pathname;
		if (path.startsWith('/projects')) return 'projects';
		if (path.startsWith('/blogs')) return 'blogs';
		if (path.startsWith('/contact')) return 'contact';
		return 'home';
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar {selected} />

{@render children()}
