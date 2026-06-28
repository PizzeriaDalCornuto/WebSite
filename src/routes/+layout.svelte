<script>
  import Navbar from '../lib/componets/Navbar/+page.svelte'
  import Footer from '../lib/componets/Footer/+page.svelte'
  import '../app.css';
</script>

<div class="app-shell ByNickolas">
  <Navbar />

  <!-- svelte-ignore slot_element_deprecated -->
  <main>
    <slot/>
  </main>

  <Footer />
</div>

<style>
  :global(body) {
    margin: 0;
    min-height: 100vh;
    font-family: 'Inter', system-ui, sans-serif;
    background: #faf4ee;
    color: #1b1210;
  }

  :global(h1, h2, h3, h4, h5, h6, strong, .tag, .eyebrow) {
    font-family: 'Playfair Display', serif;
  }

  :global(*) {
    box-sizing: border-box;
  }

  .app-shell {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    padding: 70px 0 3rem;
  }

  @media (max-width: 720px) {
    main {
      padding: 0 0 2rem;
    }
  }
</style>