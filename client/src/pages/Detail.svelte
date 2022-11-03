<script>
    import {auctionId} from "../stores/auction";
    import {getById} from "../util/fetch";
    import ImagesCard from "../components/card/ImagesCard.svelte";
    import DetailCard from "../components/card/DetailCard.svelte";

    let promise = getById("auctions", $auctionId);
</script>
    {#await promise}
        Loading
        {:then auction}
            <div class="description">
                <div class="item">
                    <ImagesCard auction="{auction}"/>
                </div>
                <div class="item">
                    <DetailCard auction="{auction}"/>
                </div>
            </div>

            <div class="bids">

            </div>
        {:catch error}
        <p>{error.message}</p>
    {/await}
<style>
    .description{
        position: fixed;
        padding: 4.5rem 1rem 1rem 1rem;
        top: 0;
        left: 0;

        display: flex;
        flex-direction: row;
        gap: 1rem;

        height: 100vh;
        width: 70vw;
    }

    .description  .item{
        width: 100%;
    }

    .bids{
        margin: 1rem 1rem 1rem 70vw;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        grid-gap: 1rem;
    }
</style>