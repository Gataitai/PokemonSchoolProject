<script>
    import Counter from '../lib/Counter.svelte';
    import {onMount} from "svelte";
    import PokemonCard from "../components/PokemonCard.svelte";
    import TypeBadgeSelectInput from "../components/TypeBadgeSelectInput.svelte";

    export let params;

    let pokemons = [];

    onMount(async () => {
        const response = await fetch('http://localhost:3001/pokemons');
        const json = await response.json();
        pokemons = json.pokemons;
    });
</script>

<div class="filter">
    <TypeBadgeSelectInput/>
</div>

<div class="items">
    {#each pokemons as pokemon}
        <PokemonCard pokemon={pokemon}/>
    {/each}
</div>

<style>
    /*#home{*/
    /*    display: grid;*/
    /*    grid-template-areas:*/
    /*    "fi it it";*/
    /*    grid-template-columns: 22% 1fr;*/
    /*    height: 92vh;*/
    /*}*/

    /*#home > .filter {*/
    /*    grid-area: fi;*/
    /*    background-color: red;*/
    /*    display: grid;*/
    /*}*/

    /*#home > .items {*/
    /*    grid-area: it;*/
    /*    padding: 1rem;*/
    /*    background-color: green;*/
    /*    display: grid;*/
    /*    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));*/
    /*    grid-gap: 1rem;*/
    /*}*/

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