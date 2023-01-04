<script>
    import TextIcon from "../../icons/NameIcon.svelte";
    import TypeIcon from "../../icons/TypeIcon.svelte";
    import PriceIcon from "../../icons/PriceIcon.svelte";
    import FilterIcon from "../../icons/FilterIcon.svelte";

    import { createEventDispatcher } from 'svelte';
    import BackwardsIcon from "../../icons/BackwardsIcon.svelte";
    import RegionIcon from "../../icons/RegionIcon.svelte";
    import TypeBadgeList from "../badges/TypeBadgeList.svelte";
    import CloseIcon from "../../icons/CloseIcon.svelte";
    const dispatch = createEventDispatcher();

    export let name;
    export let type;
    export let price;
    export let region;
    let backwards;

    const dispatchButton = (button) => {
        if(button === "backwards"){
            updateNameFilter(null);
            updateRegionFilter(null);
            updateTypesFilter(null);
            updatePriceFilter(null);
        }
        dispatch('buttonPushed', {
            button: button
        });
    }

    const filters = {
        name: null,
        region: null,
        types: null,
        price: null,
    }

    const dispatchFilters = () => {
        backwards = !(!filters.name && !filters.region && !filters.types && !filters.price);
        dispatch('filters', {
            filters: filters
        });
    }

    export const  updateNameFilter = (name) =>{
        if(name === "EMPTY"){
            filters.name = null;
        }else{
            filters.name = name;
        }
        dispatchFilters();
    }

    export const  updateRegionFilter = (region) =>{
        filters.region = region;
        dispatchFilters();
    }

    export const  updateTypesFilter = (types) =>{
        filters.types = types;
        dispatchFilters();
    }

    export const  updatePriceFilter = (price) =>{
        filters.price = price;
        dispatchFilters();
    }

</script>

<nav class="navbar">
    <ul class="navbar-nav">

        {#if backwards}
            <li class="nav-item">
                <a on:click={() => dispatchButton("backwards")} class="backwards-icon">
                    <BackwardsIcon/>
                </a>
            </li>
        {:else}
            <li>
                <a class="filter-icon">
                    <FilterIcon/>
                </a>
            </li>

        {/if}

        {#if name}
            <li class="nav-item">
                <a on:click={() => dispatchButton("name")} class="nav-link">
                    <TextIcon/>
                    <span class="link-text">Name</span>
                </a>
            </li>
        {/if}

        {#if region}
            <li on:click={() => dispatchButton("region")} class="nav-item">
                <a class="nav-link">
                    <RegionIcon/>
                    <span class="link-text">Region</span>
                </a>
            </li>
        {/if}

        {#if type}
            <li class="nav-item">
                <a on:click={() => dispatchButton("type")} class="nav-link">
                    <TypeIcon/>
                    <span class="link-text">Type</span>
                </a>
            </li>
        {/if}

        {#if price}
            <li class="nav-item">
                <a on:click={() => dispatchButton("price")} class="nav-link">
                    <PriceIcon/>
                    <span class="link-text">Price</span>
                </a>
            </li>
        {/if}
    </ul>
</nav>

{#if filters.name || filters.region || filters.types || filters.price}
    <div class="spacing"></div>
    <div class="filters">
        {#if filters.name}
            <div class="filter">
                <span class="filter-name">Name</span>{filters.name}
                <span class="close-icon" on:click={() => updateNameFilter(null)}><CloseIcon mid/></span>
            </div>
        {/if}

        {#if filters.region}
            <div class="filter">
                <span class="filter-name">region </span>{filters.region}
                <span class="close-icon" on:click={() => updateRegionFilter(null)}><CloseIcon mid/></span>
            </div>
        {/if}

        {#if filters.types}
            <div class="filter">
                <TypeBadgeList types={filters.types}/>
                <span class="close-icon" on:click={() => updateTypesFilter(null)}><CloseIcon mid/></span>
            </div>
        {/if}

        {#if filters.price}
            <div class="filter">
                <span class="filter-name">Price </span>${filters.price}
                <span class="close-icon" on:click={() => updatePriceFilter(null)}><CloseIcon mid/></span>
            </div>
        {/if}
    </div>
{/if}

<style>
    .spacing{
        margin-top: 4rem;
    }

    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 5rem;
        background-color: var(--bg-primary);
        transition: width 600ms ease;
        width: 5rem;
        height: 100vh;
        z-index: 99;
    }

    .navbar-nav {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 2rem;
        flex-direction: column;
    }

    .nav-item:hover {
        cursor: pointer;
    }

    .filter-icon{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 5rem;
        background: var(--bg-secondary);
        color: var(--text-secondary);
        text-decoration: none;
        filter: grayscale(0%) opacity(1);
        transition: var(--transition-speed);
    }

    .backwards-icon{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 5rem;
        background: var(--bg-secondary);
        filter: grayscale(100%) opacity(0.7);
        color: var(--text-secondary);
        text-decoration: none;
        transition: var(--transition-speed);
    }

    .backwards-icon:hover{
        filter: grayscale(0%) opacity(1);
    }

    .nav-link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 5rem;
        color: var(--text-primary);
        text-decoration: none;
        filter: grayscale(100%) opacity(0.7);
        transition: var(--transition-speed);
    }

    .nav-link:hover {
        filter: grayscale(0%) opacity(1);
        background: var(--bg-secondary);
        color: var(--text-secondary);
    }

    .filters{
        display: flex;
        gap: 2rem;
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
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 1rem;
        padding: 1rem;
        background-color: var(--bg-secondary);
        border-radius: .5rem;
        color: var(--text-primary);

    }

    .filter-name{
        margin-right: .5rem;
        font-weight: bold;
    }

    .close-icon{
        margin-left: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        filter: grayscale(100%) opacity(0.7);
        transition: var(--transition-speed);
    }

    .close-icon:hover{
        cursor: pointer;
        filter: grayscale(0%) opacity(1);
    }
</style>