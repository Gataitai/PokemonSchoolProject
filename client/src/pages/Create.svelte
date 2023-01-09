<script>
    import {token} from '../stores/auth.js';
    import TextInput from "../components/input/TextInput.svelte";
    import router from 'page';

    let startingPrice = 100;
    let pokemonId = 25;
    let endDate = new Date().toISOString();
    let error;

    const updateStartingPrice = (event) => {
        if(event.detail.text === "EMPTY"){
            startingPrice = '';
        }else{
            startingPrice = event.detail.text;
        }
        error = '';
    }

    const updatePokemonId = (event) => {
        if(event.detail.text === "EMPTY"){
            pokemonId = '';
        }else{
            pokemonId = event.detail.text;
        }
        error = '';
    }

    const updateEndDate = (event) => {
        if(event.detail.text === "EMPTY"){
            endDate = '';
        }else{
            endDate = event.detail.text;
        }
        error = '';
    }

    async function create() {
        if(startingPrice === 'EMPTY' || !startingPrice){
            error = "Starting price is not filled in!"
            return;
        }
        if(pokemonId === 'EMPTY' || !pokemonId){
            error = "Fill in a pokemon Id"
            return;
        }
        if(endDate === 'EMPTY' || !endDate){
            error = "You have to fill in an end date!"
            return;
        }
        const response = await fetch('http://localhost:3001/auctions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer ' + $token
            },
            body: JSON.stringify({ startingPrice, pokemonId, endDate})
        });
        const data = await response.json();
        if (data.error) {
            error = data.error;
        } else {
            router("/detail/"+data.auction.id);
        }
    }

</script>

<form class="form" on:submit|preventDefault={create}>

    <div class="field">
        <span class="name">
            Starting price in $:
        </span>
        <TextInput input={startingPrice} placeholder="Starting price" on:textTyped={updateStartingPrice}/>
    </div>

    <div class="field">
        <span class="name">
            Pokemon id:
        </span>
        <TextInput input={pokemonId} placeholder="Pokemon id" on:textTyped={updatePokemonId}/>
    </div>

    <div class="field">
        <span class="name">
            End date:
        </span>
        <TextInput input={endDate} placeholder="End date" on:textTyped={updateEndDate}/>
    </div>

    <button class="submit" type="submit">Create auction</button>

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

    .submit{
        font-weight: bold;
        color: var(--bg-primary);
        height: 3rem;
        border-radius: .5rem;
        border: none;
        background-color: #86ef86;
        transition: var(--transition-speed);
    }

    .submit:hover{
        cursor: pointer;
        background-color: #5fa45f;
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



