<script>
    import { getIsMobileContext } from '$lib/isMobile';
    const {src, redirect_link, alt } = $props();
    const isMobile = $derived(getIsMobileContext().current);
</script>

{#if redirect_link != ""}
    <a href={redirect_link} target="_blank">
        <img {src} {alt}>
    </a>
{:else}
    <img {src} {alt}>
{/if}


{#if !isMobile}
<style>
    img {
        height: calc((83 / 2) * (100vw / 1700));
        width: auto;
    }
</style>
{:else}
<style>
    img {
        width: calc(15vw);
        height: auto;
    }
</style>
{/if}