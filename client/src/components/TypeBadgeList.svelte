<script>
    import CloseIcon from "../icons/CloseIcon.svelte";

    export let types;
    export let closable;
</script>

<div class="badges">
    {#if closable}
            {#each types as type}
                <span class="badge {type.toLowerCase()}">
                    {type}
                    <CloseIcon type="{type}" small/>
                </span>
            {/each}
        {:else}
            {#each types as type}
                <span class="badge {type.toLowerCase()}">{type}</span>
            {/each}
    {/if}

</div>

<style>
    .badges{
        display: flex;
        gap: .5rem;
    }

    .badge{
        border-radius: .2rem;
        padding: .2rem;
        font-size: .8rem;
        font-weight: bold;
        color: white;
    }

    svg{
        width: .1rem;
        height: .1rem;
    }
</style>