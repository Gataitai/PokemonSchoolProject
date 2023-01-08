<script>
    import OptionsNav from "../components/navigation/OptionsNav.svelte";
    import PokemonCard from "../components/card/PokemonCard.svelte";
    import {onMount} from "svelte";


    let pokemons = [];

    onMount(async () => {
        const response = await fetch("http://localhost:3001/pokemons");
        const data = await response.json();
        pokemons = data.pokemons;
    });

</script>

<OptionsNav name type generation/>

<div class="pokemon-list">
    {#each pokemons as pokemon}
        <PokemonCard pokemon={pokemon}/>
    {/each}
</div>


<style>
    .pokemon-list{
        padding-left: 5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
        grid-gap: 3rem;
    }
</style>







