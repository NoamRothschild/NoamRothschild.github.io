<script>
    import ProjectsInfo from './ProjectsInfo.svelte';

    /** @type {import('./$types').PageProps} */
    let { data } = $props();
</script>

<!-- the if guard fixes https://github.com/sveltejs/svelte/issues/8112 -->
{#if typeof window !== "undefined"}
<h1 class="statement">here are some of the things I do on my free time and for assignments...</h1>

<ProjectsInfo></ProjectsInfo>
{/if}

<style>
    h1 {
        color: white;
    }

    .statement {
        padding-left: 2%;
    }

</style>