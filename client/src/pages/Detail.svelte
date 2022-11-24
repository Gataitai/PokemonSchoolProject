<script>
    import {getById} from "../util/fetch";
    import Card from "../components/card/Card.svelte";

    export let id;
    let promise = getById({
        resource: "auction",
        id: id
    });

</script>

{#await promise}
    Loading
{:then pokemon}
    <div class="container">
        <div class="images">
            {id}
        </div>

        <div class="detail">
            <Card pokemon={pokemon}/>
        </div>

        <div class="bids">
            {id}
        </div>
    </div>
{:catch error}
    <p>{error.message}</p>
{/await}

<style>
    .container{
        display:flex;
        height: 100%;
        justify-content: space-between;
        gap: 2rem;
    }

    .images{
        width: 100%;
        background-color: red;
    }

    .detail{
        width: 100%;
        background-color: green;
    }

    .bids{
        width: 100%;
        background-color: blue;
    }

</style>