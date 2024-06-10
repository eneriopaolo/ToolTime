<script>
    let email = "";
    let password = "";
    let authenticating = false;
    let errMsg = "";

    async function handleLogin() {
        authenticating = true;
        console.log("logging in")
    }
</script>

<div class="authContainer">
    <form>
        <h1>Login</h1>
        <label>
            <p class={email ? "above" : "center"}>Email</p>
            <input 
            bind:value={email}
            type="email" 
            placeholder="Email"/>
        </label>
        <label>
            <p class={password ? "above" : "center"}>Password</p>
            <input 
            bind:value={password}
            type="password"
            placeholder="Password"/>
        </label>
        {#if errMsg}
            <p class="error">The information you have entered is incorrect</p>
        {/if}
        <button on:click={handleLogin} type="button" class="submitBtn">
            {#if authenticating}
                <i class="fa-solid fa-spinner spin"/>
            {:else}
                Login
            {/if}
        </button>
    </form>
    <div class="options">
        <p>Or</p>
        <div>
            <p>Don't have an account?</p>
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <p on:click={() => {window.location.href="/register"}} on:keydown={() => {}} id="register">Register</p>
        </div>
    </div>
</div>

<style>
    .authContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        padding: 24px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    form, .options {
        width: 400px;
        max-width: 100%;
        margin: 0 auto;
    }

    form label {
        position: relative;
        border: 1px solid navy;
    }

    form label:focus-within {
        border-color: blue;
    }
    
    form input {
        width: 100%;
        border: none;
        background: transparent;
        color: #FFFFFF;
        padding: 14px;
    }

    form input:focus {
        border: none;
        outline: none; 
    }

    form input::placeholder {
        color: #ADD8E6;
    }

    form button {
        background: navy;
        color: #FFFFFF;
        border: none;
        padding: 14px 0;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        display: grid;
        place-items: center;
    }

    form button:hover {
        background: blue;
    }

    h1 {
        text-align: center;
        font-size: 3rem;
    }
    
    .above, .center {
        position: absolute;
        transform: translateY(-50%);
        pointer-events: none;
        color: #FFFFFF;
        border-radius: 4px;
        padding: 0 6px;
        font-size: 0.8rem;
    }

    .above {
        top: 0;
        left: 14px;
        background: navy;
        border: 1px solid blue;
        font-size: 0.7 rem;
    }

    .center {
        top: 50%;
        left: 6px;
        border: 1px solid transparent;
        opacity: 0;
    }

    .error {
        color: coral;
        font-size: 0.7rem;
        text-align: center;
    }

    .options {
        padding: 14px 0px;
        overflow: hidden;
        font-size: 0.9rem;
    }

    .options > p {
        position: relative;
        text-align: center;
        width: fit-content;
        margin: 0 auto;
        padding: 0 8px;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .options > p::after, .options >p::before {
        position: absolute;
        content: "";
        top: 50%;
        transform: translateY(-50%);
        width: 100vw;
        height: 1.5px;
        background: #FFFFFF;
    }

    .options > p::after {
        right: 100%;
    }

    .options > p::before {
        left: 100%;
    }

    .options div {
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
    }

    .options div p:last-of-type {
        color: skyblue;
        cursor: pointer;
    }

    #register {
        color: navy;
        font-weight: bold;
    }

    .spin {
        animation: spin 2s infinite;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>