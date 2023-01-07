<script>
  import router from 'page';

  import Auctions from "./pages/Auctions.svelte";
  import Pokemons from "./pages/Pokemons.svelte";
  import Detail from "./pages/Detail.svelte"
  import Login from "./pages/Login.svelte";
  import Signup from "./pages/Signup.svelte";
  import Nav from "./components/navigation/Nav.svelte";
  import Home from "./pages/Home.svelte";
  import Account from "./pages/Account.svelte";

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

  router('/signup', (ctx) => {
    page = Signup;
    currentRoute = ctx.pathname;
  });

  router('/account', (ctx) => {
    page = Account;
    currentRoute = ctx.pathname;
  });

  router('/detail/:id', (ctx) => {
    page = Detail;
    currentRoute = ctx.pathname;
    id = ctx.params.id;
  });

  router.start();
</script>

<Nav active="{currentRoute}"/>
<main>
  <svelte:component this={page} {id} />
</main>

<style>
  main{
    padding: 8rem 3rem 3rem 3rem;
  }
</style>
