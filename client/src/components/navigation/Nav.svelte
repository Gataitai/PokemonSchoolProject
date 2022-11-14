<script>
    import AlienIcon from "../../icons/AlienIcon.svelte";
    import AuctionIcon from "../../icons/AuctionIcon.svelte";
    import LoginIcon from "../../icons/LoginIcon.svelte";

    export let active;
</script>

<nav class="navbar">
    <ul class="navbar-nav">

        <li class="logo">
            <a href="/" class="nav-link" class:nav-link-active={active === "/"}>
                <span class="link-text">Poke Auct</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="/auctions" class="nav-link" class:nav-link-active={active === "/auctions"}>
                <AuctionIcon/>
                <span class="link-text">Auctions</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="/pokemons" class="nav-link" class:nav-link-active={active === "/pokemons"}>
                <AlienIcon/>
                <span class="link-text">PkMn's</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="/login" class="nav-link" class:nav-link-active={active === "/login"}>
                <LoginIcon/>
                <span class="link-text">Login</span>
            </a>
        </li>
    </ul>
</nav>

<style>
    .navbar {
        position: fixed;
        background-color: var(--bg-primary);
        width: 100vw;
        height: 5rem;
        z-index: 100;
    }

    .navbar-nav {
        list-style: none;
        padding: 0;
        margin: 0 4rem 0 5rem;
        display: flex;
        gap: 2rem;
        height: 100%;
    }

    .nav-item {
        width: 5rem;
    }

    .nav-item:last-child{
        margin-left: auto;
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

    .nav-link-active {
        filter: grayscale(0%) opacity(1);
        background: var(--bg-secondary);
        color: var(--text-secondary);
    }

    .logo {
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        padding: 0 1rem 0 1rem;
        color: var(--text-secondary);
        background: var(--bg-secondary);
        font-size: 1.5rem;
        letter-spacing: 0.3ch;
    }
</style>