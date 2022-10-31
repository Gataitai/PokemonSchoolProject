<script>
    export let types;
</script>

<div class="badges">
    {#each types as type}
        <span class="badge rounded-pill {type}">{type}</span>
    {/each}
</div>

<style>
    span{
        margin-right: 3px;
    }

    .badges::after{
        content: "\a";
        white-space: pre;
    }
</style>