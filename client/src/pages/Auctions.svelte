<script>
    import OptionsNav from "../components/navigation/OptionsNav.svelte";
    import Modal from "../components/Modal.svelte";
    import TextInput from "../components/input/TextInput.svelte";
    import TypeBadgeSelectInput from "../components/input/TypeBadgeSelectInput.svelte";
    import RegionInput from "../components/input/RegionInput.svelte";
    import RangeInput from "../components/input/RangeInput.svelte";
    import AuctionCard from "../components/card/AuctionCard.svelte";
    import {onMount} from "svelte";

    let auctions = []
    let page = 1
    let totalPages = 1
    const pageSize = 24
    let filters = {}

    onMount(async () => {
        const response = await fetch(`http://localhost:3001/auctions?page=${page}&pageSize=${pageSize}`)
        const data = await response.json()
        auctions = data.auctions
        totalPages = Math.ceil(data.totalCount / pageSize)
    })

    async function changePage(newPage) {
        page = newPage
        const response = await fetch(`http://localhost:3001/auctions?page=${page}&pageSize=${pageSize}`)
        const data = await response.json()
        auctions = data.auctions
    }

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
                changePage(1)
                break;
        }
    }

    const updateNameFilter = (event) => {
        filters.updateNameFilter(event.detail.text);
    }

    const updateRegionFilter = (event) => {
        filters.updateRegionFilter(event.detail.region);
    }

    const updateTypesFilter = (event) => {
        filters.updateTypesFilter(event.detail.types);
    }

    const updatePriceFilter = (event) => {
        filters.updatePriceFilter(event.detail.value);
    }

    let search = (event) => {
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

<OptionsNav bind:this={filters} on:buttonPushed={toggleModal} on:filters={search} name type price region/>

<Modal bind:this={nameModal} title="Name">
    <TextInput on:textTyped={updateNameFilter}/>
</Modal>

<Modal bind:this={typeModal} title="Type">
    <TypeBadgeSelectInput on:typesSelected={updateTypesFilter}/>
</Modal>

<Modal bind:this={priceModal} title="Price">
    <RangeInput max={10000} on:change={updatePriceFilter}/>
</Modal>

<Modal bind:this={regionModal} title="Region">
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