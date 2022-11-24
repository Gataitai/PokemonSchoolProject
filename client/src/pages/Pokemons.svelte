<script>
    import {get} from "../util/fetch";
    import OptionsNav from "../components/navigation/OptionsNav.svelte";
    import PokemonCard from "../components/card/PokemonCard.svelte";

    const params = {
        resource: "pokemons",
    }
    let promise = get(params);

</script>

<OptionsNav name type generation/>

<div class="pokemon-list">
    {#await promise}
        Loading
        {:then pokemons}
            {#each pokemons as pokemon}
                <PokemonCard pokemon={pokemon}/>
            {/each}
        {:catch error}
        <p>{error.message}</p>
    {/await}
</div>


<style>
    .pokemon-list{
        padding-left: 5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
        grid-gap: 3rem;
    }
</style>







