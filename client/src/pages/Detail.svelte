<script>
    import {auctionId} from "../stores/auction";
    import {getById} from "../util/fetch";
    import TypeBadgeList from "../components/TypeBadgeList.svelte";

    const imgUrl1 = (pokemon) => {
        return "https://img.pokemondb.net/sprites/black-white/normal/" + pokemon.toLowerCase() + ".png";
    }

    const imgUrl2 = (pokemon) => {
        return "https://img.pokemondb.net/sprites/red-blue/normal/" + pokemon.toLowerCase() + ".png";
    }

    const imgUrl3 = (pokemon) => {
        return "https://img.pokemondb.net/sprites/silver/normal/" + pokemon.toLowerCase() + ".png";
    }

    const imgUrl4 = (pokemon) => {
        return "https://img.pokemondb.net/sprites/ruby-sapphire/normal/" + pokemon.toLowerCase() + ".png";
    }

    const imgUrl5 = (pokemon) => {
        return "https://img.pokemondb.net/sprites/firered-leafgreen/normal/" + pokemon.toLowerCase() + ".png";
    }

    const imgUrl6 = (pokemon) => {
        return "https://img.pokemondb.net/sprites/diamond-pearl/normal/" + pokemon.toLowerCase() + ".png";
    }

    const imgUrl7 = (pokemon) => {
        return "https://img.pokemondb.net/sprites/heartgold-soulsilver/normal/" + pokemon.toLowerCase() + ".png";
    }

    const imgUrl8 = (pokemon) => {
        return "https://img.pokemondb.net/sprites/black-white/anim/normal/" + pokemon.toLowerCase() + ".gif";
    }

    const imgUrl9 = (pokemon) => {
        return "https://img.pokemondb.net/sprites/gold/normal/" + pokemon.toLowerCase() + ".png";
    }

    const imgUrl0 = (pokemon) => {
        return "https://img.pokemondb.net/sprites/yellow/normal/" + pokemon.toLowerCase() + ".png";
    }


    let promise = getById("auctions", $auctionId);
</script>
    {#await promise}
        Loading
        {:then auction}
            <div class="description">

                <div class="card">
                    <div class="card-header">
                        Pictures
                    </div>
                    <div class="card-body photo-grid">
                        <img src={imgUrl2(auction.pokemon.name)} alt="pokemon">
                        <img src={imgUrl3(auction.pokemon.name)} alt="pokemon">
                        <img src={imgUrl4(auction.pokemon.name)} alt="pokemon">
                        <img src={imgUrl5(auction.pokemon.name)} alt="pokemon">
                        <img src={imgUrl6(auction.pokemon.name)} alt="pokemon">
                        <img src={imgUrl7(auction.pokemon.name)} alt="pokemon">
                        <img src={imgUrl8(auction.pokemon.name)} alt="pokemon">
                        <img src={imgUrl9(auction.pokemon.name)} alt="pokemon">
                        <img src={imgUrl0(auction.pokemon.name)} alt="pokemon">
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        Details
                    </div>
                    <img src={imgUrl1(auction.pokemon.name)} alt="pokemon">
                    <div class="card-body">
                        <h1 class="card-title">{auction.pokemon.name}</h1>
                        <h6 class="card-subtitle mb-2 text-muted">#{auction.pokemon.id}</h6>

                        <TypeBadgeList types={auction.pokemon.typeList}/>

                        <div class="bid-wrapper">
                            <div class="bid-stats">
                                <div>
                                    <i class="bi bi-clock"></i>Ending date <b>{new Date(auction.endingDate).toLocaleDateString("en-US")}</b>
                                </div>

                                <div>
                                    <i class="bi bi-arrow-up"></i>Highest bid <b>$100</b>
                                </div>

                                <div>
                                    <i class="bi bi-hash"></i>Bids <b>4</b>
                                </div>

                            </div>
                            <button type="button" class="btn btn-success">
                                Place bid
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bids">

            </div>
        {:catch error}
        <p>{error.message}</p>
    {/await}
<style>
    .description{
        position: fixed;
        padding: 4.5rem 1rem 1rem 1rem;
        top: 0;
        left: 0;

        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 70vw;
    }

    .description .card{
        width: 100%;
    }

    .bids{
        margin: 1rem 1rem 1rem 70vw;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        grid-gap: 1rem;
    }

    .bi{
        margin-right: .4rem;
    }
    .bid-wrapper{
        display: flex;
        gap: .5rem;
        width: 100%;
        margin-top: 1rem;
    }
    .bid-stats{
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: space-around;
        border-radius: 0.3rem;
        background-color: #efefef;
    }
    .photo-grid{
        display: grid;
        align-items: center;
        gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
    }

    .photo-grid img{
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: .5rem;
        transition: all 0.2s ease-out;
    }

    .photo-grid img:hover{
        transform: scale(1.02);
    }
</style>