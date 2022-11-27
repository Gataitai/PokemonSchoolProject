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

    let filters = [];

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
                filters = [];
                promise = get({resource: "auctions"});
                break;
        }
    }



    let search = (event) => {
        const query = event.detail;

        if(query.text){
            filters = [...filters + query.text]
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

{#if filters.length > 0}
    <div class="filters">
        <div class="filter">
            Name: test
        </div>
    </div>
{/if}





<div class="items" style="{filters.length > 0 ? 'margin-top: 4rem;' : ''}">
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

    .filters{
        display: flex;
        flex-direction: row;
        align-items: center;
        position: fixed;
        top: 5rem;
        left: 0;
        height: 7rem;
        padding-left: 8rem;
        width: 100vw;
        background-color: var(--bg-tertiary);
        z-index: 50;
    }

    .filter{
        height: 1rem;
        padding: 1rem;
        background-color: var(--bg-secondary);
        border-radius: .5rem;
        color: var(--text-primary);
        font-weight: bold;
    }


</style>