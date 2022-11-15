<script>
    import { createEventDispatcher } from 'svelte';
    import TypeBadgeList from "../TypeBadgeList.svelte";

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

<!--{#if typesInput.length <= 0}-->
<!--    Pick type-->
<!--{:else}-->
<!--    {#each typesInput as type}-->
<!--                <span class="badge rounded-pill {type.toLowerCase()}">-->
<!--                    {type}-->
<!--                    <span class="closebtn" on:click={() => removeBadge(type)}>&times;</span>-->
<!--                </span>-->
<!--    {/each}-->
<!--{/if}-->

<!--{#each types as type}-->
<!--    <span class="badge rounded-pill {type.toLowerCase()}" on:click={() => addBadge(type)}>{type}</span>-->
<!--{/each}-->
    <TypeBadgeList types="{types}" closable/>
<style>

    .badge{
        cursor: pointer;
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