<script>
    export let types;
</script>

<div class="type-block">
    {#if types.length === 1}
        <div class="type-column {types[0]}">
            {types[0]}
        </div>
    {:else}
        {#each types as type}
            <div class="type-row {type}">
                {type}
            </div>
        {/each}
    {/if}
</div>

<style>
    .type-block{
        display: flex;
    }

    .type-row{
        flex-direction: row;
    }

    .type-column{
        flex-direction: column;
    }
</style>