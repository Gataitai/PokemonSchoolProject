<script>
    export let active;

    let hamburger = false;

    const toggle = () => {
        hamburger = !hamburger;
    }
</script>


<nav class="navbar sticky-top navbar-expand-lg">
    <div class="container">
        <a class="navbar-brand" href="/">PokeAuct</a>

        <button class="navbar-toggler" on:click={toggle} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="bi bi-list"></span>
        </button>

        <div class="collapse navbar-collapse {hamburger ? 'show' : ''}">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item">
                    <a class:active={active === "/pokemons"} class="nav-link" href="/pokemons">Pokemons</a>
                </li>

                <li class="nav-item">
                    <a class:active={active === "/about"} class="nav-link" href="/about">About</a>
                </li>

            </ul>

            <div class="d-flex">
                <a class:active={active === "/login"} class="nav-link" href="/login">Login</a>
            </div>
        </div>
    </div>
</nav>

<style>
    .navbar-toggler{
        border: transparent;
        color: white;
    }

    .bars{
        background-color: rgba(255, 99, 99, 0.95);
    }

    .navbar{
        background-color: rgba(255, 99, 99, 0.95);
    }
    a{
        color: white;
    }
</style>