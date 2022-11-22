<script>
    import {get, getById, post} from "../util/fetch";
    import TypeBadgeList from "../components/badges/TypeBadgeList.svelte";
    import {
        imgUrl0,
        imgUrl1,
        imgUrl2,
        imgUrl3,
        imgUrl4,
        imgUrl5,
        imgUrl6,
        imgUrl7,
        imgUrl8,
        imgUrl9
    } from "../util/images.js";
    import Modal from "../components/Modal.svelte";
    import NumberInput from "../components/input/NumberInput.svelte";

    let modalOn = false;

    let bidPrice = 0;

    const toggleBidInput = () => {
        modalOn = !modalOn;
    }

    const updateBidPrice = (event) => {
        bidPrice = event.detail.number
    }

    export let id;
    let promise = getById({
        resource: "auction",
        id: id
    });

</script>
    <div class="detail-page">
        {#await promise}
            Loading
            {:then auction}
            <div class="card">
                <div class="card-header">
                    Pictures
                </div>
                <div class="card-body photo-grid">
                    <img src={imgUrl2(auction.pokemon.name)} alt="pokemon">
                    <img src={imgUrl3(auction.pokemon.name)} alt="pokemon">
                    <img src={imgUrl4(auction.pokemon.name)} alt="pokemon">
                    <img src={imgUrl5(auction.pokemon.name)} alt="pokemon">
                    <img src={imgUrl6(auction.pokemon.name)} alt="pokemon">
                    <img src={imgUrl7(auction.pokemon.name)} alt="pokemon">
                    <img src={imgUrl8(auction.pokemon.name)} alt="pokemon">
                    <img src={imgUrl9(auction.pokemon.name)} alt="pokemon">
                    <img src={imgUrl0(auction.pokemon.name)} alt="pokemon">
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    Details
                </div>
                <img src={imgUrl1(auction.pokemon.name)} alt="pokemon">
                <div class="card-body">
                    <h1 class="card-title">{auction.pokemon.name}</h1>
                    <h6 class="card-subtitle mb-2 text-muted    ">#{auction.pokemon.id}</h6>

                    <TypeBadgeList types={auction.pokemon.typeList}/>

                    <div class="bid-wrapper">
                        <div class="bid-stats">
                            <div>
                                <i class="bi bi-clock"></i>Ending date <b>{new Date(auction.endingDate).toLocaleDateString("en-US")}</b>
                            </div>

                            <div>
                                <i class="bi bi-arrow-up"></i>Highest bid <b>$100</b>
                            </div>

                            <div>
                                <i class="bi bi-hash"></i>Bids <b>4</b>
                            </div>

                        </div>
                        <button type="button" class="btn btn-success" on:click={toggleBidInput}>
                            Place bid
                        </button>
                    </div>
                </div>
            </div>
        {:catch error}
            <p>{error.message}</p>
        {/await}

        <div class="card bids">
            <div class="card-header">
                Bids
            </div>
            <div class="card-body">
                {#each bids as bid}
                    <div class="card bid">
                        <div class="card-body">
                            {bid.bid}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>

    <Modal on:saved={saveBid} state="{modalOn}" saveColor="btn-success" saveText="Place bid">
        <NumberInput on:numberTyped={updateBidPrice}/>
    </Modal>
<style>
W
</style>