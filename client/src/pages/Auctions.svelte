<script>
    import { get } from '../util/fetch.js';
    import AuctionCard from "../components/card/AuctionCard.svelte";
    import Card from "../components/card/Card.svelte";
    import OptionsNav from "../components/OptionsNav.svelte";

    let promise = get("auctions");

</script>

<OptionsNav/>

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
        padding-left: 5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
        grid-gap: 4rem;
    }
</style>