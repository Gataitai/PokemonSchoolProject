<script>
    import {token} from '../stores/auth.js';
    import TextInput from "../components/input/TextInput.svelte";
    import UserIcon from "../icons/UserIcon.svelte";
    import PasswordIcon from "../icons/PasswordIcon.svelte";
    import router from 'page';

    let username = '';
    let password = '';
    let password2 = '';
    let error;

    const updateUsername = (event) => {
        username = event.detail.text;
        error = '';
    }

    const updatePassword = (event) => {
        password = event.detail.text;
        error = '';
    }

    const updatePassword2 = (event) => {
        password2 = event.detail.text;
        error = '';
    }

    async function signup() {
        if(username === 'EMPTY' || !username){
            error = "Username is not filled in!"
            return;
        }
        if(!password){
            error = "You have to fill in a password!"
            return;
        }
        if(password !== password2){
            error = "Passwords don't match!"
            return;
        }
        const response = await fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (data.error) {
            error = data.error;
        } else {
            token.set(data.token);
            router("/account")
        }
    }

</script>

<form class="form" on:submit|preventDefault={signup}>
    <div class="input">
        <UserIcon/>
        <TextInput placeholder="Username" on:textTyped={updateUsername}/>
    </div>

    <div class="input">
        <PasswordIcon/>
        <TextInput password placeholder="Password" on:textTyped={updatePassword}/>
    </div>

    <div class="input">
        <PasswordIcon/>
        <TextInput password placeholder="Repeat password" on:textTyped={updatePassword2}/>
    </div>


    <button class="submit" type="submit">Signup</button>

    {#if error}
        <div class="error">
            {error}
        </div>
    {/if}
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

    .error{
        border-radius: .5rem;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--bg-primary);
        background-color: var(--hl-secondary);
    }
</style>



