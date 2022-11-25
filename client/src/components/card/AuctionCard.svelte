<script>
    import {imgUrlId} from "../../util/images";
    import TypeBadgeBlock from "../badges/TypeBadgeBlock.svelte";
    import CountDown from "../CountDown.svelte";
    import Button from "../buttons/Button.svelte";
    export let auction;

</script>

<div class="card">
    <div class="card-body">
        <div class="card-title">
            <h4>{auction.pokemon.name}</h4>
        </div>

        <div class="card-image {auction.pokemon.typeList[0].toLowerCase() + '-pastel'}">
            <img src={imgUrlId(auction.pokemon.id)} alt="pokemon">
        </div>

        <div class="card-types">
            <TypeBadgeBlock types={auction.pokemon.typeList}/>
        </div>

        <a href="detail/{auction.id}" class="card-button">
            ${auction.startingPrice},-
        </a>
    </div>
    <div class="card-footer">
        <CountDown date={auction.endingDate}/>
    </div>

    <div class="card-button-background {auction.pokemon.typeList[0].toLowerCase() + '-pastel'}">
    </div>
</div>


<style>
    .card{
        color: var(--text-primary);
        font-weight: bold;
    }

    .card-body{
        display: grid;
        grid-template-columns: 4rem 1fr;
        grid-template-rows: 1fr 4rem;
    }

    .card-title{
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-left-radius: .5rem;
        background-color: var(--bg-secondary);
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

    .card-button{
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
        letter-spacing: 0.1ch;
        color: var(--text-secondary);
        text-shadow: .1rem .1rem black;
    }

    .card-button:hover{
        cursor: pointer;
        color: #ffd5ff;
        animation: filter-animation 1s infinite;
    }

    .card-button-background{
        z-index: -100;
        position: relative;
        border-radius: 1rem;
        transform: translateY(-100%);
        top: -5%;
        left: 0;
        height: 90%;
        width: 100%;
        filter: opacity(0.7);
    }

    .card-footer{
        border-radius: 0 0 .5rem .5rem;
        background-color: var(--bg-secondary);
        height: 2rem;
        width: 100%;
        display: flex;
        align-items: center;
        text-align: center;
        white-space: nowrap;
        font-size: .8rem;
    }

    @keyframes filter-animation {
        0% {
            filter: hue-rotate(0deg);
        }

        50% {
            filter: hue-rotate(180deg);
        }

        100% {
            filter: hue-rotate(360deg);
        }
    }

</style>
