<script>
    import AlienIcon from "../../icons/AlienIcon.svelte";
    import AuctionIcon from "../../icons/AuctionIcon.svelte";
    import LoginIcon from "../../icons/LoginIcon.svelte";

    export let active;
</script>

<div class="list">
    <ul class="button-list">

        <li class="button">
            <AuctionIcon/>
            <span class="link-text">Sinnoh</span>
        </li>
    </ul>
</div>

<style>
    .list {
        width: 100%;
        height: 5rem;
    }

    .button-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 2rem;
        height: 100%;
    }

    .button {
        width: 5rem;
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

    .button:hover {
        filter: grayscale(0%) opacity(1);
        background: var(--bg-secondary);
        color: var(--text-secondary);
    }
</style>