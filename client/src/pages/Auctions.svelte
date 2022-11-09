<script>
    import { get } from '../util/fetch.js';
    import AuctionCard from "../components/card/AuctionCard.svelte";

    let promise = get("auctions");

</script>


<div class="items">
    {#await promise}
        Loading
    {:then auctions}
        {#each auctions as auction}
            <AuctionCard auction={auction}/>
        {/each}
    {:catch error}
        <p>{error.message}</p>
    {/await}
</div>

<style>
    .filter{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 20%;
    }

    .items{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        grid-gap: 1rem;
    }
</style>