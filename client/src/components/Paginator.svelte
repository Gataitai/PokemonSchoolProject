<script>
    export let page
    export let totalPages
    export let onPageChange

    function getPageButtons() {
        const buttons = []
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(i)
        }
        return buttons
    }

    function getVisibleButtons() {
        const start = Math.max(1, page - 5)
        const end = Math.min(totalPages, start + 9)
        return getPageButtons().slice(start - 1, end)
    }
</script>

<div class="pagination">
    {#if page > 1}
        <button on:click={() => onPageChange(page - 1)}>
            Previous
        </button>
    {/if}
    {#each getVisibleButtons() as button}
        <button
                class:active={button === page}
                on:click={() => onPageChange(button)}
        >
            {button}
        </button>
    {/each}
    {#if page < totalPages}
        <button on:click={() => onPageChange(page + 1)}>
            Next
        </button>
    {/if}
</div>