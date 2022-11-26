<script>
    import {imgUrlId} from "../../util/images.js";
    import TypeBadgeList from "../badges/TypeBadgeList.svelte";

    export let pokemon;
</script>

<div class="container">
    <img class="{pokemon.typeList[0].toLowerCase() + '-pastel'}" src={imgUrlId(pokemon.id)} alt="pokemon">
    <div class="card">
        <h1>#{pokemon.id} {pokemon.name}</h1>
        <TypeBadgeList types={pokemon.typeList}/>
    </div>
</div>

<style>
    .container{
        display: grid;
        grid-template-columns: 10rem 1fr;
        grid-template-rows: 1fr;
        width: 100%;
    }

    img{
        width: 100%;
        border-radius: .5rem 0 0 .5rem;
    }

    .card{
        background-color: var(--bg-primary);
        border-radius: 0 .5rem .5rem 0;
        padding: 1rem;
    }

    .card h1{
        margin: 0 0 1rem 0;
        color: var(--text-primary);
    }
</style>

