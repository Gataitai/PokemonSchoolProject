<script>
    import TextIcon from "../../icons/NameIcon.svelte";
    import TypeIcon from "../../icons/TypeIcon.svelte";
    import PriceIcon from "../../icons/PriceIcon.svelte";
    import FilterIcon from "../../icons/FilterIcon.svelte";
    import GenerationIcon from "../../icons/GenerationIcon.svelte";

    export let name;
    export let type;
    export let price;
    export let generation;
</script>

<nav class="navbar">
    <ul class="navbar-nav">

        <li class="filter-icon">
            <FilterIcon/>
        </li>

        {#if name}
            <li class="nav-item">
                <a class="nav-link">
                    <TextIcon/>
                    <span class="link-text">Name</span>
                </a>
            </li>
        {/if}

        {#if type}
            <li class="nav-item">
                <a class="nav-link">
                    <TypeIcon/>
                    <span class="link-text">Type</span>
                </a>
            </li>
        {/if}

        {#if price}
            <li class="nav-item">
                <a class="nav-link">
                    <PriceIcon/>
                    <span class="link-text">Price</span>
                </a>
            </li>
        {/if}

        {#if generation}
            <li class="nav-item">
                <a class="nav-link">
                    <GenerationIcon/>
                    <span class="link-text">Gen</span>
                </a>
            </li>
        {/if}
    </ul>
</nav>

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
        width: 5rem;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--bg-secondary);
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
</style>