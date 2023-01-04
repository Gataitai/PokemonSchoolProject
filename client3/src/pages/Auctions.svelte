<script>
    import Filters from "../components/nav/Filters.svelte";
    import Modal from "../components/modal/Modal.svelte";
    import TextInput from "../components/input/TextInput.svelte";
    import TypeBadgeSelectInput from "../components/input/TypeBadgeSelectInput.svelte";
    import RangeInput from "../components/input/RangeInput.svelte";
    import RegionInput from "../components/input/RegionInput.svelte";
    import {onMount} from "svelte";
    import AuctionCard from "../components/card/AuctionCard.svelte";

    export let params;
    let auctions = [];
    let totalPages;
    let filtersComponent;
    let modalComponent = {};

    onMount(async () => {
        const response = await fetch(`http://localhost:3001/auctions?page=${params.page}&pageSize=${params.pageSize}`)
        const data = await response.json()
        auctions = data.auctions
        totalPages = Math.ceil(data.totalCount / params.pageSize)
    })

    async function changePage(newPage) {
        page = newPage
        const response = await fetch(`http://localhost:3001/auctions?page=${page}&pageSize=${params.pageSize}`)
        const data = await response.json()
        auctions = data.auctions
    }

    let toggleModal = (event) => {
        switch(event.detail.button) {
            case "name":
                modalComponent.name.toggle();
                break;
            case "type":
                modalComponent.type.toggle();
                break;
            case "price":
                modalComponent.price.toggle();
                break;
            case "region":
                modalComponent.region.toggle();
                break;
            case "backwards":
                changePage(1)
                break;
        }
    }

    const updateNameFilter = (event) => {
        filtersComponent.updateNameFilter(event.detail.text);
    }

    const updateRegionFilter = (event) => {
        filtersComponent.updateRegionFilter(event.detail.region);
    }

    const updateTypesFilter = (event) => {
        filtersComponent.updateTypesFilter(event.detail.types);
    }

    const updatePriceFilter = (event) => {
        filtersComponent.updatePriceFilter(event.detail.value);
    }

    const search = (event) => {
        let search = "";
        const filters = event.detail.filters;

        if(filters.name){
            search = "name="+filters.name;
        }
        if(filters.region){
            search = "region="+filters.region;
        }
        if(filters.types){
            let types = filters.types.join(',');
            search = "types="+types;
        }
        if(filters.price){
            search = "price="+filters.price;
        }

        const params = {
            resource: "auctions",
            queryParam: search
        }
        //makefilter
    }
</script>

<Filters bind:this={filtersComponent} on:buttonPushed={toggleModal} on:filters={search} name type price region/>

<Modal bind:this={modalComponent.name} title="Name">
    <TextInput on:textTyped={updateNameFilter}/>
</Modal>

<Modal bind:this={modalComponent.type} title="Type">
    <TypeBadgeSelectInput on:typesSelected={updateTypesFilter}/>
</Modal>

<Modal bind:this={modalComponent.price} title="Price">
    <RangeInput max={10000} on:change={updatePriceFilter}/>
</Modal>

<Modal bind:this={modalComponent.region} title="Region">
    <RegionInput on:regionClicked={updateRegionFilter}/>
</Modal>

<div class="items">
    {#each auctions as auction}
        <AuctionCard auction={auction}/>
    {/each}
</div>

<style>
    .items{
        padding-left: 5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
        grid-gap: 3rem;
    }
</style>