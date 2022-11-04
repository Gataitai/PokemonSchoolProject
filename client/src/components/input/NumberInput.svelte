<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let number;

    const dispatchNumber = () => {
        dispatch('numberTyped', {
            number: number
        });
    }
</script>

<div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">$</span>
    <input on:keyup={dispatchNumber} bind:value={number} type="text" class="form-control" placeholder="Price">
    <span class="input-group-text">,00</span>
</div>


<style>

</style>