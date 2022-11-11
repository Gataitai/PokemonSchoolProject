<script>
    import { createEventDispatcher } from 'svelte';
    import { clickOutside } from "../util/clickOutside.js";
    const dispatch = createEventDispatcher();

    export let state = false;

    const save = () => {
        state = !state;
        dispatch('saved');
    }
</script>



{#if state}
    <div class="box" use:clickOutside on:outclick={() => (state = false)}>
        Click outside me!
    </div>
{/if}


<style>
    .modal{
        background-color: rgba(0, 0, 0, 0.4);
        height: 100vh;
        width: 100vw;
    }

    .box {
        --width: 100px;
        --height: 100px;
        position: absolute;
        width: var(--width);
        height: var(--height);
        left: calc(50% - var(--width) / 2);
        top: calc(50% - var(--height) / 2);
        display: flex;
        align-items: center;
        padding: 8px;
        border-radius: 4px;
        background-color: #ff3e00;
        color: #fff;
        text-align: center;
        font-weight: bold;
    }
</style>