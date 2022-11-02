<script>
    import { get } from '../util/fetch.js';
    import TypeBadgeSelectInput from "../components/input/TypeBadgeSelectInput.svelte";
    import RangeInput from "../components/input/RangeInput.svelte";
    import TextInput from "../components/input/TextInput.svelte";
    import AuctionCard from "../components/card/AuctionCard.svelte";

    let promise = get("auctions");

    const updatePokemonByTypes = (event) => {
        const types = event.detail.types;
        let queryParam = "types="
        for(let type of types){
            queryParam+= type + ","
        }
        promise = get("auctions", queryParam);
    }

    const updatePokemonByPrice = (event) => {
        const price = event.detail.number
        const queryParam = "price=" + price;
        promise = get("auctions", queryParam);
    }

    const updatePokemonByName = (event) => {
        const name = event.detail.text;
        const queryParam = "name=" + name;
        promise = get("auctions", queryParam);
    }

</script>

<div class="filter">
    <TextInput on:textTyped={updatePokemonByName}/>

    <TypeBadgeSelectInput on:typesSelected={updatePokemonByTypes}/>

    <RangeInput on:rangeSelected={updatePokemonByPrice}>
        Price
    </RangeInput>
</div>

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
        padding: 4.5rem 1rem 1rem 1rem;
        top: 0;
        left: 0;
        height: 100vh;
        width: 20%;
    }

    .items{
        margin: 1rem 1rem 1rem 20%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        grid-gap: 1rem;
    }
</style>