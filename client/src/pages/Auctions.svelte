<script>
    import { get } from '../util/fetch.js';
    import AuctionCard from "../components/card/AuctionCard.svelte";
    import Card from "../components/card/Card.svelte";

    let promise = get("auctions");

</script>


<div class="items">
    {#await promise}
        Loading
    {:then auctions}
        {#each auctions as auction}
            <Card pokemon={auction.pokemon}/>
        {/each}
    {:catch error}
        <p>{error.message}</p>
    {/await}
</div>

<style>

    .items{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        grid-gap: 4rem;
    }
</style>