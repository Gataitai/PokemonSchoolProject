<script>
    import {fetchPokemons} from '../util/fetch.js';
    import PokemonCard from "../components/PokemonCard.svelte";
    import TypeBadgeSelectInput from "../components/input/TypeBadgeSelectInput.svelte";
    import RangeInput from "../components/input/RangeInput.svelte";
    import TextInput from "../components/input/TextInput.svelte";

    export let params;

    let promise;
    $: promise = fetchPokemons();

    const updatePokemonTypes = (event) => {
        const types = event.detail.types;
        $: promise = fetchPokemons(types);
    }

    const updatePokemonPrice = (event) => {
        const price = event.detail.number;
        $: promise = fetchPokemons(price);
    }
</script>

<div class="filter">
    <TextInput/>

    <TypeBadgeSelectInput on:typesSelected={updatePokemonTypes}/>

    <RangeInput on:rangeSelected={updatePokemonPrice}>
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
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        grid-gap: 1rem;
    }
</style>