<script>
    import { goto } from "$app/navigation"; 
    const { selected = false, text, path = text } = $props();
</script>

<button class:selected onclick={() => goto(path)}>
    <p>{text}</p>
</button>

<style>
    p {
        margin-top: 0.3em;
        margin-bottom: 0.3em;
        font-size: x-large;
        color: #83838A;
    }
    button {
        background-color: #27272A;
        border: 2px solid #27272A;
        border-radius: 7px;

        padding-inline: 1rem;
    }

    button.selected {
        border: 2px solid #3F3F46;
        background-color: #3F3F46;
    }
    button.selected > p {
        color: white;
    }
</style>