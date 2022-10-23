<script>
    import TypeBadgeList from "./TypeBadgeList.svelte";

    export let pokemon;
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const id = "#"+pokemon.id;
</script>

<div class="card">
    <img src={imgUrl+pokemon.id+".png"} class="card-img-top" alt="pokemon">
    <div class="card-body">
        <h4 class="card-title">{pokemon.name}</h4>
        <p class="text-muted">{id}</p>
        <TypeBadgeList types={pokemon.typeList}/>
    </div>
</div>


<style>
    img{
        background-color: #efefef;
    }

    .card{
        transition: all 0.2s ease-out;
    }

    .card:hover{
        transform: scale(1.02);
    }
</style>