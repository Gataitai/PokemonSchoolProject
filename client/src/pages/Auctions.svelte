<script>
    import OptionsNav from "../components/navigation/OptionsNav.svelte";
    import Modal from "../components/Modal.svelte";
    import TextInput from "../components/input/TextInput.svelte";
    import TypeBadgeSelectInput from "../components/input/TypeBadgeSelectInput.svelte";
    import RegionInput from "../components/input/RegionInput.svelte";
    import RangeInput from "../components/input/RangeInput.svelte";
    import AuctionCard from "../components/card/AuctionCard.svelte";
    import {onMount} from "svelte";
    import Paginator from "../components/navigation/Paginator.svelte";

    let auctions = [];
    let totalPages;
    let filters = {};

    async function newPage(page) {
        const params = new URLSearchParams(window.location.search);
        page ? params.set('page', page) : null;

        filters?.name ? params.set('name', filters.name) : params.delete('name');
        filters?.region ? params.set('region', filters.region) : params.delete('region');
        filters?.types ? params.set('typeList', filters.types.join(',')) : params.delete('typeList');
        filters?.price ? params.set('price', filters.price) : params.delete('price');

        const route = params.toString() ? `auctions?${params.toString()}` : "auctions";
        const response = await fetch("http://localhost:3001/"+route);
        const data = await response.json();
        auctions = data.auctions;
        totalPages = Math.ceil(data.totalCount / data.pageSize);
        window.history.pushState({}, "", route);
    }

    let search = (event) => {
        filters = event.detail.filters;
        paginator.reset();
        newPage(1)
    }

    async function updatePage(event){
        await newPage(event.detail.page);
    }

    onMount(async () => {
        await newPage(1);
    });

    let nameModal;
    let typeModal;
    let priceModal;
    let regionModal;
    let filterComponent;
    let paginator;

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
                filters = null;
                paginator.reset();
                newPage(1)
                break;
        }
    }

    const updateNameFilter = (event) => {
        filterComponent.updateNameFilter(event.detail.text);
    }

    const updateRegionFilter = (event) => {
        filterComponent.updateRegionFilter(event.detail.region);
    }

    const updateTypesFilter = (event) => {
        filterComponent.updateTypesFilter(event.detail.types);
    }

    const updatePriceFilter = (event) => {
        filterComponent.updatePriceFilter(event.detail.value);
    }
</script>

<OptionsNav bind:this={filterComponent} on:buttonPushed={toggleModal} on:filters={search} name type price region/>

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

<Paginator bind:this={paginator} totalPages={totalPages} on:page={updatePage}/>

<style>
    .items{
        padding-left: 5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
        grid-gap: 3rem;
    }
</style>