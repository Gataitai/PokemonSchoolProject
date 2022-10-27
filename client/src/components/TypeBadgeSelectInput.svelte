<script>
    import TypeBadge from "./TypeBadge.svelte";

    const types = [
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

    const addBadge = () => {
        typesInput = [...typesInput, "Electric"]
    }

</script>

<div class="card" id="TypeBadgeSelectInput">
    <div class="card-body">
        {#each typesInput as type}
            <TypeBadge type={type} />
        {/each}
    </div>
    <div class="card-footer">
        <div id="typeBadge">
            {#each types as type}
                <span class="badge rounded-pill {type}" on:click={addBadge}>{type}</span>
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

    span{
        margin-right: 3px;
    }
</style>