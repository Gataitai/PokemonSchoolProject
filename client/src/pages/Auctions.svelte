<script>
    import { get } from '../util/fetch.js';
    import OptionsNav from "../components/navigation/OptionsNav.svelte";
    import Modal from "../components/Modal.svelte";
    import TextInput from "../components/input/TextInput.svelte";
    import TypeBadgeSelectInput from "../components/input/TypeBadgeSelectInput.svelte";
    import RegionInput from "../components/input/RegionInput.svelte";
    import RangeInput from "../components/input/RangeInput.svelte";
    import AuctionCard from "../components/card/AuctionCard.svelte";

    let promise = get({resource: "auctions"});

    let searchquery = '';

    let nameModal;
    let typeModal;
    let priceModal;
    let regionModal;

    let toggleModal = (event) => {
        switch(event.detail.button) {
            case "name":
                nameModal.toggle();
                break;
            case "type":
                typeModal.toggle();
                break;
            case "price":
                priceModal.toggle();
                break;
            case "region":
                regionModal.toggle();
                break;
            case "backwards":
                searchquery = '';
                promise = get({resource: "auctions"});
                break;
        }
    }



    let search = (event) => {
        const query = event.detail;

        if(query.text){
            searchquery = "name="+query.text;
        }
        if(query.region){
            regionModal.toggle();
            searchquery = "region="+query.region;
        }
        if(query.types){
            let types = query.types.join(',');
            searchquery = "types="+types;
        }
        if(query.value){
            searchquery = "price="+query.value;
        }

        const params = {
            resource: "auctions",
            queryParam: searchquery
        }
        promise = get(params)
    }


</script>

<OptionsNav on:buttonPushed={toggleModal} name type price region backwards="{searchquery !== ''}"/>

<Modal bind:this={nameModal} title="Name">
    <TextInput on:textTyped={search}/>
</Modal>

<Modal bind:this={typeModal} title="Type">
    <TypeBadgeSelectInput on:typesSelected={search}/>
</Modal>

<Modal bind:this={priceModal} title="Price">
    <RangeInput max={10000} on:change={search}/>
</Modal>

<Modal bind:this={regionModal} title="Region">
    <RegionInput on:regionClicked={search}/>
</Modal>

<div class="items">
    {#await promise}
        Loading
    {:then auctions}
        {#each auctions as auction}
            <AuctionCard auction={auction}/>
        {/each}
    {:catch error}
        <p>{error.message}</p>
    {/await}
</div>

<style>
    .items{
        padding-left: 5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
        grid-gap: 3rem;
    }
</style>