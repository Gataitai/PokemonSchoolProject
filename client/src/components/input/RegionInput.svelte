<script>
    import NumberOneIcon from "../../icons/numbers/NumberOneIcon.svelte";
    import NumberTwoIcon from "../../icons/numbers/NumberTwoIcon.svelte";
    import NumberThreeIcon from "../../icons/numbers/NumberThreeIcon.svelte";
    import NumberFourIcon from "../../icons/numbers/NumberFourIcon.svelte";
    import NumberFiveIcon from "../../icons/numbers/NumberFiveIcon.svelte";
    import NumberSixIcon from "../../icons/numbers/NumberSixIcon.svelte";
    import NumberSevenIcon from "../../icons/numbers/NumberSevenIcon.svelte";
    import NumberEightIcon from "../../icons/numbers/NumberEightIcon.svelte";

    import {createEventDispatcher} from 'svelte';
    import NumberNineIcon from "../../icons/numbers/NumberNineIcon.svelte";

    const dispatch = createEventDispatcher();

    const dispatchRegion = (region) => {
        dispatch('regionClicked', {
            region: region
        });
    }
</script>

<div class="list">
    <ul class="button-list">

        <li class="button" on:click={() => dispatchRegion("kanto")} >
            <NumberOneIcon/>
            <span class="link-text">Kanto</span>
        </li>

        <li class="button" on:click={() => dispatchRegion("johto")}>
            <NumberTwoIcon/>
            <span class="link-text">Johto</span>
        </li>

        <li class="button" on:click={() => dispatchRegion("hoenn")}>
            <NumberThreeIcon/>
            <span class="link-text">Hoenn</span>
        </li>

        <li class="button" on:click={() => dispatchRegion("sinnoh")}>
            <NumberFourIcon/>
            <span class="link-text">Sinnoh</span>
        </li>

        <li class="button" on:click={() => dispatchRegion("unova")}>
            <NumberFiveIcon/>
            <span class="link-text">Unova</span>
        </li>

        <li class="button" on:click={() => dispatchRegion("kalos")}>
            <NumberSixIcon/>
            <span class="link-text">Kalos</span>
        </li>

        <li class="button" on:click={() => dispatchRegion("alola")}>
            <NumberSevenIcon/>
            <span class="link-text">Alola</span>
        </li>

        <li class="button" on:click={() => dispatchRegion("galar")}>
            <NumberEightIcon/>
            <span class="link-text">Galar</span>
        </li>

        <li class="button" on:click={() => dispatchRegion("hisui")}>
            <NumberNineIcon/>
            <span class="link-text">Hisui</span>
        </li>
    </ul>
</div>

<style>
    .list {
        height: 5rem;
        width: 100%;
    }

    .button-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 2rem;
        justify-content: space-around;
    }

    .button {
        background-color: var(--bg-primary);
        border-radius: .5rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 5rem;
        color: var(--text-primary);
        text-decoration: none;

        border: .23rem solid #0c0c0c;
        text-shadow: .15rem .15rem black;
        filter: drop-shadow(.35rem .35rem #0c0c0c) grayscale(100%) opacity(0.7);
    }

    .button:hover {
        cursor: pointer;
        background: var(--bg-secondary);
        color: var(--text-secondary);
        filter: drop-shadow(0 0 var(--bg-tertiary));
        transform: translateY(.35rem) translateX(.35rem);
    }
</style>