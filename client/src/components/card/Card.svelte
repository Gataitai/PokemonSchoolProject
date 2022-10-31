<script>

</script>

<div class="card">
    <slot>
    </slot>
</div>


<style>
    .card{
        transition: all 0.2s ease-out;
    }

    .card:hover{
        transform: scale(1.02);
    }
</style>