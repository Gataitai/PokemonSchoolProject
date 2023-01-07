<script>
    import {token} from '../stores/auth.js';
    import TextInput from "../components/input/TextInput.svelte";
    import UserIcon from "../icons/UserIcon.svelte";
    import PasswordIcon from "../icons/PasswordIcon.svelte";
    import router from 'page';

    let username = '';
    let password = '';

    const updateUsername = (event) => {
        username = event.detail.text;
    }

    const updatePassword = (event) => {
        password = event.detail.text;
    }

    async function login() {
        const response = await fetch('http://localhost:3001/auths', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (data.error) {
            // handle error
        } else {
            token.set(data.token);
            router("/")
        }
    }

</script>

<form class="form" on:submit|preventDefault={login}>
    <div class="input">
        <UserIcon/>
        <TextInput placeholder="Username" on:textTyped={updateUsername}/>
    </div>

    <div class="input">
        <PasswordIcon/>
        <TextInput password placeholder="Password" on:textTyped={updatePassword}/>
    </div>


    <button class="submit" type="submit">Signup</button>
</form>

<style>
    .form{
        position: absolute;
        left: 0;
        right: 0;
        top: 50vh;
        margin: auto;
        width: 20vw;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .input{
        display: flex;
        gap: 1rem;
        filter: grayscale(100%);
    }

    .submit{
        font-weight: bold;
        color: var(--bg-primary);
        height: 3rem;
        border-radius: .5rem;
        border: none;
        background-color: #86ef86;
        transition: var(--transition-speed);
    }

    .submit:hover{
        cursor: pointer;
        background-color: #5fa45f;
    }
</style>



