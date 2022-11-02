<script>
    import { token, payload } from '../stores/auth.js';
    import { clickOutside } from "../util/clickOutside";
    import router from 'page';

    export let active;

    let hamburger = false;
    let user = false;

    const toggleHamburger = () => {
        hamburger = !hamburger;
    }

    const toggleUser = () => {
        user = !user;
    }

    const userOff = () => {
        user = false;
    }

    const logout = () => {
        $token = null;
        $payload = null;
        user = false;
        router('/login');
    }
</script>


<nav class="navbar sticky-top navbar-expand-lg">
    <div class="container">
        <a class="navbar-brand" href="/">PokeAuct</a>

        <button class="navbar-toggler" on:click={toggleHamburger} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="bi bi-list"></span>
        </button>

        <div class="collapse navbar-collapse {hamburger ? 'show' : ''}">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item">
                    <a class:active={active === "/pokemons"} class="nav-link" href="/pokemons">Pokemons</a>
                </li>
            </ul>

            {#if $payload}
                <div use:clickOutside on:click_outside={userOff} class="d-flex">
                    <a class="nav-link" data-bs-toggle="dropdown" on:click={toggleUser}>{$payload.username}</a>

                    <ul class="dropdown-menu {user ? 'show' : ''}">
                        <li><a class="dropdown-item" href="#">Account</a></li>
                        <li><a class="dropdown-item" on:click={logout}>Logout</a></li>
                    </ul>
                </div>
                {:else}
                <div class="d-flex">
                    <a class:active={active === "/login"} class="nav-link" href="/login">Login</a>
                </div>
            {/if}

        </div>
    </div>
</nav>

<style>
    .navbar-toggler{
        border: transparent;
        color: white;
    }

    .dropdown-menu{
        transform: translate(0,2rem);
    }

    .navbar{
        background-color: rgba(255, 99, 99, 0.95);
    }
    .nav-link, .navbar-brand{
        color: white;
    }
</style>