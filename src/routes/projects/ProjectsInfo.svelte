<script>
    import { getIsMobileContext } from '$lib/isMobile';
    import { images } from './assets';
    import EntryInfo from './EntryInfo.svelte';

    // const {  } = $props();
    const isMobile = $derived(getIsMobileContext().current);
</script>

<div class="entry" class:mobile={isMobile}>
    <EntryInfo
        title="Discord && Voxel Space built using Assembly, no libc"
        text={`
        Re-Implemented the SHA1 && Base64 protocols
        <ul>
            <li> Created a simple <b>HTTP</b> library </li>
            <li> Implemented <b>websockets</b> to allow for <b>full-duplex browser communication</b> </li>
        </ul>

        Created my own standard library including, but not all:
        <ul>
            <li> string utils </li>
            <li> file handling </li>
            <li> multi-processing (including shared memory) </li>
            <li> time parsing && formatting </li>
            <li> socket handling </li>
            <li> simple keystore managers </li>
        </ul>
        `}
        ghs={["https://github.com/NoamRothschild/asm"]}
        langs={["nasm_compact"]}
    ></EntryInfo>
    <img class="showcase showcase-asm" src={images.asm_showcase} alt="showcase of the project">
</div>

<br><br><br><br><br><br>

<div class="entry" class:mobile={isMobile}>
    <EntryInfo
        title="POC of a Distributed MMO game server architecture"
        text={`
        In a team of 5 colleagues, I was the leader. Together we:
        <ul style="display: flex; flex-direction: column; gap: 0.5em;">
            <li> Implemented a distributed MMO backend capable of running across multiple physical machines and <b>load balancing</b> itself. </li>
            <li> Designed region servers with node-based world partitioning, <b>cross-server synchronization</b>, and <b>Redis</b>-backed messaging infrastructure </li>
            <li> Created a custom <b>encrypted networking</b> protocol using TCP and UDP, including packet sequencing, <b>authentication</b>, and <b>rate limiting</b> </li>
            <li> Implemented <b>spatial hashing</b>, <b>event propagation</b>, <b>distributed entity replication</b> (<b>proxy</b> system), <b>player synchronization</b>, <b>chat services</b>, <b>inventory systems</b>, <b>shops</b>, <b>combat</b>, and <b>persistence layers</b>. </li>
        </ul>
        `}
        ghs={["https://github.com/NoamRothschild/cyber-project"]}
        langs={["python", "redis"]}
    ></EntryInfo>
    <img class="showcase" src={images.mmo_diagram} alt="showcase of the project">
</div>

<br><br><br><br><br><br>

<div class="entry" class:mobile={isMobile}>
    <EntryInfo
        title="KIF-Multiplayer && Launcher"
        text={`
        This community has a special place in my heart. Here my spark began.
        <br>
        Because of my love for this game, I started developing a <b>plugin</b> making the game
        be able to be played with your friends, hence <b>multi-player</b>.
        <br><br>
        I <b>contributed</b> to the open source game by making not only the above,
        but also developing a game launcher to make the hassle of installing the game
        less of a pain.
        <br><br>
        <i>while both projects are no longer being maintained, a new and amazing person
        jumped on the opportunity and is continuing to develop the multiplayer extension.
        <br>
        much love алек <3</i>
        `}
        ghs={["https://github.com/NoamRothschild/KIFLauncher", "https://github.com/NoamRothschild/infinitefusion-multiplayer"]}
        langs={["ruby", "redis", "python"]}
    ></EntryInfo>
    <img class="showcase" src={images.kif_images} alt="showcase of the project">
</div>

<br><br><br><br><br><br>

<div class="entry" class:mobile={isMobile}>
    <EntryInfo
        title="Asm-Interpreter"
        text={`
        My school has an entrance exam to the cyber class in assembly.
        <br>
        I was tasked with helping to <b>automate the whole checking system</b> which
        used to be by hand.
        <br><br>
        While the exam system is closed source, the asm-interpreter is public!
        <br>
        It can:
        <ul style="display: flex; flex-direction: column; gap: 0.5em;">
            <li> <b>parse and evaluate</b> most of the <b>8086</b> instruction set </li>
            <li> add labels to your code to be able to jump to arbitrary locations! </li>
            <li> live <b>REPL</b> to test assumptions about instructions in real time! </li>
            <li> can be used as a <b>zig module</b> and easily incorporated into other codebases </li>
        </ul>
        `}
        ghs={["https://github.com/NoamRothschild/asm-interpreter"]}
        langs={["zig"]}
    ></EntryInfo>
    <img class="showcase" src={images.asm_interpreter} alt="showcase of the project">
</div>

<br><br><br><br><br><br>

<div class="entry" class:mobile={isMobile}>
    <EntryInfo
        title="Magshimim's Projects"
        text={`
        I am currently partipicating in the <b>Magshimim</b> program.
        <br>
        Here are some highlights of the work we did there:
        <ul>
            <li> Chess Backend [ c++ ] </li>
            <li> Trivia Server (Kahoot Clone) [ c++ ] </li>
            <li> Trivia Client (for the server) [ java ] </li>
        </ul>
        <br>
        upcoming:
        <br>
        next year I will write my own compiler as a part of the program.
        <br>
        more info on it will be available once it will be done.
        `}
        ghs={["https://github.com/NoamRothschild/MagshiTrivia"]}
        langs={["cpp", "java"]}
    ></EntryInfo>
    <img class="showcase" src={images.magshimim} alt="showcase of the project">
</div>

<br><br><br><br><br><br>

<div class="entry" class:mobile={isMobile}>
    <EntryInfo
        title="Misc / Abandoned Projects"
        height_override="35vw"
        text={`
        I start a lot of stuff.
        <br>
        Every time I start and stop a project mid-way, I have no project to show,
        <br>
        but who cares, because I learnt a new concept, and enriched myself.
        <br><br>
        Some of these projects include:
        <br><br>
<span style="display: block; white-space: pre-wrap;">Compiler: {
  stopped after implementing <b>pratt parsing</b>.
  it can take mathematical expressions, create an <b>AST</b> from it,
  and compile it into <b>assembly</b>.
}

Operating System: {
  set up the GDT, IDT, <b>interrupts</b>, IRQs, and <b>paging</b>, including
  making the <b>kernel higher half</b>, on x86.

  at a second attempt, I <b>jumped into long mode</b>, set up GDT again,
  made my kernel higher half and created a <b>basic page allocator</b>.
}

File Viewer: {
  a simple file server I use to transfer files locally between my devices.
  it taught me a ton about <b>HTTP<b>, <b>Flask</b> and <b>Web Servers</b> when I started out
}</span>
        `}
        ghs={[]}
        langs={["python", "zig", "nasm_compact"]}
    ></EntryInfo>
    <img class="showcase showcase-misc" src={images.misc} alt="showcase of the project">
</div>

<br><br><br><br><br><br>
<div>.</div>

<style>
    .entry {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-left: 2%;
        padding-right: 2%;
        box-sizing: border-box;
    }

    .entry.mobile {
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .showcase {
        height: 22.5vw;
        width: auto;
    }

    .showcase-asm {
        height: 33.75vw;
    }

    .showcase-misc {
        height: auto;
        width: 75vh;
    }

    .entry.mobile .showcase {
        width: 90vw;
        height: auto;
    }
</style>