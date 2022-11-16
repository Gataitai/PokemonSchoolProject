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
    import {payload, token} from "../stores/auth";

    const bids = [
        {
            bid:"100"
        },
        {
            bid:"100"
        }
    ]

    let modalOn = false;

    let bidPrice = 0;

    const toggleBidInput = () => {
        modalOn = !modalOn;
    }

    const updateBidPrice = (event) => {
        bidPrice = event.detail.number
    }

    const saveBid = (id) => {
        const bid = {
            auctionId: id,
            userId: $payload.userId,
            biddingPrice: bidPrice
        }

        const params = {
            resource: "bids",
            object: bid,
            token: $token
        }
        post(params)
        console.log("bid " + bidPrice);
    }

    export let params;
    let promise = getById("auctions", params.id);
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
    .card{
        width: 100%;
    }

    .detail-page{
        padding: 1rem;
        display: flex;
        gap: 1rem;
    }

    .bi{
        margin-right: .4rem;
    }
    .bids{
        height: 82vh;
        overflow-y: scroll;
    }

    .bid{
        margin-bottom: 1rem;
    }

    .bid-wrapper{
        display: flex;
        gap: .5rem;
        width: 100%;
        margin-top: 1rem;
    }
    .bid-stats{
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: space-around;
        border-radius: 0.3rem;
        background-color: #efefef;
    }
    .photo-grid{
        display: grid;
        align-items: center;
        gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
    }

    .photo-grid img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: .5rem;
        transition: all 0.2s ease-out;
    }

    .photo-grid img:hover{
        transform: scale(1.02);
    }
</style>