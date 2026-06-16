<script lang="ts">
    import github_svg from "$lib/assets/github.svg";
    import Icon from "./Icon.svelte";
    import { iconOfLang } from "$lib";

    // title: string, text: string, langs: []string, ghs: []strings, height?: string
    const { title, text, langs, ghs, height = "22.5vw" } = $props();
</script>

<div class="entry-container" style:height={height}>
    <br>
    <h2 class="title">{@html title}</h2>

    <p class="text">{@html text}</p>

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
        width: 45vw;
        background-color: #18181B;
        border-radius: 15px;
        border: 2px solid #25252A;

        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .title {
        text-align: center;
        flex-shrink: 0;
    }

    p, h2 {
        color: white;
    }

    .text {
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