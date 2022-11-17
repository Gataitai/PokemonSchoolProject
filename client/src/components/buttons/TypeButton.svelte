<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let state = false;

    export let type;

    export const toggle = () => {
        state = !state;
    }

    const dispatchTypeClicked = (type) => {
        toggle();
        dispatch('typeClicked', {
            type: type
        });
    }
</script>

{#if state}
    <span class="button clicked">{type}</span>
    {:else}
    <span class="button {type.toLowerCase()}" on:click={() => dispatchTypeClicked(type)}>{type}</span>
{/if}



<style>


    .button{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: .5rem;
        height: 3rem;
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--text-secondary);
        border: .23rem solid #0c0c0c;
        text-shadow: .15rem .15rem black;
        filter: drop-shadow(.35rem .35rem #0c0c0c);
    }

    .clicked{
        background: repeating-linear-gradient(
                -55deg,
                var(--bg-primary),
                var(--bg-primary) 10px,
                var(--bg-tertiary) 10px,
                var(--bg-tertiary) 20px
        );
        cursor: default !important;
        filter: drop-shadow(0 0 var(--bg-tertiary));
        transform: translateY(.35rem) translateX(.35rem);
    }

    .button:hover{
        cursor: pointer;
        filter: drop-shadow(0 0 var(--bg-tertiary));
        transform: translateY(.35rem) translateX(.35rem);
    }
</style>