<script>
    export let auction;

    const imgUrl1 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const imgUrl2 = "https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/";
    const imgUrl3 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const imgUrl4 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

    const images = [];


</script>

<div class="card">
    <img src={imgUrl1+auction.pokemon.id+".png"} class="card-img-top" alt="pokemon">
    <div class="card-body">
        <div class="bottom-images">
            <img src={imgUrl1+auction.pokemon.id+".png"} class="img-thumbnail" alt="pokemon">
            <img src={imgUrl1+auction.pokemon.id+".png"} class="img-thumbnail" alt="pokemon">
            <img src={imgUrl1+auction.pokemon.id+".png"} class="img-thumbnail" alt="pokemon">
        </div>
    </div>
</div>

<style>

    img{
        background-color: #efefef;
    }

    .bottom-images{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 1rem;
        transition: all 0.2s ease-out;
    }

    .bottom-images img:hover{
        transform: scale(1.02);
        cursor: pointer;
    }
</style>