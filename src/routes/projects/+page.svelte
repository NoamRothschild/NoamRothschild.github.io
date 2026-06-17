<script>
    import { onMount } from 'svelte';
    import ProjectsInfo from './ProjectsInfo.svelte';

    /** @type {import('./$types').PageProps} */
    let { data } = $props();

    // @TODO: move isMobile to a more general location
    let isMobile = $state(true);

    onMount(() => {
        const update = () => {
            isMobile = window.innerWidth <= 768;
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    });
</script>

<!-- the if guard fixes https://github.com/sveltejs/svelte/issues/8112 -->
{#if typeof window !== "undefined"}
<h1 class="statement">here are some of the things I do on my free time and for assignments...</h1>

<ProjectsInfo {isMobile}></ProjectsInfo>
{/if}

<style>
    h1 {
        color: white;
    }

    .statement {
        padding-left: 2%;
    }

</style>