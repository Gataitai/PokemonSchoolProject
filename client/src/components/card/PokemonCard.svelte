<script>
    import {imgUrlId} from "../../util/images";
    import TypeBadgeList from "../badges/TypeBadgeList.svelte";
    export let pokemon;
</script>

<div class="card">
    <div class="card-title">
        <h4>{pokemon.name}</h4>
    </div>

    <div class="card-image {pokemon.typeList[0].toLowerCase() + '-pastel'}">
        <img src={imgUrlId(pokemon.id)} alt="pokemon">
    </div>

    <div class="card-id">
        <p>{"#"+pokemon.id}</p>
    </div>

    <div class="card-badge-list">
        <TypeBadgeList types={pokemon.typeList}/>
    </div>
</div>


<style>
    .card{
        background-color: var(--bg-secondary);
        border-radius: .5rem;
        display: grid;
        grid-template-columns: 4rem 1fr;
        grid-template-rows: 1fr 4rem;
        transition: var(--transition-speed);
    }

    .card:hover{
        transform: scale(1.02);
    }

    .card-title{
        color: var(--text-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        writing-mode: vertical-rl;
        font-size: 1.5rem;
        letter-spacing: 0.1ch;
    }

    .card-image{
        border-top-right-radius: .5rem;
        display: flex;
        align-items: center;
    }

    .card-image img{
        width: 100%;
    }

    .card-id{
        text-align: center;
        color: var(--text-muted);
        font-weight: bold;
    }

    .card-id p {
        line-height: 2rem;
    }

    .card-badge-list{
        background-color: var(--bg-primary);
        border-bottom-right-radius: .5rem;
        display: flex;
        padding: 1rem;
        align-items: center;
    }

</style>