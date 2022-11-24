<script>
    import {imgUrlId} from "../../util/images";
    import TypeBadgeList from "../badges/TypeBadgeList.svelte";
    import TypeBadgeBlock from "../badges/TypeBadgeBlock.svelte";
    import Button from "../buttons/Button.svelte";
    export let auction;
</script>

<div class="card">
    <div class="card-title">
        <h4>{auction.pokemon.name}</h4>
    </div>

    <div class="card-image {auction.pokemon.typeList[0].toLowerCase() + '-pastel'}">
        <img src={imgUrlId(auction.pokemon.id)} alt="pokemon">
    </div>

    <div>
        <TypeBadgeBlock types={auction.pokemon.typeList}/>
    </div>

    <div class="card-button {auction.pokemon.typeList[0].toLowerCase() + '-pastel'}">

    </div>

    <div class="card-time">
    </div>
</div>

<style>
    .card{
        background-color: var(--bg-secondary);
        border-radius: .5rem;
        display: grid;
        grid-template-columns: 4rem 1fr;
        grid-template-rows: 1fr 4rem 2rem;
    }

    .card-title{
        color: var(--text-primary);
        text-align: center;
        writing-mode: vertical-rl;
        font-size: 1.5rem;
        line-height: 0;
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

    .card-button{
        display: flex;
        padding: 1rem 2rem 2rem 2rem;
        align-items: center;
        filter: opacity(0.5);
    }

    .card-time{
    }

</style>