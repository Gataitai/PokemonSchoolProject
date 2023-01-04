<script>
  import router from 'page';
  import Home from "./pages/Home.svelte";
  import Auctions from "./pages/Auctions.svelte";
  import Pokemons from "./pages/Pokemons.svelte";
  import Login from "./pages/Login.svelte";
  import Header from "./components/nav/Header.svelte";

  let currentRoute;
  let page;
  let params = {};

  router('/', (ctx) => {
    page = Home;
    currentRoute = ctx.pathname;
  });

  router('/auctions', (ctx) => {
    page = Auctions;
    const qp = new URLSearchParams(ctx.querystring);
    params.page = qp.get('page') || 1;
    params.pageSize = qp.get('pageSize') || 24;
    currentRoute = ctx.pathname;
  });

  router('/pokemons', (ctx) => {
    page = Pokemons;
    currentRoute = ctx.pathname;
  });

  router('/login', (ctx) => {
    page = Login;
    currentRoute = ctx.pathname;
  });

  // router('/detail/:id', (ctx) => {
  //   page = Detail;
  //   currentRoute = ctx.pathname;
  //   id = ctx.params.id;
  // });

  router.start();

</script>

<Header active={currentRoute}/>

<main>
  <svelte:component this={page} {params} />
</main>

<style>
  main{
    padding: 8rem 3rem 3rem 3rem;
  }
</style>
