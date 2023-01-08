<script>
    import DetailCard from "../components/card/DetailCard.svelte";
    import TimeIcon from "../icons/TimeIcon.svelte";
    import CountDown from "../components/CountDown.svelte";
    import ArrowUpIcon from "../icons/ArrowUpIcon.svelte";
    import HashtagIcon from "../icons/HashtagIcon.svelte";
    import AboutCard from "../components/card/AboutCard.svelte";
    import {onMount} from "svelte";
    import Modal from "../components/Modal.svelte";
    import router from "page";
    import BidInput from "../components/input/BidInput.svelte";
    import {token} from "../stores/auth";
    import CloseIcon from "../icons/CloseIcon.svelte";
    import jwt from "jwt-decode";
    import Error from "../components/Error.svelte";

    export let id;
    let auction;
    let error;

    onMount(async () => {
        await getAuction();
    });

    const getAuction = async () => {
        const response = await fetch("http://localhost:3001/auctions/"+id);
        const data = await response.json();
        console.log(data)
        if(data.error){
            error = data.error;
        }
        auction = data.auction;
    }

    const postBid = async (event) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + $token
            },
            body: JSON.stringify({biddingPrice: event.detail.bid})
        }
        const response = await fetch("http://localhost:3001/auctions/"+id+"/bids",options)
        const data = await response.json();
        if(data.error){
            error = data.error;
            auction = null;
        }
        else{
            auction.bids = [data.bid, ...auction.bids];
            bidModal.toggle();
        }
    }

    const deleteBid = async (bidId) => {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + $token
            }
        }
        await fetch("http://localhost:3001/auctions/"+id+"/bids/"+bidId,options)
        await getAuction();
    }

    let bidModal;
</script>

{#if auction}
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
                    {#if auction.bids.length === 0}
                        ${auction.startingPrice},-
                        {:else}
                        ${Math.max(...auction.bids.map(bid => bid.biddingPrice))},-
                    {/if}
                </div>

                <div class="detail-info-item">
                    <HashtagIcon small/>
                    <p>Bids</p>
                    {auction.bids.length}
                </div>
            </span>
            {#if $token}
                <button class="bid-button" on:click={() => bidModal.toggle()}>
                    Bid now
                </button>
                {:else}
                <button class="bid-button" on:click={() => router('/login')}>
                    Bid now
                </button>
            {/if}
            <AboutCard pokemon={auction.pokemon}/>
        </div>

        <div class="bids">
            {#each auction.bids as bid}
                <div class="bid">
                    {bid.user}: ${bid.biddingPrice}
                    {#if $token && jwt($token).username === bid.user}
                        <div class="close" on:click={() => deleteBid(bid.id)}>
                            <CloseIcon small/>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
{/if}

{#if error}
    <Error message={error}/>
{/if}

<Modal bind:this={bidModal} title="Bid">
    <BidInput on:bid={postBid}/>
</Modal>

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
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .bid{
        width: 15rem;
        display: flex;
        align-items: center;
        background-color: var(--bg-primary);
        color: var(--text-secondary);
        border-radius: .5rem;
        padding: 1rem;
    }

    .close{
        margin-left: auto;
        display: flex;
        align-items: center;
        color: var(--text-primary);
    }

    .close:hover{
        color: var(--hl-primary);
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