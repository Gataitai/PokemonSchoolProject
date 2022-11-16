<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import TypeBadge from "./TypeBadge.svelte";

    export let types;
    export let removable;
    export let clickable;

    const dispatchUpdatedList = (type) => {
        types = types.filter(e => e !== type);
        dispatch('newTypeList', {
            types: types
        });
    }

    const dispatchTypeClicked = (type) => {
        dispatch('typeClicked', {
            type: type
        });
    }
</script>

<div class="badges">
    {#if removable}
        {#each types as type}
            <TypeBadge type="{type}" closable on:typeClosed={() => dispatchUpdatedList(type)}/>
        {/each}
    {:else if clickable}
        {#each types as type}
            <TypeBadge type="{type}" clickable on:typeClicked={() => dispatchTypeClicked(type)}/>
        {/each}
    {:else}
        {#each types as type}
            <TypeBadge type="{type}"/>
        {/each}
    {/if}
</div>

<style>
    .badges{
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;
    }
</style>