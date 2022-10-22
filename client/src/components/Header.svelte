<script>
    export let active;
</script>
<nav>
    <ul>
        <li><a class:active={active === "/"} href="/">Home</a></li>
        <li><a class:active={active === "/about"} href="/about">About</a></li>
    </ul>
</nav>

<nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
        <a class="navbar-brand" href="#">PokeAuct</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class:active={active === "/"} class="nav-link" aria-current="page" href="/">Home</a>
                <a class:active={active === "/pokemons"} class="nav-link" href="/pokemons">Pokemons</a>
                <a class:active={active === "/auctions"} class="nav-link" href="/auctions">Auctions</a>
                <a class:active={active === "/about"} class="nav-link" href="/about">About</a>
            </div>
        </div>

        <div class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </div>
    </div>
</nav>



<style>
    ul {
        list-style-type: none;
    }

    a.active {
        font-weight: bold;
    }
</style>