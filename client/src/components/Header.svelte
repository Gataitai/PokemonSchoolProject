<script>
    export let active;
</script>
<!--<nav>-->
<!--    <ul>-->
<!--        <li><a class:active={active === "/"} href="/">Home</a></li>-->
<!--        <li><a class:active={active === "/about"} href="/about">About</a></li>-->
<!--    </ul>-->
<!--</nav>-->

<!--<nav class="navbar sticky-top navbar-expand-lg">-->
<!--    <div class="container">-->
<!--        <a class="navbar-brand" href="/">PokeAuct</a>-->
<!--        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">-->
<!--            <span class="navbar-toggler-icon"></span>-->
<!--        </button>-->
<!--        <div class="collapse navbar-collapse">-->
<!--            <div class="navbar-nav">-->
<!--                <a class:active={active === "/pokemons"} class="nav-link" href="/pokemons">Pokemons</a>-->
<!--                <a class:active={active === "/auctions"} class="nav-link" href="/auctions">Auctions</a>-->
<!--                <a class:active={active === "/about"} class="nav-link" href="/about">About</a>-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="d-flex">-->
<!--            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">-->
<!--        </div>-->
<!--        <a class="nav-link" href="/login">Login</a>-->
<!--    </div>-->
<!--</nav>-->

<nav class="navbar sticky-top navbar-expand-lg">
    <div class="container">
        <a class="navbar-brand" href="/">PokeAuct</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
    .navbar{
        background-color: rgba(255, 99, 99, 0.95);
    }
    a{
        color: white;
    }
</style>