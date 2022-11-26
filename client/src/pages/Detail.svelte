<script>
    import {getById} from "../util/fetch";
    import Card from "../components/card/PokemonCard.svelte";
    import {imgUrlId} from "../util/images";
    import TypeBadgeList from "../components/badges/TypeBadgeList.svelte";

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

            <img class="{auction.pokemon.typeList[0].toLowerCase() + '-pastel'}" src={imgUrlId(auction.pokemon.id)} alt="pokemon">
            <div class="detail-about">
                <h1>#{auction.pokemon.id} {auction.pokemon.name}</h1>
                <TypeBadgeList types={auction.pokemon.typeList}/>
                <span class="detail-time-price">
                    test
                </span>
            </div>

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
    }

    .detail img{
        border-radius: .5rem 0 0 .5rem;
        width: 20vw;
        object-fit: cover;
    }

    .detail-about{
        display: flex;
        flex-direction: column;
        background-color: var(--bg-primary);
        border-radius: .5rem;
        padding: 2rem;
        width: 100%;
    }

    .detail-about h1{
        color: var(--text-primary);
        margin: 0 0 1rem 0;
        padding: 0;
    }

    .detail-time-price{
        display: flex;
        margin-top: auto;
        background-color: var(--bg-secondary);
        height: 4rem;
        border-radius: .5rem;
    }


    .bids{
        width: 100%;
        background-color: blue;
    }

</style>