<script>
    import Chart from 'chart.js/auto';
    import {onMount} from "svelte";

    export let pokemon;
    let stats = pokemon.baseStats


    let chartData = [stats.hp, stats.attack, stats.defense, stats.spAttack, stats.spDefense, stats.speed];
    let Labels = ['HP', 'Attack', 'Defense', 'SpAttack', 'SpDefense', 'Speed'];
    let ctx;
    let chartCanvas;

    onMount(async (promise) => {
        Chart.defaults.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-tertiary');
        Chart.defaults.color = getComputedStyle(document.documentElement).getPropertyValue('--text-primary');
        ctx = chartCanvas.getContext('2d');
        chartCanvas = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Labels,
                datasets: [{
                    label: 'Base stats',
                    data: chartData,
                    backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--hl-primary'),
                }]
            },
            options: {
                scales: {
                    y: {
                        suggestedMax: 100
                    }
                }
            }
        });
    });

</script>

    <div class="about-card">
        <h1>Abilities:</h1>
        <div class="abilities">
            {#each pokemon.abilities as ability}
                    <div class="ability">
                        <h3>{ability.name}:</h3>
                        <p>{ability.effect}</p>
                    </div>
            {/each}
        </div>
        <h1>Stats:</h1>
        <canvas bind:this={chartCanvas}></canvas>
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
        margin-bottom: 2rem;
    }

    h1{
        margin: 0 0 2rem 0;
    }
    
    h3{
        margin: 0;
    }

    p{
        margin: 0;

    }
</style>