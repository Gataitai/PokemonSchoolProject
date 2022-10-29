<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let text;

    const dispatchText = () => {
        dispatch('textTyped', {
            text: text
        });
    }
</script>

<div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">@</span>
    <input on:keyup={dispatchText} bind:value={text} type="text" class="form-control" placeholder="Name">
</div>


<style>

</style>