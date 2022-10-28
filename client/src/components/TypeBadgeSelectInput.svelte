<script>
    import { createEventDispatcher } from 'svelte';

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

    const addBadge = (type) => {
        types = types.filter(t => t !== type);
        typesInput = [...typesInput, type]
        dispatchTypes();
    }

    const removeBadge = (type) => {
        types = [...types, type]
        typesInput = typesInput.filter(t => t !== type);
        dispatchTypes();
    }

</script>

<div class="card" id="TypeBadgeSelectInput">
    <div class="card-body">
        {#if typesInput.length <= 0}
            Pick type
        {:else}
            {#each typesInput as type}
                <span class="badge rounded-pill {type}">
                    {type}
                    <span class="closebtn" on:click={() => removeBadge(type)}>&times;</span>
                </span>
            {/each}
        {/if}
    </div>
    <div class="card-footer">
        <div id="typeBadge">
            {#each types as type}
                <span class="badge rounded-pill {type}" on:click={() => addBadge(type)}>{type}</span>
            {/each}
        </div>
    </div>
</div>


<style>
    #TypeBadgeSelectInput{
        
    }

    #typeBadge:hover{
        cursor: pointer;
    }

    .badge{
        margin-right: 3px;
    }

    .closebtn {
        padding-left: .5rem;
        float: right;
        cursor: pointer;
    }

    .closebtn:hover {
        color: #000;
    }
</style>