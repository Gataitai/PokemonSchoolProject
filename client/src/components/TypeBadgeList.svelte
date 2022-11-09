<script>
    export let types;
</script>

<div class="badges">
    {#each types as type}
        <span class="badge {type.toLowerCase()}">{type}</span>
    {/each}
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
</style>