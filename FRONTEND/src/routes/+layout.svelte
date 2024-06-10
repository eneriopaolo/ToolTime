<script>
    import {onMount} from "svelte";
    
    const nonAuthRoutes = ['/'];

    onMount(() => {
        console.log("test");
        //TODO redirect user if token is null or invalid
    })
</script>

<div class="mainContainer">
    <slot/>
</div>

<style>
    .mainContainer {
        min-height: 100vh;
        background: linear-gradient(to right, #0000FF, #00FFFF);
        color: #FFFFFF;
        position: relative;
        display: flex;
        flex-direction: column;
    }
</style>