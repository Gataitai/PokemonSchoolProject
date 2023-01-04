<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let currentPage = 1;
    export let totalPages = 1;

    const dispatchPage = (page) => {
        currentPage = page;
        dispatch('page', {
            page: page
        });
    }

    const maxPageButtons = 10;
    let startIndex = 0;

    const handlePrevious = () => {
        if (currentPage > 1) {
            currentPage--;
            if (currentPage < startIndex + 1) {
                startIndex -= maxPageButtons;
            }
            dispatchPage(currentPage);
        }
    }

    const handleNext = () => {
        if (currentPage < totalPages) {
            currentPage++;
            if (currentPage > startIndex + maxPageButtons) {
                startIndex += maxPageButtons;
            }
            dispatchPage(currentPage);
        }
    }
</script>

<style>
    .paginator {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .page-button {
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 8px 16px;
        margin: 0 8px;
        cursor: pointer;
    }
    .page-button:hover {
        background-color: #eee;
    }
    .current-page {
        font-weight: bold;
    }
</style>

<div class="paginator">
    {#if currentPage > 1}
        <button class="page-button" on:click={handlePrevious}>
            Previous
        </button>
    {/if}
    {#each Array(totalPages) as _, i}
        {#if i >= startIndex && i < startIndex + maxPageButtons}
            <button
                    class:current-page={i + 1 === currentPage}
                    class="page-button"
                    on:click={() => dispatchPage(i + 1)}
                    value={i + 1}
            >
                {i + 1}
            </button>
        {/if}
    {/each}
    {#if currentPage < totalPages}
        <button class="page-button" on:click={handleNext}>
            Next
        </button>
    {/if}
</div>