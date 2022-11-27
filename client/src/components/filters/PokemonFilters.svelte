<script>

import OptionsNav from "../navigation/OptionsNav.svelte";
import {get} from "../../util/fetch";

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

<style>

</style>