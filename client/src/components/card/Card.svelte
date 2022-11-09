<script>
    import {imgUrlId} from "../../util/images";
    import TypeBadgeList from "../TypeBadgeList.svelte";
    export let pokemon;
</script>

<div class="card">
    {#if pokemon}
        <div class="card-body">
            <h4 class="card-title">{pokemon.name}</h4>
            <img src={imgUrlId(pokemon.id)} class="card-img-top" alt="pokemon">
        </div>
        <div class="card-footer">
            <p class="pokemon-id">{"#"+pokemon.id}</p>
            <TypeBadgeList types={pokemon.typeList}/>
        </div>
    {/if}
</div>


<style>
    .card{
        background-color: var(--bg-primary);
        transition: all 0.2s ease-out;
    }

    .card:hover{
        transform: scale(1.02);
    }

    .card-body{
        display: flex;
    }

    .card-footer{
        display: flex;
        justify-content: center;
    }

    .card-title{
        writing-mode: vertical-rl;
    }
</style>