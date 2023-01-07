<script>
    import jwt from 'jwt-decode';
    import {token} from "../stores/auth";
</script>

{#if $token}
    token: {$token}<br>
    name: {jwt($token).username}
{/if}


<style>

</style>