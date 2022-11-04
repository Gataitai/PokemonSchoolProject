<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let state = false;
    export let title = "";
    export let saveText = "Save changes";
    export let saveColor = "btn-primary";

    const toggle = () => {
        state = !state;
    }

    const save = () => {
        state = !state;
        dispatch('saved');
    }
</script>

<div class="modal {state ? 'show' : ''}" style="display: {state ? 'block' : 'none'}">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" on:click={toggle}></button>
            </div>
            <div class="modal-body">
                <slot>

                </slot>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" on:click={toggle}>Close</button>
                <button type="button" class="btn {saveColor}" on:click={save}>{saveText}</button>
            </div>
        </div>
    </div>
</div>

<style>
    .modal{
        background-color: black;
        background-color: rgba(0, 0, 0, 0.4);
    }
</style>