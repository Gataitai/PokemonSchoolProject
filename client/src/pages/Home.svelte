<script>
    import {fetchPokemons, fetchPokemonsByName, fetchPokemonsByPrice, fetchPokemonsByTypes} from '../util/fetch.js';
    import PokemonCard from "../components/PokemonCard.svelte";
    import TypeBadgeSelectInput from "../components/input/TypeBadgeSelectInput.svelte";
    import RangeInput from "../components/input/RangeInput.svelte";
    import TextInput from "../components/input/TextInput.svelte";

    export let params;

    let promise;
    $: promise = fetchPokemons();

    const updatePokemonByTypes = (event) => {
        const types = event.detail.types;
        $: promise = fetchPokemonsByTypes(types);
    }

    const updatePokemonByPrice = (event) => {
        const price = event.detail.number;
        $: promise = fetchPokemonsByPrice(price);
    }

    const updatePokemonByName = (event) => {
        const name = event.detail.text;
        $: promise = fetchPokemonsByName(name);
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
        ASDFASDFASDF
    {:then pokemons}
        {#each pokemons as pokemon}
            <PokemonCard pokemon={pokemon}/>
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