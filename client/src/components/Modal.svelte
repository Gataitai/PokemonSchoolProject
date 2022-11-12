<script>
    import { createEventDispatcher } from 'svelte';
    import { clickOutside } from "../util/clickOutside.js";
    const dispatch = createEventDispatcher();

    export let state = true;

    const save = () => {
        state = !state;
        dispatch('saved');
    }
</script>



{#if state}
    <div class="modal">

        <!-- Modal content -->
        <div class="modal-content" use:clickOutside on:outclick={() => (state = false)}>
            <div class="modal-header">
                test
            </div>
            <p>Some text in the Modal..</p>
        </div>

    </div>
{/if}


<style>
    .modal {
        position: fixed; /* Stay in place */
        z-index: 200; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        background-color: rgba(0,0,0,.5); /* Black w/ opacity */
    }

    /* Modal Content */
    .modal-content {
        background-color: #fefefe;
        margin: auto;
        width: 50vw;
    }

    .modal-header{
        position: relative;
        display: flex;
        width: 50vw;
        height: 5rem;
        background-color: var(--bg-primary);
    }

    /* The Close Button */
    .close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }

</style>