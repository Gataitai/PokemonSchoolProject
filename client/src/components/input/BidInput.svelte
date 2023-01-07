<script>
    import {createEventDispatcher} from 'svelte';
    import PriceIcon from "../../icons/PriceIcon.svelte";

    const dispatch = createEventDispatcher();

    export let placeholder = "00.00";

    let input;
    const dispatchBid = () => {
        dispatch('bid', {
            bid: input
        });
    }
</script>

<div class="bid-input">
    <PriceIcon/>
    <input bind:value={input} type="number" class="form-control" placeholder="{placeholder}">
    {#if input}
        <button class="bid-button bid-button-active" on:click={dispatchBid}>
            bid
        </button>
        {:else}
        <button class="bid-button bid-button-disabled">
            bid
        </button>
    {/if}
</div>


<style>
    .bid-input{
        display: flex;
        align-items: center;
        gap: .5rem;
        width: 100%;
    }

    input {
        background-color: var(--bg-tertiary);
        height: 2rem;
        width: 100%;
        border: none;
        font-size: 2rem;
        flex: 1;
        color: var(--text-primary);
        border-radius: .5rem;
    }

    input:focus {
        outline: none;
    }

    .bid-button{
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        border: none;
        color: var(--bg-primary);
        height: 3rem;
        width: 4rem;
        border-radius: .5rem;
        transition: var(--transition-speed);
        cursor: pointer;
    }

    .bid-button-active{
        background-color: #86ef86;
    }

    .bid-button-active:hover {
        background-color: #5fa45f;
    }

    .bid-button-disabled{
        background-color: var(--bg-primary);
        color: gray;
    }

    .bid-button-disabled:hover {
        cursor: auto;
    }
</style>