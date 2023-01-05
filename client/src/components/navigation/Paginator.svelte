<script>
    import { createEventDispatcher } from 'svelte';
    import ArrowRightIcon from "../../icons/ArrowRightIcon.svelte";
    import ArrowLeftIcon from "../../icons/ArrowLeftIcon.svelte";
    const dispatch = createEventDispatcher();

    let currentPage = 1;
    export const reset = () => {
        currentPage = 1;
        startIndex = 0;
    }
    export let totalPages;


    const dispatchPage = (page) => {
        document.body.scrollIntoView();
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

<div class="paginator">
    {#if currentPage > 1}
        <span class="page-button arrow" on:click={handlePrevious}>
            <ArrowLeftIcon/>
        </span>
    {/if}
    {#each Array(totalPages) as _, i}
        {#if i >= startIndex && i < startIndex + maxPageButtons}
            <span
                    class:current-page={i + 1 === currentPage}
                    class="page-button"
                    on:click={() => dispatchPage(i + 1)}
            >
                {i + 1}
            </span>
        {/if}
    {/each}
    {#if currentPage < totalPages}
        <span class="page-button arrow" on:click={handleNext}>
            <ArrowRightIcon/>
        </span>
    {/if}
</div>

<style>
    .paginator {
        margin-top: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5rem;
    }
    .page-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: var(--bg-secondary);
        border-radius: .5rem;
        color: var(--text-primary);
        height: 3rem;
        width: 3rem;
        cursor: pointer;
        font-weight: bold;
        font-size: .8rem;
    }

    .arrow{
        filter: grayscale(100%);
    }

    .page-button:hover {
        color: var(--hl-primary);
        filter: grayscale(0%) opacity(1);
    }
    .current-page {
        color: var(--hl-primary);
    }
</style>