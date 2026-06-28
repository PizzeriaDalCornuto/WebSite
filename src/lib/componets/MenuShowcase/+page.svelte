<script lang="ts">
  import { base } from "$app/paths";
  import { onMount } from "svelte";
  import menuData from "$lib/menu_strutturato.json";

  type PizzaUI = {
    name: string;
    description: string;
    price: number;
    image: string;
  };

  const catToImg = (c: string) =>
    `${base}/asset/menushowcase/${c.toLowerCase().trim().replace(/\s+/g, "_")}.jpeg`;

  // Estrazione dati dal JSON (array costante, non è uno $state)
  const allPizzas: PizzaUI[] = Object.keys(menuData).flatMap((cat) => {
    const list = (menuData as any)[cat];
    return Array.isArray(list)
      ? list
          .filter((i) => i.nome && i.prezzo !== undefined)
          .map((i) => ({
            name: i.nome,
            description: i.descrizione ?? "Descrizione non disponibile",
            price: i.prezzo,
            image: catToImg(cat),
          }))
      : [];
  });

  // Inizializzazione dello stato delle pizze
  let pizzas = $state<PizzaUI[]>(allPizzas.slice(0, 4));
  
  // FIX: Usiamo il fallback dall'array costante 'allPizzas' invece di 'pizzas'
  // Questo evita il warning 'state_referenced_locally' e mantiene la reattività mutabile
  let selectedPizza = $state<PizzaUI>(allPizzas[0]);

  onMount(() => {
    pizzas = [...allPizzas].sort(() => Math.random() - 0.5).slice(0, 4);
    selectedPizza = pizzas[0]; // Qui la riassegnazione funziona perfettamente
  });

  const formatPrice = (p: number) =>
    p % 1 === 0 ? `€${p}` : `€${p.toFixed(2).replace(".", ",")}`;
</script>

{#if allPizzas.length > 0}
  <section class="menu-section" aria-labelledby="menu-heading">
      <header class="menu-head">
        <p class="menu-eyebrow">Il Nostro Menu</p>
        <h2 id="menu-heading" class="menu-title">Le pizze che amiamo</h2>
      </header>

      <ul class="menu-showcase" aria-label="Anteprima delle pizze in evidenza">
        {#each pizzas as pizza, i}
          {@const isSelected = selectedPizza.name === pizza.name}
          <li class="showcase-item">
            <button
              type="button"
              class="showcase-card"
              class:showcase-card--active={isSelected}
              style="background-image: url('{base}/asset/menushowcase/background.jpeg')"
              aria-expanded={isSelected}
              aria-label="{pizza.name}. {pizza.description}. Prezzo: {formatPrice(pizza.price)}"
              onclick={() => (selectedPizza = pizza)}
            >
              <img
                src={pizza.image}
                alt=""
                aria-hidden="true"
                class="showcase-card__bg"
                loading="lazy"
                decoding="async"
              />

              <div class="showcase-card__shine" aria-hidden="true"></div>

              <div class="showcase-card__overlay" aria-hidden="true"></div>

              <span class="showcase-card__index" aria-hidden="true">{i + 1}</span>

              <div class="showcase-card__info" aria-hidden={!isSelected}>
                <strong class="showcase-card__name">{pizza.name}</strong>
                <p class="showcase-card__desc">{pizza.description}</p>
                <data class="showcase-card__price" value={pizza.price}>
                  {formatPrice(pizza.price)}
                </data>
              </div>
            </button>
          </li>
        {/each}
      </ul>
  </section>
{/if}

<style>
  .menu-section {
    background: var(--color-page-bg);
  }
  .menu-head {
    margin-block-end: 2.5rem;
  }
  .menu-eyebrow {
    display: inline-block;
    color: var(--color-brand);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: var(--tracking-widest);
    text-transform: uppercase;
    margin: 0;
  }
  .menu-title {
    margin: 0.6rem 0 0;
    font-size: var(--font-size-section-h2);
    line-height: var(--line-height-tight);
    color: var(--color-text-heading);
  }

  /* LAYOUT DESKTOP */
  .menu-showcase {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: stretch;
    block-size: 380px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .showcase-item {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 72px;
    transition:
      flex-grow 0.55s cubic-bezier(0.4, 0, 0.2, 1),
      flex-basis 0.55s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .showcase-item:has(.showcase-card--active) {
    flex-grow: 1;
    flex-basis: 0;
  }

  .showcase-card {
    position: relative;
    overflow: hidden;
    border-radius: 28px;
    width: 100%;
    cursor: pointer;
    border: none;
    padding: 0;
    background-size: cover;
    background-position: center;
  }

  /* IMMAGINE DELLA PIZZA (ANIMATA) */
  .showcase-card__bg {
    position: absolute;
    inset: 0;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    object-fit: contain;
    display: block;
    pointer-events: none;
    z-index: 1;
    /* Bezier personalizzata per dare un effetto "elastico" e morbido */
    transition: transform 0.75s cubic-bezier(0.34, 1.56, 0.64, 1);
    transform: scale(1) rotate(0deg);
  }
  
  /* Micro-movimento preventivo quando passi sopra con il mouse */
  .showcase-card:hover .showcase-card__bg {
    transform: scale(1.04) rotate(-2deg);
  }

  /* ROTAZIONE E ZOOM QUANDO LA CARD È SELEZIONATA */
  .showcase-card--active .showcase-card__bg,
  .showcase-card--active:hover .showcase-card__bg {
    transform: scale(1.08) rotate(15deg);
  }

  /* FILTRO DI LUCENTEZZA */
  .showcase-card__shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.35) 0%,
      rgba(255, 255, 255, 0.15) 25%,
      rgba(255, 255, 255, 0) 60%
    );
    mix-blend-mode: overlay;
    pointer-events: none;
    z-index: 4;
    transition: opacity 0.55s ease, background 0.55s ease;
    opacity: 0.7;
  }

  .showcase-card:hover .showcase-card__shine {
    opacity: 1;
  }

  .showcase-card--active .showcase-card__shine {
    opacity: 1;
    background: 
      radial-gradient(
        circle at 50% 10%,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0) 70%
      ),
      linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0.1) 40%,
        rgba(255, 255, 255, 0) 70%
      );
  }

  .showcase-card__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.3) 60%,
      rgba(0, 0, 0, 0.15) 100%
    );
    pointer-events: none;
    z-index: 2;
  }

  /* ELEMENTI INTERNI */
  .showcase-card__index {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.55);
    color: #fff;
    font-size: 0.8rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    border: 1.5px solid rgba(255, 255, 255, 0.4);
  }
  
  .showcase-card__info {
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    right: 1.5rem;
    z-index: 5;
    color: #fff;
    opacity: 0;
    transform: translateY(8px);
    transition:
      opacity 0.3s ease 0.2s,
      transform 0.3s ease 0.2s;
    pointer-events: none;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
  }

  .showcase-card--active .showcase-card__info {
    opacity: 1;
    transform: translateY(0);
    white-space: normal;
    overflow: visible;
    pointer-events: auto;
  }
  .showcase-card__name {
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    margin-block-end: 0.4rem;
    line-height: 1.2;
  }
  .showcase-card__desc {
    margin: 0 0 0.75rem;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.5;
    max-width: 42ch;
  }
  .showcase-card__price {
    display: inline-block;
    background: var(--color-brand);
    color: #fff;
    font-size: 0.9rem;
    font-weight: 700;
    padding: 0.3rem 0.9rem;
    border-radius: var(--radius-pill);
  }

  /* TABLET */
  @media (max-width: 800px) {
    .menu-showcase {
      block-size: 300px;
      gap: 0.65rem;
    }
    .showcase-item {
      flex-basis: 52px;
    }
    .showcase-card {
      border-radius: 20px;
    }
    .showcase-card__name {
      font-size: 1rem;
    }
  }

  /* MOBILE */
  @media (max-width: 580px) {
    .menu-showcase {
      flex-direction: column;
      block-size: auto;
      gap: 0.6rem;
    }
    .showcase-item {
      flex-basis: 60px;
      flex-grow: 0;
      flex-shrink: 0;
      transition:
        flex-grow 0.55s cubic-bezier(0.4, 0, 0.2, 1),
        flex-basis 0.55s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .showcase-item:has(.showcase-card--active) {
      flex-grow: 0;
      flex-basis: 260px;
    }
    .showcase-card {
      border-radius: 16px;
      height: 100%;
    }
    .showcase-card__index {
      width: 1.6rem;
      height: 1.6rem;
      font-size: 0.7rem;
      top: 0.85rem;
      left: 0.85rem;
    }
    .showcase-card__info {
      bottom: 1rem;
      left: 1rem;
      right: 1rem;
    }
    .showcase-card__name {
      font-size: 1rem;
    }
  }
</style>