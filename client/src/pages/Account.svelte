<script>
    import {token} from '../stores/auth.js';
    import jwt from 'jwt-decode';
    import router from 'page';
    import PokemonCard from "../components/card/PokemonCard.svelte";
    import {onMount} from "svelte";

    let user;
    let error;

    const logout = () => {
        $token = '';
        router('/login')
    }

    const getUser = async () => {
        if($token){
            const response = await fetch("http://localhost:3001/users/"+jwt($token).username);
            const data = await response.json();
            if(data.error){
                error = data.error;
            }else{
                user = data;
            }
        }
    }

    onMount(async () => {
        await getUser();
        console.log(user)
    });

</script>

{#if $token && user}
    <div class="account">
        <div class="field">
            <span class="name">
                Username:
            </span>
            {jwt($token).username}
        </div>

        <div class="field">
            <span class="name">
                Account type:
            </span>
            {jwt($token).type}
        </div>

        <button class="logout" on:click={logout}>Logout</button>

        <div class="won-auctions">
            {#if user.wonAuctions.length > 0}
                <div class="field">
                    Auctions you've won.
                </div>
                {#each user.wonAuctions as auction}
                    <div class="auction">
                        <PokemonCard pokemon={auction.pokemon}/>
                        <div class="field">
                            <span class="name">
                                Price:
                            </span>
                            ${auction.price}
                        </div>
                    </div>
                {/each}
            {:else}
                <div class="field">
                    You haven't won any auctions yet.
                </div>
            {/if}
        </div>

    </div>
{/if}

<style>
    .account{
        position: absolute;
        left: 0;
        right: 0;
        top: 50vh;
        margin: auto;
        width: 20vw;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .field{
        background-color: var(--bg-primary);
        color: var(--text-primary);
        border-radius: .5rem;
        padding: 1rem;
        display: flex;
        gap: 1rem;
        filter: grayscale(100%);
    }

    .name{
        font-weight: bold;
    }

    .logout{
        font-weight: bold;
        color: var(--bg-primary);
        height: 3rem;
        border-radius: .5rem;
        border: none;
        background-color: var(--hl-primary);
        transition: var(--transition-speed);
    }

    .logout:hover{
        cursor: pointer;
        background-color: var(--hl-secondary);
    }

    .won-auctions{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
    }

    .auction{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

</style>



