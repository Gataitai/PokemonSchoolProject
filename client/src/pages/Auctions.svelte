<script>
    import { get } from '../util/fetch.js';
    import Card from "../components/card/Card.svelte";
    import OptionsNav from "../components/navigation/OptionsNav.svelte";
    import Modal from "../components/Modal.svelte";
    import TextInput from "../components/input/TextInput.svelte";
    import TypeBadgeSelectInput from "../components/input/TypeBadgeSelectInput.svelte";

    let promise = get({resource: "auctions"});

    let nameModal;
    let typeModal;
    let priceModal;
    let generationModal;


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
            case "generation":
                generationModal.toggle();
                break;
            case "backwards":
                searchquery = '';
                promise = get({resource: "auctions"});
                break;
        }
    }

    let searchquery = '';

    let nameSearch = (event) => {
        searchquery = event.detail.text;
        const params = {
            resource: "auctions",
            queryParam: "name="+searchquery
        }
        promise = get(params)
    }

</script>

<OptionsNav on:buttonPushed={toggleModal} name type price generation backwards="{searchquery !== ''}"/>

<Modal bind:this={nameModal} title="Pokemon name">
    <TextInput on:textTyped={nameSearch}/>
</Modal>

<Modal bind:this={typeModal} title="Pokemon type">
    <TypeBadgeSelectInput/>
</Modal>

<Modal bind:this={priceModal}>
    price
</Modal>

<Modal bind:this={generationModal}>
    generation
</Modal>

<div class="items">
    {#await promise}
        Loading
    {:then auctions}
        {#each auctions as auction}
            <Card pokemon={auction.pokemon}/>
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