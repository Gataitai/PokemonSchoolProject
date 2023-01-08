<script>
    export let message;
</script>

<div class="error">
    <div class="message">
        {message}
    </div>
</div>

<style>
    .error{
        position: absolute;
        left: 0;
        right: 0;
        top: 50vh;
        margin: auto;
        width: 20vw;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .message{
        background-color: var(--hl-primary);
        color: var(--bg-primary);
        border-radius: .5rem;
        padding: 1rem;
        display: flex;
        gap: 1rem;
    }
</style>