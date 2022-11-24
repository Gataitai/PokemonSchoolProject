<script>
    export let text
</script>

<span class="button" on:click={() => console.log("clicked")}>
    {text}
</span>


<style>

    .button {
        background-color: var(--bg-primary);
        border-radius: .5rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 3rem;
        color: var(--text-primary);
        text-decoration: none;

        border: .23rem solid #0c0c0c;
        text-shadow: .15rem .15rem black;
        filter: drop-shadow(.35rem .35rem #0c0c0c) grayscale(100%) opacity(0.7);
    }

    .button:hover {
        cursor: pointer;
        background: var(--bg-secondary);
        color: var(--text-secondary);
        filter: drop-shadow(0 0 var(--bg-tertiary));
        transform: translateY(.35rem) translateX(.35rem);
    }
</style>