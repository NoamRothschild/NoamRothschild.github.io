<script lang="ts">
    import github_svg from "$lib/assets/github.svg";
    import Icon from "./Icon.svelte";
    import { iconOfLang } from "$lib";
    import { getIsMobileContext } from '$lib/isMobile';
    const defaultHeight: string = "22.5vw";

    const isMobile = $derived(getIsMobileContext().current);
    // title: string, text: string, langs: []string, ghs: []strings, height?: string
    const { title, text, langs, ghs, height_override = defaultHeight } = $props();
    const width = $derived((!isMobile) ? "45vw" : "90vw");
    const height = $derived(
        isMobile
            ? "auto"
            : (height_override != defaultHeight) ? height_override : defaultHeight
    );
</script>

<div class="entry-container" class:mobile={isMobile} style:height={height} style:width={width}>
    <br>
    <h2 class="title">{@html title}</h2>

    <div class="text">{@html text}</div>

    <div class="icons">
        {#each langs as lang_name}
            <Icon alt={lang_name} redirect_link="" src={iconOfLang(lang_name)} ></Icon>
        {/each}

        {#each ghs as gh}
            <Icon alt={gh} redirect_link={gh} src={github_svg} ></Icon>
        {/each}
    </div>
</div>

<style>
    .entry-container {
        background-color: #18181B;
        border-radius: 15px;
        border: 2px solid #25252A;

        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .entry-container.mobile {
        overflow: visible;
    }

    .entry-container.mobile .text {
        flex: none;
        min-height: unset;
    }

    .title {
        text-align: center;
        flex-shrink: 0;
    }

    h2 {
        color: white;
    }

    .text {
        color: white;
        margin-left: 2%;
        width: 90%;
        font-size: 1.1em;
        flex: 1;
        min-height: 0;
    }

    .icons {
        display: flex;
        justify-content: right;
        align-items: center;
        flex-shrink: 0;
        gap: 1%;
        margin-right: 2%;
        margin-bottom: 2%;
        position: relative;
        z-index: 1;
    }
</style>