<script>
    import { createEventDispatcher } from 'svelte';
    import { clickOutside } from "../util/clickOutside.js";
    import CloseIcon from "../icons/CloseIcon.svelte";
    const dispatch = createEventDispatcher();

    let state = false;

    export function toggle(){
        state = !state;
    }

    export let title = "Modal";

    const save = () => {
        state = !state;
        dispatch('saved');
    }

    function disableScroll() {
        document.body.classList.add("stop-scrolling");
    }

    function enableScroll() {
        document.body.classList.remove("stop-scrolling");
    }

    //stop scrolling when modal is open
    $: {
        if(state){
            disableScroll();
        }else{
            enableScroll();
        }
    }

    const onKeyPress = e => {
        if (e.charCode === 27 || e.charCode === 13){
            toggle();
        }
    };

</script>

{#if state}
    <div class="modal" >

        <div class="modal-content" on:keypress={onKeyPress} use:clickOutside on:outclick={() => (state = false)}>
            <div class="modal-header">
                <div class="modal-title">
                    <h4>{title}</h4>
                </div>

                <div on:click={toggle} class="modal-close">
                    <CloseIcon/>
                </div>
            </div>

            <div class="modal-body">
                <slot></slot>
            </div>
        </div>

    </div>
{/if}


<style>

    ::-webkit-scrollbar {
        width: 1.8rem;
    }

    ::-webkit-scrollbar-track {
        border-left: 1rem var(--bg-tertiary) solid;
    }

    ::-webkit-scrollbar-thumb {
        border-left: 1rem var(--bg-tertiary) solid;
    }

    .modal {
        position: fixed;
        z-index: 200;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        background-color: rgba(0,0,0,.5);
        backdrop-filter: blur(5px);
    }

    /* Modal Content */
    .modal-content {
        background-color: var(--bg-tertiary);
        margin: auto;
        width: 50vw;
        border-radius: .5rem;
    }

    .modal-header{
        display: flex;
        width: 50vw;
        height: 5rem;

        background-color: var(--bg-primary);
        border-radius: .5rem .5rem 0 0;
    }

    .modal-title{
        display: flex;
        margin-left: 2rem;
        color: var(--text-primary);
        align-items: center;
        font-size: 2rem;
        letter-spacing: 0.1ch;
    }

    /* The Close Button */
    .modal-close {
        width: 5rem;
        height: 5rem;
        margin-left: auto;

        display: flex;
        justify-content: center;
        align-items: center;

        color: var(--text-primary);
        filter: grayscale(100%) opacity(0.7);
        transition: var(--transition-speed);
    }

    .modal-close:hover{
        border-top-right-radius: .5rem;
        background-color: var(--bg-secondary);
        filter: grayscale(0%) opacity(1);
        cursor: pointer;
    }

    .modal-body{
        display: flex;
        padding: 2rem;
        max-height: 50vh;
        color: var(--text-primary);
        overflow-y: auto;
    }

    @media only screen and (max-width: 1800px) {

        .modal-content {
            width: 80vw;
        }

        .modal-header{
            width: 80vw;
        }

        .modal-body{
            max-height: 80vh;
        }
    }

</style>