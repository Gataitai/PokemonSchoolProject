<script>
    export let types;
</script>

<div class="badges">
    {#each types as type}
        <span class="{type.toLowerCase()}">{type}</span>
    {/each}
</div>

<style>
    span{
        margin-right: 3px;
    }
</style>