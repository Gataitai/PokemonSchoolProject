<script>
    import { createEventDispatcher } from 'svelte';
    import TypeBadgeList from "../badges/TypeBadgeList.svelte";
    import TypeButton from "../buttons/TypeButton.svelte";
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
        typesInput = [...typesInput, type];
        twoBadgeCheck();
        dispatchTypes();
    }

    const removeBadge = (event) => {
        types[event.detail.deleted].toggle();
        typesInput = event.detail.types;
        twoBadgeCheck();
        dispatchTypes();
    }

    const twoBadgeCheck = () => {
        if(typesInput.length >= 2){
            const indexSet = new Set(typesInput);
            const toBeToggledButtons = types.filter((value) => !indexSet.has(value));
            for (let i = 0; i < toBeToggledButtons.length; i++) {
                types[toBeToggledButtons[i]].toggle();
            }
        }
    }
</script>

<div class="badge-input-container">
    <div class="type-input">
        {#if typesInput.length === 0}
            <input type="text" disabled="disabled" placeholder="Choose type">
        {:else}
            <TypeBadgeList types="{typesInput}" removable on:updatedTypeList={removeBadge}/>
        {/if}
    </div>

    <div class="buttons">
        {#each types as type}
            <TypeButton type={type} bind:this={types[type]} on:typeClicked={addBadge}/>
        {/each}
    </div>

</div>

<style>
    .badge-input-container{
        display: flex;
        gap: 2rem;
        width: 100%;
        flex-direction: column;
    }

    .type-input{
        display: flex;
        height: 2rem;
        align-items: center;
        font-size: 2rem;
        color: var(--text-muted);
    }

    input[type=text] {
        background-color: var(--bg-tertiary);
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

    .buttons{
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(6, 1fr);
    }

    @media only screen and (max-width: 1200px) {
        .buttons{
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
        }
    }

    @media only screen and (max-width: 600px) {
        .buttons{
            grid-template-columns: 1fr;
        }
    }
</style>

