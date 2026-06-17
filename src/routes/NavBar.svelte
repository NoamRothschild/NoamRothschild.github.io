<script>
    import { getIsMobileContext } from "$lib/isMobile";
    import NavOption from "./NavOption.svelte";
    
    const { selected = "home" } = $props();
    const isMobile = $derived(getIsMobileContext().current);
</script>

<div class="navbar">
    <NavOption selected={selected == 'home'} text="home" path='/'></NavOption>
    <NavOption selected={selected == 'projects'} text="projects"></NavOption>
    <NavOption selected={selected == 'blogs'} text="blogs"></NavOption>
    <NavOption selected={selected == 'contact'} text="contact"></NavOption>
</div>

<style>
    .navbar {
        display: flex;
        justify-content: center;
        background-color: #27272A;

        width: fit-content;

        padding-inline: 3px;
        box-sizing: border-box;

        border: 2px solid #27272A;
        border-radius: 7px;
        
        padding-bottom: 3px;
        padding-top: 3px;
    }
</style>

{#if isMobile}
<style>
    .navbar p {
        font-size: smaller;
    }

    .navbar {
        gap: 0.3rem;
    }
</style>
{:else}
<style>
    .navbar {
        gap: 1rem;
    }
</style>
{/if}