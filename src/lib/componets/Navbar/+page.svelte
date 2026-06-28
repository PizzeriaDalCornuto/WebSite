<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";

  let menuOpen = false;

  const links = [
    { href: `${base}/`, label: "Home" },
    { href: `${base}/menu`, label: "Menu" },
    { href: `${base}/contatti`, label: "Contatti" },
  ];

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<nav aria-label="Navigazione principale">
  <div class="inner">
    <a class="logo" href="{base}/" aria-label="Dal Cornuto - Home">
      <span class="logo-dal">DAL</span>
      <span class="logo-cornuto">
        <span class="shine-layer" aria-hidden="true"></span>
        CORNUTO
      </span>
    </a>

    <button
      class="ham"
      on:click={toggleMenu}
      aria-expanded={menuOpen}
      aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
      aria-controls="main-menu"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>

    <ul class="menu" id="main-menu" class:open={menuOpen}>
      {#each links as link}
        <li>
          <a
            href={link.href}
            class:active={$page.url.pathname === link.href}
            aria-current={$page.url.pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    inset: 0 0 auto;
    z-index: 200;
    background: rgba(255, 255, 255, 0.95);
    border-bottom: 1px solid var(--color-brand-border);
    backdrop-filter: blur(16px);
  }

  .inner {
    width: 100%;
    max-width: var(--site-max-w);
    margin: 0 auto;
    padding: 0 var(--site-px);
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 0;
  }

  .logo {
    font-family: "Anton", sans-serif;
    font-size: 1.65rem;
    letter-spacing: var(--tracking-wide);
    text-decoration: none;
    white-space: nowrap;
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    perspective: 1000px;
    position: relative;
    transition: transform var(--duration-medium) var(--ease-base);
  }

  .logo:hover {
    transform: scale(1.05);
  }

  .logo:focus-visible {
    outline: 2px solid var(--color-brand);
    outline-offset: 4px;
    border-radius: 4px;
  }

  .logo-dal {
    color: var(--color-text-heading);
    font-weight: 400;
    text-shadow:
      2px 2px 4px rgba(0, 0, 0, 0.1),
      0 0 10px rgba(255, 255, 255, 0.3);
    background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 50%, #2d2d2d 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .logo-cornuto {
    position: relative;
    font-weight: 900;
    color: var(--color-brand);
    transform-style: preserve-3d;
    animation: pulse-glow 2s ease-in-out infinite;
  }

  .shine-layer {
    position: absolute;
    top: -2px;
    left: -10%;
    width: 30%;
    height: 120%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.7) 50%,
      transparent 100%
    );
    transform: skewX(-20deg);
    animation: shine-sweep 3s ease-in-out infinite;
    pointer-events: none;
    filter: blur(2px);
    mix-blend-mode: overlay;
  }

  @keyframes pulse-glow {
    0%, 100% {
  text-shadow: 
    0 1px 0 rgb(245, 120, 120),
    0 2px 0 rgb(220, 80, 80),
    0 3px 0 rgb(190, 40, 40),
    0 4px 0 rgb(155, 15, 15),
    0 5px 0 rgb(110, 5, 5),
    0 6px 1px rgba(0,0,0,.1),
    0 0 5px rgba(0,0,0,.1),
    0 1px 3px rgba(0,0,0,.3),
    0 3px 5px rgba(0,0,0,.2),
    0 5px 10px rgba(0,0,0,.25),
    0 10px 10px rgba(0,0,0,.2),
    0 20px 20px rgba(0,0,0,.15),
    0 0 8px rgba(255, 215, 0, 0.6),
    0 0 16px rgba(255, 215, 0, 0.4),
    0 0 24px rgba(255, 215, 0, 0.2);
}
50% {
  text-shadow: 
    0 1px 0 rgb(121, 15, 15),
    0 2px 0 rgb(235, 107, 107),
    0 3px 0 rgb(164, 26, 26),
    0 4px 0 rgb(160, 15, 15),
    0 5px 0 rgb(115, 5, 5),
    0 6px 1px rgba(0,0,0,.1),
    0 0 5px rgba(0,0,0,.1),
    0 1px 3px rgba(0,0,0,.3),
    0 3px 5px rgba(0,0,0,.2),
    0 5px 10px rgba(0,0,0,.25),
    0 10px 10px rgba(0,0,0,.2),
    0 20px 20px rgba(0,0,0,.15),
    0 0 16px rgba(255, 165, 0, 0.9),
    0 0 28px rgba(255, 165, 0, 0.6),
    0 0 40px rgba(255, 165, 0, 0.3);
}

  }

  @keyframes shine-sweep {
    0% {
      left: -30%;
    }
    20% {
      left: 100%;
    }
    100% {
      left: 100%;
    }
  }

  .menu {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }

  .menu a {
    font-family: "DM Sans", sans-serif;
    font-size: var(--font-size-label);
    letter-spacing: var(--tracking-wider);
    text-transform: uppercase;
    color: var(--color-text-body);
    text-decoration: none;
    position: relative;
    transition: color var(--duration-medium) var(--ease-base);
  }

  .menu a:focus-visible {
    outline: 2px solid var(--color-brand);
    outline-offset: 4px;
    border-radius: 4px;
  }

  .menu a::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-brand);
    transition: width var(--duration-slow) var(--ease-base);
  }

  .menu a:hover,
  .menu a.active {
    color: var(--color-brand);
  }

  .menu a.active::after,
  .menu a:hover::after {
    width: 100%;
  }

  .ham {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
  }

  .ham:focus-visible {
    outline: 2px solid var(--color-brand);
    outline-offset: 2px;
    border-radius: 4px;
  }

  .ham span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--color-text-body);
    transition:
      transform var(--duration-medium) var(--ease-base),
      opacity var(--duration-medium) var(--ease-base);
  }

  @media (max-width: 768px) {
    .inner {
      padding: 0 var(--site-px);
    }

    .logo {
      font-size: 1.5rem;
      gap: 0.35rem;
    }

    .ham {
      display: flex;
      z-index: 210;
    }

    .menu {
      display: flex;
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      width: 100%;
      flex-direction: column;
      gap: 0;
      background: var(--color-surface);
      padding: 0;
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.14);
      margin: 0;
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transform: translateY(-10px);
      transition:
        max-height var(--duration-slow) var(--ease-base),
        opacity var(--duration-medium) var(--ease-base),
        transform var(--duration-slow) var(--ease-base);
      box-sizing: border-box;
    }

    .menu.open {
      max-height: 320px;
      opacity: 1;
      transform: translateY(0);
    }

    .menu li {
      width: 100%;
    }

    .menu a {
      display: block;
      padding: 1rem 1.5rem;
    }

    .menu a::after {
      bottom: 0px;
    }
  }

  @media (max-width: 480px) {
    .inner {
      padding: 0 0.75rem;
      height: 70px;
    }

    .logo {
      font-size: 1.3rem;
      gap: 0.3rem;
    }

    .ham span {
      width: 20px;
    }

    .menu a {
      padding: 0.875rem 1.25rem;
    }
  }
</style>
