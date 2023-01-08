<script>
    import {token} from '../stores/auth.js';
    import TextInput from "../components/input/TextInput.svelte";
    import router from 'page';
    import AuctionCard from "../components/card/AuctionCard.svelte";

    let auctionId;
    let auction;
    let error;

    const fetchAuction = async (event) => {
        const response = await fetch("http://localhost:3001/auctions/"+event.detail.text);
        const data = await response.json();
        if(data.error){
            error = data.error;
            auctionId = null;
            auction = null;
        }else{
            auctionId = event.detail.text;
            auction = data.auction;
            error = '';
        }
    }

    async function remove() {
        await fetch('http://localhost:3001/auctions/' + auctionId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + $token
            }
        });
        router("/detail/" + auctionId);
    }

</script>

<form class="form" on:submit|preventDefault={remove}>
    <div class="field">
            <span class="name">
                Auction id
            </span>
        <TextInput placeholder="Paste in auction id" on:textTyped={fetchAuction}/>
    </div>

    {#if auction}
        <div class="auction">
            <AuctionCard auction={auction}/>
        </div>
        <button class="submit" type="submit">Delete auction</button>
    {/if}

    {#if error}
        <div class="error">
            {error}
        </div>
    {/if}
</form>

<style>
    .form{
        position: absolute;
        left: 0;
        right: 0;
        top: 50vh;
        margin: auto;
        width: 30vw;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .field{
        color: var(--text-primary);
        border-radius: .5rem;
        padding: 1rem;
        display: flex;
        gap: 1rem;
        filter: grayscale(100%);
    }

    .name{
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .auction{
        width: 10vw;
    }

    .submit{
        font-weight: bold;
        color: var(--bg-primary);
        height: 3rem;
        border-radius: .5rem;
        border: none;
        background-color: var(--hl-primary);
        transition: var(--transition-speed);
    }

    .submit:hover{
        cursor: pointer;
        background-color: var(--hl-secondary);
    }

    .error{
        border-radius: .5rem;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--bg-primary);
        background-color: var(--hl-secondary);
    }
</style>



