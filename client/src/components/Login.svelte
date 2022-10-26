<script>
    import { getUserDetails } from '../stores/auth';
    import { store } from '../stores/auth';

    let username = '';
    let password = '';
    let error = ''

    async function login() {
        const login = {
            username,
            password
        }

        fetch('http://localhost:3001/auths',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(login),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
        })
            .catch((error) => {
                console.log('Error:', error);
            });
        // const user = await getUserDetails( username, password )

        // if ( user ) {
        //     console.log(user)
        //     $store = user
        //     if ( error ) error = ''
        // }
        // else {
        //     error = 'Incorrect username and password.'
        //     console.log("Incorrect username and password.")
        // }

    }

</script>

<form on:submit|preventDefault={login} class="flex mx-auto col-6">

    <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input class="form-control" id="username" bind:value={username} />
    </div>

    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input class="form-control" id="password" bind:value={password} />
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
    <div id="error_message" class="text-danger">
        <small>{error}</small>
    </div>

</form>