<script>
  import router from 'page';
  import Home from "./pages/Home.svelte";
  import Auctions from "./pages/Auctions.svelte";

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
    params.pageCount = qp.get('pageCount') || 10;
    currentRoute = ctx.pathname;
  });

  // router('/detail/:id', (ctx) => {
  //   page = Detail;
  //   currentRoute = ctx.pathname;
  //   id = ctx.params.id;
  // });

  router.start();

</script>

<main>
  <svelte:component this={page} {params} />
</main>

<style>

</style>
