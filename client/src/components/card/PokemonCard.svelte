<script>
    import Card from "./Card.svelte";
    import TypeBadgeList from "../TypeBadgeList.svelte";

    export let pokemon;
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const id = "#"+pokemon.id;
</script>

<Card>
    <img src={imgUrl+pokemon.id+".png"} class="card-img-top" alt="pokemon">
    <div class="card-body">
        <h4 class="card-title">{pokemon.name}</h4>
        <p class="text-muted">{id}</p>

        <TypeBadgeList types={pokemon.typeList}/>
    </div>
</Card>


<style>
    img{
        background-color: #efefef;
    }
</style>