<script>
    export let text
</script>

<span class="button" on:click={() => console.log("clicked")}>
    {text}
</span>


<style>

    .button {
        width: 100%;
        margin: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .button:hover {
        cursor: pointer;
        color: var(--text-secondary);
    }
</style>