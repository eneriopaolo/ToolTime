<script>
    import { registerUser } from "../lib/userauth.fetch";

    let email = "";
    let name = "";
    let municipality = "";
    let barangay = "";
    let houseNumber = "";
    let password = "";
    let confirmPassword = "";
    let registering = false;

    async function handleRegister() {
        registering = true;
        const response = await registerUser(email, name, municipality, barangay, houseNumber, password);
        registering = false;
    }
</script>

<div class="authContainer">
    <form>
        <h1>Register</h1>
        <label>
            <p class={email ? "above" : "center"}>Email</p>
            <input 
            bind:value={email}
            type="email" 
            placeholder="Email"/>
        </label>
        <label>
            <p class={name ? "above" : "center"}>Full Name</p>
            <input 
            bind:value={name}
            type="text" 
            placeholder="Full Name"/>
        </label>
        <label>
            <p class={municipality ? "above": "center"}>Municipality</p>
            <select class={municipality ? "": "empty"}
            bind:value={municipality}
            name="municipality">
                <option value="" disabled selected>Municipality</option>
                <option value="Alaminos">Alaminos</option>
                <option value="Bay">Bay</option>
                <option value="Biñan">Biñan</option>
                <option value="Cabuyao">Cabuyao</option>
                <option value="Calamba">Calamba</option>
                <option value="Calauan">Calauan</option>
                <option value="Cavinti">Cavinti</option>
                <option value="Famy">Famy</option>
                <option value="Kalayaan">Kalayaan</option>
                <option value="Liliw">Liliw</option>
                <option value="Los Baños">Los Baños</option>
                <option value="Luisiana">Luisiana</option>
                <option value="Lumban">Lumban</option>
                <option value="Mabitac">Mabitac</option>
                <option value="Magdalena">Magdalena</option>
                <option value="Majayay">Majayay</option>
                <option value="Nagcarlan">Nagcarlan</option>
                <option value="Paete">Paete</option>
                <option value="Pagsanjan">Pagsanjan</option>
                <option value="Pakil">Pakil</option>
                <option value="Pangil">Pangil</option>
                <option value="Pila">Pila</option>
                <option value="Rizal">Rizal</option>
                <option value="San Pablo">San Pablo</option>
                <option value="San Pedro">San Pedro</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Santa Maria">Santa Maria</option>
                <option value="Santa Rosa">Santa Rosa</option>
                <option value="Siniloan">Siniloan</option>
                <option value="Victoria">Victoria</option>
            </select>
        </label>
        <label>
            <p class={barangay ? "above": "center"}>Barangay</p>
            <select class={barangay ? "": "empty"}
            bind:value={barangay}
            name="barangay">
                <option value="" disabled selected>Barangay</option>
                <option value="Pulo">Pulo</option>
            </select>
        </label>
        <label>
            <p class={houseNumber ? "above" : "center"}>House No.</p>
            <input 
            bind:value={houseNumber}
            type="text" 
            placeholder="House No."/>
        </label>
        <label>
            <p class={password ? "above" : "center"}>Password</p>
            <input 
            bind:value={password}
            type="password"
            placeholder="Password"/>
        </label>
        <label>
            <p class={confirmPassword ? "above" : "center"}>Confirm Password</p>
            <input 
            bind:value={confirmPassword}
            type="password"
            placeholder="Confirm Password"/>
        </label>
        <button on:click={handleRegister} type="submit" class="submitBtn">
            {#if registering}
                <i class="fa-solid fa-spinner spin"/>
            {:else}
                Register
            {/if}
        </button>
    </form>
    <div class="options">
        <p>Or</p>
        <div>
            <p>Already have an account?</p>
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <p on:click={() => {window.location.href="/"}} on:keydown={() => {}} id="login">Login</p>
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
    
    form input, form select {
        width: 100%;
        border: none;
        background: transparent;
        color: #FFFFFF;
        padding: 14px;
    }

    form label select option:first-child {
        display: none;
    }

    form label select option {
        color: black;
        font-weight: bold;
    }

    form input:focus {
        border: none;
        outline: none; 
    }

    form input::placeholder, .empty{
        color: #ADD8E6;
        opacity: .75;
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

    #login {
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