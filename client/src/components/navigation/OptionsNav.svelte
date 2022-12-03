<script>
    import TextIcon from "../../icons/NameIcon.svelte";
    import TypeIcon from "../../icons/TypeIcon.svelte";
    import PriceIcon from "../../icons/PriceIcon.svelte";
    import FilterIcon from "../../icons/FilterIcon.svelte";

    import { createEventDispatcher } from 'svelte';
    import BackwardsIcon from "../../icons/BackwardsIcon.svelte";
    import RegionIcon from "../../icons/RegionIcon.svelte";
    import TypeBadgeList from "../badges/TypeBadgeList.svelte";
    const dispatch = createEventDispatcher();

    export let name;
    export let type;
    export let price;
    export let region;
    export let backwards;

    const dispatchButton = (button) => {
        if(button === "backwards"){
            removeName();
            removeRegion();
            removeTypes();
            removePrice();
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
        dispatch('filters', {
            filters: filters
        });
    }

    export const updateFilter = ({name, region, types, price}) => {
        if(name){
            filters.name = name;
        }
        if(region){
            filters.region = region;
        }
        if(types){
            filters.types = types;
        }
        if(price){
            filters.price = price;
        }
        dispatchFilters();
    }

    export const removeName = () => {
        filters.name = null;
    }

    export const removeRegion = () => {
        filters.region = null;
    }

    export const removeTypes = () => {
        filters.types = null;
    }

    export const removePrice = () => {
        filters.price = null;
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
    <div class="filters">
        {#if filters.name}
            <div class="filter" on:click={() => updateFilter({name: null})}>
                <span class="filter-name">Name </span>{filters.name}
            </div>
        {/if}

        {#if filters.region}
            <div class="filter" on:click={() => updateFilter({region: null})}>
                <span class="filter-name">region </span>{filters.region}
            </div>
        {/if}

        {#if filters.types}
            <div class="filter" on:click={() => updateFilter({types: null})}>
                <TypeBadgeList types={filters.types}/>
            </div>
        {/if}

        {#if filters.price}
            <div class="filter" on:click={() => updateFilter({price: null})}>
                {filters.price}
            </div>
        {/if}
    </div>
{/if}

<style>
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

    }

    .filter-name{
        font-weight: bold;
    }
</style>