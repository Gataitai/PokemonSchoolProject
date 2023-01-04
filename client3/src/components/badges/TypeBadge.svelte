<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    import CloseIcon from "../../icons/CloseIcon.svelte";

    export let closable;
    export let clickable;
    export let type;

    const dispatchTypeClosed = (type) => {
        dispatch('typeClosed', {
            type: type
        });
    }

    const dispatchTypeClicked = (type) => {
        dispatch('typeClicked', {
            type: type
        });
    }
</script>

{#if closable}
    <div class="badge {type.toLowerCase()}">
        {type}
        <div on:click={() => dispatchTypeClosed(type)}>
            <CloseIcon small/>
        </div>
    </div>
{:else if clickable}
    <span class="badge clickable {type.toLowerCase()}" on:click={() => dispatchTypeClicked(type)}>{type}</span>
{:else}
    <span class="badge {type.toLowerCase()}">{type}</span>
{/if}

<style>
    .badge{
        display: flex;
        height: 1rem;
        gap: .2rem;
        border-radius: .2rem;
        padding: .2rem;
        font-size: .8rem;
        font-weight: bold;
        color: white;
    }
    
    .clickable:hover{
        cursor: pointer;
    }
</style>