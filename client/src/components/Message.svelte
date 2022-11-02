<script>
    export let message;
    export let error;
    export let warning;
</script>


    {#if message}
        <div class="card message">
            <div class="card-body">
                {message}
            </div>
        </div>
    {/if}

    {#if error}
        <div class="card error">
            <div class="card-body">
                {error}
            </div>
        </div>
    {/if}

    {#if warning}
        <div class="card warning">
            <div class="card-body">
                {warning}
            </div>
        </div>
    {/if}


<style>
    .card{
        position: fixed;
        right: 0; bottom: 0;
        margin: 2rem;
        z-index: 100;
        color: white;
    }

    .message{
        background-color: #198754;
    }

    .error{
        background-color: #dc3545;
    }

    .warning{
        background-color: #ffc107;
        color: black;
    }
</style>