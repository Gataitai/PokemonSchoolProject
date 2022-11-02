<script>
    import {token, payload} from '../stores/auth.js';
    import {error} from '../stores/error.js'
    import {post} from "../util/fetch.js";
    import decode from "jwt-decode";
    import router from 'page';

    let username = '';
    let password = '';

    async function login() {
        const login = {
            username,
            password
        }
        const response = await post("auths", login);
        if(response.error){
            $error = response.error;
        }
        else{
            $token = response.token;
            $payload = decode(response.token);
            router('/');
        }
    }

</script>

<div class="container flex mx-auto col-6">
    <div class="card">
        <form on:submit|preventDefault={login} class="m-5">
            <h1 class="text-center">
                Login
            </h1>

            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input class="form-control" id="username" bind:value={username} />
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input class="form-control" id="password" bind:value={password} />
            </div>

            <button type="submit" class="btn btn-primary">Login</button>

        </form>
    </div>
</div>


<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 90vh;
    }
</style>



