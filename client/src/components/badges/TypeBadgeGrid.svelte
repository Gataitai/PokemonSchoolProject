<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let types;

    const dispatchTypeClicked = (type) => {
        dispatch('typeClicked', {
            type: type
        });
    }
</script>

<div class="badges">
    {#each types as type}
        <span class="badge {type.toLowerCase()}" on:click={() => dispatchTypeClicked(type)}>{type}</span>
    {/each}
</div>

<style>
    .badges{
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(6, 1fr);
    }

    .badge{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: .5rem;
        border: .23rem solid #0c0c0c;
        height: 3rem;
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--text-secondary);
        text-shadow: .15rem .15rem black;
        filter: drop-shadow(.35rem .35rem #0c0c0c);
    }

    .badge:hover{
        cursor: pointer;
        filter: drop-shadow(0 0 var(--bg-tertiary));
        transform: translateY(.35rem) translateX(.35rem);
    }

    @media only screen and (max-width: 1700px) {
        .badges{
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
        }
    }

    @media only screen and (max-width: 800px) {
        .badges{
            grid-template-columns: 1fr;
        }
    }
</style>