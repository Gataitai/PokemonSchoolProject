<script>
    import {imgUrlId} from "../../util/images.js";
    import TypeBadgeList from "../badges/TypeBadgeList.svelte";

    export let pokemon;
</script>

<div class="container">
    <img class="{pokemon.typeList[0].toLowerCase() + '-pastel'}" src={imgUrlId(pokemon.id)} alt="pokemon">
    <div class="card">
        <span>#{pokemon.id}</span>
        <h1>{pokemon.name}</h1>
        <div class="type-list">
            <TypeBadgeList types={pokemon.typeList}/>
        </div>
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
        display: flex;
        flex-direction: column;
        background-color: var(--bg-primary);
        border-radius: 0 .5rem .5rem 0;
        padding: 1rem;
    }

    .card span{
        height: 1rem;
        font-weight: bold;
        filter: grayscale(100%);
        color: var(--hl-secondary);
    }

    .card h1{
        margin: 0;
        color: var(--text-primary);
    }

    .type-list{
        margin-top: auto;
    }
</style>

