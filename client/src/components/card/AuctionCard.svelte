<script>
    import Card from "./Card.svelte";
    import TypeBadgeList from "../TypeBadgeList.svelte";
    import { auctionId } from "../../stores/auction.js";
    import router from "page";

    export let auction;
    const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    const date = new Date(auction.endingDate).toLocaleDateString("en-US");

    const clickAuction = (auction) => {
        $auctionId = auction.id;
        router('/detail/:')
    }

</script>

<Card>
    <img src={imgUrl+auction.pokemon.id+".png"} class="card-img-top" alt="pokemon">
    <div class="card-body">
        <h4 class="card-title">{auction.pokemon.name}</h4>

        <TypeBadgeList types={auction.pokemon.typeList}/>

        <div class="d-grid gap-2">
            <a href="/detail/{auction.id}" type="button"  class="btn btn-success">
                Bid now ${auction.startingPrice}
            </a>
        </div>
    </div>
    <div class="card-footer text-muted text-center">
        Ending {date}
    </div>
</Card>


<style>
    a{
        margin-top: 1rem;
    }

    img{
        background-color: #efefef;
    }
</style>