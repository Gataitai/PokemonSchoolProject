<script>
    import {createEventDispatcher} from 'svelte';

        const dispatch = createEventDispatcher();

    export let placeholder = "Type here";
    export let password;

    let input;
    const dispatchText = () => {
        let text = input;
        if(!input){
            text = "EMPTY";
        }
        dispatch('textTyped', {
            text: text
        });
    }
</script>

{#if password}
    <input on:keyup={dispatchText} bind:value={input} type="password" class="form-control" placeholder="{placeholder}">
    {:else}
    <input on:keyup={dispatchText} bind:value={input} type="text" class="form-control" placeholder="{placeholder}">
{/if}


<style>
    input {
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