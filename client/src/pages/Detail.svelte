<script>
    import {getById} from "../util/fetch";
    import Card from "../components/card/PokemonCard.svelte";
    import {imgUrlId} from "../util/images";
    import TypeBadgeList from "../components/badges/TypeBadgeList.svelte";
    import DetailCard from "../components/card/DetailCard.svelte";
    import TimeIcon from "../icons/TimeIcon.svelte";
    import CountDown from "../components/CountDown.svelte";
    import ArrowUpIcon from "../icons/ArrowUpIcon.svelte";
    import HashtagIcon from "../icons/HashtagIcon.svelte";

    export let id;
    let promise = getById({
        resource: "auctions",
        id: id
    });
</script>

{#await promise}
    Loading
{:then auction}
    <div class="container">
        <div class="images">
            {id}
        </div>

        <div class="detail">
            <DetailCard pokemon={auction.pokemon}/>
            <span class="detail-info">
                <div class="detail-info-item">
                    <TimeIcon small/>
                    <CountDown date={auction.endingDate}/>
                </div>

                <div class="detail-info-item">
                    <ArrowUpIcon small/>
                    <p>Highest</p>
                    ${auction.startingPrice},-
                </div>

                <div class="detail-info-item">
                    <HashtagIcon small/>
                    <p>Bids</p>
                    {0}
                </div>
            </span>

        </div>

        <div class="bids">
            {id}
        </div>
    </div>
{:catch error}
    <p>{error.message}</p>
{/await}

<style>
    .container{
        display:flex;
        justify-content: space-between;
        gap: 2rem;
    }

    .images{
        width: 100%;
        background-color: red;
    }

    .detail{
        width: 150%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .detail-info{
        display: flex;
        justify-content: space-evenly;
        height: 1rem;
        padding: 1rem;
        flex-direction: row;
        background-color: var(--bg-secondary);
        border-radius: .5rem;
    }

    .detail-info-item{
        color: var(--text-primary);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: .3rem;
        filter: grayscale(100%);
    }

    .detail-info-item p{
        font-weight: bold;
        color: var(--hl-secondary);
    }


    .bids{
        width: 100%;
        background-color: blue;
    }

</style>