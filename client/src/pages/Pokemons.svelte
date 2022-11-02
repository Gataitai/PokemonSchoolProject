<script>
    import PokemonCard from "../components/card/PokemonCard.svelte";
    import {get} from "../util/fetch";

    let promise = get("pokemons");

</script>

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
        margin: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        grid-gap: 1rem;
    }
</style>







