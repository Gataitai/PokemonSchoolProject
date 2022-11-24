<script>
  import router from 'page';

  import Auctions from "./pages/Auctions.svelte";
  import Pokemons from "./pages/Pokemons.svelte";
  import Detail from "./pages/Detail.svelte"
  import Login from "./pages/Login.svelte";

  import {error} from "./stores/error.js";

  import Message from "./components/Message.svelte";
  import Nav from "./components/navigation/Nav.svelte";
  import Home from "./pages/Home.svelte";

  let currentRoute;

  let page;
  let id;

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
    id = ctx.params.id;
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
<Nav active="{currentRoute}"/>
<main>
  <svelte:component this={page} {id} />
</main>
{#if errorMessage}
  <Message error="{errorMessage}"/>
{/if}
<style>
  main{
    padding: 8rem 3rem 3rem 3rem;
  }
</style>
