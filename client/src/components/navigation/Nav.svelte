<script>
    import AlienIcon from "../../icons/AlienIcon.svelte";
    import AuctionIcon from "../../icons/AuctionIcon.svelte";
    import LoginIcon from "../../icons/LoginIcon.svelte";
    import SignupIcon from "../../icons/SignupIcon.svelte";
    import {token} from "../../stores/auth";
    import UserIcon from "../../icons/UserIcon.svelte";
    import jwt from 'jwt-decode';
    import CreateIcon from "../../icons/CreateIcon.svelte";
    import CloseIcon from "../../icons/CloseIcon.svelte";
    import Update from "../../pages/Update.svelte";
    import UpdateIcon from "../../icons/UpdateIcon.svelte";
    import DeleteIcon from "../../icons/DeleteIcon.svelte";

    export let active;
</script>

<nav class="navbar">
    <ul class="navbar-nav">

        <li class="logo">
            <a href="/" class="nav-link" class:nav-link-active={active === "/"}>
                <span>Poke Auct</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="/auctions" class="nav-link" class:nav-link-active={active === "/auctions"}>
                <AuctionIcon/>
                <span>Auctions</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="/pokemons" class="nav-link" class:nav-link-active={active === "/pokemons"}>
                <AlienIcon/>
                <span>PkMn's</span>
            </a>
        </li>

        {#if $token}
            {#if jwt($token).type === "admin"}
                <li class="nav-item">
                    <a href="/create" class="nav-link" class:nav-link-active={active === "/create"}>
                        <CreateIcon/>
                        <span>Create</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="/update" class="nav-link" class:nav-link-active={active === "/update"}>
                        <UpdateIcon/>
                        <span>Update</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="/delete" class="nav-link" class:nav-link-active={active === "/delete"}>
                        <DeleteIcon/>
                        <span>Delete</span>
                    </a>
                </li>
            {/if}
            <li class="nav-item">
                <a href="/account" class="nav-link" class:nav-link-active={active === "/account"}>
                    <UserIcon/>
                    <span>{jwt($token).username}</span>
                </a>
            </li>
            {:else}
            <li class="nav-item nav-login">
                <a href="/login" class="nav-link login-signup" class:nav-link-active={active === "/login"}>
                    <LoginIcon/>
                    <span>Login</span>
                </a>
                <a href="/signup" class="nav-link login-signup" class:nav-link-active={active === "/signup"}>
                    <SignupIcon/>
                    <span>Signup</span>
                </a>
            </li>
        {/if}
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

    .nav-login{
        display: flex;
        width: 10rem;
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

    .login-signup{
        width: 5rem;
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