<script>
    import PokemonCard from "../components/PokemonCard.svelte";
    import {onMount} from "svelte";

    let pokemons = [];

    onMount(async () => {
        const response = await fetch('http://localhost:3001/pokemons');
        const json = await response.json();
        pokemons = json.pokemons;
    });

</script>

<div class="pokemon-list">
    {#each pokemons as pokemon}
        <PokemonCard pokemon={pokemon}/>
    {/each}
</div>


<style>
    .pokemon-list{
        margin: 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        grid-gap: 1rem;
    }
</style>







