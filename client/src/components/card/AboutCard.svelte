<script>
    export let pokemon;
</script>

    <div class="about-card">
        <h1 class="{pokemon.typeList[0]}">Abilities:</h1>
        <div class="abilities">
            {#each pokemon.abilities as ability}
                    <div class="ability">
                        <h3>{ability.name}:</h3>
                        <p>{ability.effect}</p>
                    </div>
            {/each}
        </div>

    </div>

<style>
    .about-card{
        background-color: var(--bg-primary);
        color: var(--text-primary);
        padding: 2rem;
        border-radius: .5rem;
    }

    .abilities{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    h1{
        margin: 0 0 2rem 0;
        font-size: 40px;
    }
    
    h3{
        margin: 0;
    }

    p{
        margin: 0;

    }
</style>