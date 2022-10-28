<script>
    import {fetchPokemons} from '../util/fetch.js';
    import PokemonCard from "../components/PokemonCard.svelte";
    import TypeBadgeSelectInput from "../components/TypeBadgeSelectInput.svelte";

    export let params;

    let promise;
    $: promise = fetchPokemons();

    const updatePokemon = (event) => {
        console.log(event.detail.types);
        $: promise = fetchPokemons(event.detail.types)
    }
</script>

<div class="filter">
    <TypeBadgeSelectInput on:typesSelected={updatePokemon}/>
    <input type="range" class="form-range" id="customRange1">
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
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 1rem;
    }
</style>