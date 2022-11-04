<script>
  import router from 'page';

  import Home from "./pages/Home.svelte";
  import Auctions from "./pages/Auctions.svelte";
  import Pokemons from "./pages/Pokemons.svelte";
  import Detail from "./pages/Detail.svelte"
  import Header from "./components/Header.svelte";
  import Login from "./pages/Login.svelte";

  import {error} from "./stores/error.js";

  import Message from "./components/Message.svelte";

  let currentRoute;

  let page;
  let params;

  router('/', (ctx) => {
    page = Home;
    currentRoute = ctx.pathname;
  });

  router('/pokemons', (ctx) => {
    page = Pokemons;
    currentRoute = ctx.pathname;
  });

  router('/auctions', (ctx) => {
    page = Auctions;
    currentRoute = ctx.pathname;
  });

  router('/login', (ctx) => {
    page = Login;
    currentRoute = ctx.pathname;
  });

  router('/detail/:id', (ctx) => {
    page = Detail;
    currentRoute = ctx.pathname;
    params = ctx.params;
  });

  router.start();

  let errorMessage;

  const clear = () => {
    if($error != null){
      $error = null;
      errorMessage = null;
    }
  }

  $: if ($error) {
    errorMessage = $error;
    setTimeout(clear, 5000)
  }

</script>

<main>
  <Header active={currentRoute} />
  <svelte:component this={page} {params} />

  {#if errorMessage}
    <Message error="{errorMessage}"/>
  {/if}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

</style>
