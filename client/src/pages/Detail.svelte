<script>
    import {getById} from "../util/fetch";
    import DetailCard from "../components/card/DetailCard.svelte";
    import TimeIcon from "../icons/TimeIcon.svelte";
    import CountDown from "../components/CountDown.svelte";
    import ArrowUpIcon from "../icons/ArrowUpIcon.svelte";
    import HashtagIcon from "../icons/HashtagIcon.svelte";
    import AboutCard from "../components/card/AboutCard.svelte";

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
                    <p>Ending</p>
                    <CountDown date={auction.endDate}/>
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
            <button class="bid-button">
                Bid now
            </button>
            <AboutCard pokemon={auction.pokemon}/>
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
        background-color: var(--bg-primary);
    }

    .detail{
        width: 150%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .bids{
        width: 100%;
        background-color: var(--bg-primary);
    }


    .bid-button{
        font-weight: bold;
        color: var(--bg-primary);
        height: 3rem;
        border-radius: .5rem;
        border: none;
        background-color: #86ef86;
        transition: var(--transition-speed);
    }

    .bid-button:hover{
        cursor: pointer;
        background-color: #5fa45f;
    }

    .detail-info{
        display: flex;
        justify-content: space-between;
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

    .detail-about{
        background-color: var(--bg-primary);
    }

</style>