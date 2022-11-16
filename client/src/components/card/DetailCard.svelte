<script>
    import TypeBadgeList from "../badges/TypeBadgeList.svelte";
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    export let auction;
    const date = new Date(auction.endingDate).toLocaleDateString("en-US");
</script>

<div class="card">
    <div class="card-header">
        Details
    </div>
    <img src={imgUrl+auction.pokemon.id+".png"} class="card-img-top" alt="pokemon">
    <div class="card-body">
        <h1 class="card-title">{auction.pokemon.name}</h1>
        <h6 class="card-subtitle mb-2 text-muted">#{auction.pokemon.id}</h6>

        <TypeBadgeList types={auction.pokemon.typeList}/>

        <div class="bid">
            <div class="bid-stats">
                <div>
                    <i class="bi bi-clock"></i>Ending date {date}
                </div>

                <div>
                    <i class="bi bi-arrow-up"></i>Highest bid $100
                </div>

                <div>
                    <i class="bi bi-hash"></i>Bids 4
                </div>

            </div>
            <button type="button" class="btn btn-success">
                Place bid
            </button>
        </div>

    </div>
</div>

<style>
    .bi{
        margin-right: .4rem;
    }
    .bid{
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
    img{
        background-color: #efefef;
    }
</style>