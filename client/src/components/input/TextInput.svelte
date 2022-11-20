<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    export let placeholder = "Type here";

    let text;
    const dispatchText = () => {
        dispatch('textTyped', {
            text: text
        });
    }
</script>

<input on:keyup={dispatchText} bind:value={text} type="text" class="form-control" placeholder="{placeholder}">

<style>
    input[type=text] {
        background-color: var(--bg-tertiary);
        height: 2rem;
        width: 100%;
        border: none;
        font-size: 2rem;
        flex: 1;
        color: var(--text-primary);
        border-radius: .5rem;
    }

    input:focus {
        outline: none;
    }
</style>