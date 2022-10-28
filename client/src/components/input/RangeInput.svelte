<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let number = 1000;

    const dispatchRange = () => {
        dispatch('rangeSelected', {
            number: number
        });
    }
</script>

<div class="card">
    <div class="card-header">
        <slot></slot>
    </div>
    <div class="card-body">
        <div class="input-group mb-3">
            <span class="input-group-text">0</span>
            <div class="form-control">
                to
            </div>
            <span class="input-group-text">{number}</span>
        </div>
        <input bind:value={number} on:change={dispatchRange} type="range" min="0" max="1000" class="form-range">
    </div>
</div>


<style>
    .form-control{
        text-align: center;
    }
</style>