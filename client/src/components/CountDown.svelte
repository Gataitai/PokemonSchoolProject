<script>
    export let date;
</script>

{#if new Date(date) > new Date()}
    <p>{new Date(date).toLocaleString()}</p>
{:else}
    <p>Ended</p>
{/if}

<style>
    p{
        width: 100%;
    }
</style>


