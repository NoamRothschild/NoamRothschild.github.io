<script>
    const {src, redirect_link, alt} = $props();
</script>

{#if redirect_link != ""}
    <a href={redirect_link} target="_blank">
        <img {src} {alt}>
    </a>
{:else}
    <img {src} {alt}>
{/if}

<style>
    img {
        height: calc((83 / 2) * (100vw / 1700));
        width: auto;
    }
</style>