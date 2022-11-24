<script>
    export let types;
</script>

<div class="type-block">
    {#if types.length === 1}
        <div class="type {types[0].toLowerCase() + '-pastel'}">
            <p>{types[0]}</p>
        </div>
    {:else}
        {#each types as type}
            <div class="types {type.toLowerCase() + '-pastel'}">
                <p>{type}</p>
            </div>
        {/each}
    {/if}
</div>

<style>
    .type-block{
        display: flex;
        width: 4rem;
        height: 4rem;
        flex-direction: column;
        font-size: .8rem;
        font-weight: bold;
    }

    .type{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 4rem;
        border: none;
        text-shadow: none;
    }

    .types{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2rem;
    }

    p{
        color: white;
        text-shadow: .1rem .1rem black;
    }

</style>