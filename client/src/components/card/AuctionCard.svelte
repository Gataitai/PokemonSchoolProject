<script>
    import {imgUrlId} from "../../util/images";
    import TypeBadgeBlock from "../badges/TypeBadgeBlock.svelte";
    export let auction;

    let countDownDate = new Date(auction.endingDate).getTime();

    let timer;

    // Update the count down every 1 second
    let x = setInterval(function() {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        timer = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    }, 1000);
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
        {timer}
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
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        white-space: nowrap;
    }

</style>