<script>
    import { createEventDispatcher } from 'svelte';
    import TypeBadgeList from "../badges/TypeBadgeList.svelte";
    import TypeBadge from "../badges/TypeBadge.svelte";
    import TypeBadgeGrid from "../badges/TypeBadgeGrid.svelte";
    const dispatch = createEventDispatcher();

    let types = [
        "Normal",
        "Fighting",
        "Flying",
        "Poison",
        "Ground",
        "Rock",
        "Bug",
        "Ghost",
        "Steel",
        "Fire",
        "Water",
        "Grass",
        "Electric",
        "Psychic",
        "Ice",
        "Dragon",
        "Dark",
        "Fairy"
    ]

    let typesInput = [
    ]

    const dispatchTypes = () => {
        dispatch('typesSelected', {
            types: typesInput
        });
    }

    const addBadge = (event) => {
        const type = event.detail.type;
        typesInput = [...typesInput, type]
        dispatchTypes();
    }

    const updateList = (event) => {
        typesInput = event.detail.types;
    }
</script>

<div class="badge-input-container">
    <div class="type-input">
        {#if typesInput.length === 0}
            <input type="text" disabled="disabled" placeholder="Choose type">
        {:else}
            <TypeBadgeList types="{typesInput}" removable on:newTypeList={updateList}/>
        {/if}
    </div>

    <TypeBadgeGrid types="{types}" on:typeClicked={addBadge}/>

</div>

<style>
    .badge-input-container{
        margin: 0 1rem 2rem 1rem;
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .type-input{
        height: 6rem;
        display: flex;
        align-items: center;
        font-size: 2rem;
        color: var(--text-muted);
    }

    input[type=text] {
        background-color: var(--bg-tertiary);
        width: 100%;
        height: 4rem;
        border: none;
        font-size: 2rem;
        flex: 1;
        color: var(--text-primary);
        border-radius: .5rem;
    }

    input:focus {
        outline: none;
    }
</style>

