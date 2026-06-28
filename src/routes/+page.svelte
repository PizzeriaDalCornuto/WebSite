<script lang="ts">
  import MenuShowcase from "../lib/componets/MenuShowcase/+page.svelte";
  import { base } from "$app/paths";
</script>

<header class="hero" aria-label="Benvenuto in Pizzeria Dal Cornuto">
  <div class="hero__bg" aria-hidden="true">
    <img
      src="{base}/asset/background/home.jpeg"
      alt=""
      width="1920"
      height="1080"
      loading="eager"
      decoding="async"
      fetchpriority="high"
    />
  </div>

  <div class="hero__inner">
    <div class="hero__copy">
      <p class="hero__eyebrow">Pizzeria Dal Cornuto · Torino</p>

      <h1 class="hero__title">
        Pizza artigianale,
        <em class="hero__title-em">sapore vero</em>
      </h1>

      <p class="hero__description">
        Impasti lenti, ingredienti freschi e servizio veloce: da noi ordini e
        ritiri o ricevi a domicilio con un solo squillo.
      </p>

      <nav class="hero__actions" aria-label="Azioni principali">
        <a class="btn btn--primary" href="{base}/menu">Scopri il menu</a>
        <a class="btn btn--outline" href="{base}/contatti">Chiama per asporto</a
        >
      </nav>

      <p class="hero__note">
        Chiama ora per prenotare: asporto, ritiro in negozio o consegna a
        domicilio a Torino.
      </p>
    </div>

    <aside class="hero__panel" aria-label="Pizza in evidenza">
      <article class="panel-card">
        <figure class="panel-card__image-box">
          <img
            src="{base}/asset/menushowcase/marinara.jpeg"
            alt="Margherita classica"
            width="200"
            height="200"
            loading="eager"
            decoding="async"
          />
        </figure>

        <div class="panel-card__info-box">
          <span class="panel-card__tag">Specialità</span>
          <h2 class="panel-card__name">Marinara</h2>
          <p class="panel-card__description">
            pomodoro, olio all'aglio, pomodorini rossi e gialli e origano
          </p>
        </div>
      </article>
    </aside>
  </div>

  <div class="hero__wave" aria-hidden="true">
    <svg
      viewBox="0 0 1440 88"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      focusable="false"
      role="presentation"
    >
      <path
        d="M0,44 C360,88 720,0 1080,44 C1260,66 1380,22 1440,44 L1440,88 L0,88 Z"
        fill="var(--color-page-bg)"
      />
    </svg>
  </div>
</header>

<section class="section benefits">
  <div class="section__inner">
    <header class="section-head">
      <span class="eyebrow">Perché noi</span>
      <h2>Un'esperienza semplice e affidabile</h2>
      <p>
        Una pizzeria orientata al gusto autentico, con un design pulito e una
        navigazione chiara.
      </p>
    </header>

    <ul class="benefit-grid" role="list">
      <li>
        <article
          class="experience-card experience-card--impasto"
          style="background-image: linear-gradient(rgba(178, 13, 13, 0.28), rgba(0, 0, 0, 0.35)), url('{base}/asset/cards/impasto_semi_integrale.jpeg');"
        >
          <div class="experience-card__layer" aria-hidden="true"></div>
          <div class="experience-card__copy">
            <strong>Impasto naturale</strong>
            <p>48 ore di lievitazione con farine selezionate.</p>
          </div>
          <span class="experience-card__label">Impasto Semi Integrale</span>
        </article>
      </li>
      <li>
        <article
          class="experience-card experience-card--forno"
          style="background-image: linear-gradient(rgba(178, 13, 13, 0.22), rgba(0, 0, 0, 0.44)), url('{base}/asset/cards/forno_a_fiamma.jpeg');"
        >
          <div class="experience-card__layer" aria-hidden="true"></div>
          <div class="experience-card__copy">
            <strong>Forno</strong>
            <p>Cottura perfetta per una pizza croccante e morbida.</p>
          </div>
          <span class="experience-card__label">Forno A Fiamma</span>
        </article>
      </li>
      <li>
        <article
          class="experience-card experience-card--asporto"
          style="background-image: linear-gradient(rgba(178, 13, 13, 0.16), rgba(0, 0, 0, 0.38)), url('{base}/asset/cards/just_eat_bag.jpeg');"
        >
          <div class="experience-card__layer" aria-hidden="true"></div>
          <div class="experience-card__copy">
            <strong>Asporto facile</strong>
            <p>Chiama e ordina la tua pizza da ritirare in negozio.</p>
          </div>
          <span class="experience-card__label">Asporto</span>
        </article>
      </li>
    </ul>
  </div>
</section>

<section class="section MenuShowcase">
  <div class="section__inner">
    <MenuShowcase />
  </div>
</section>

<style>
  /* ============================================================
   LAYOUT HELPERS
   ============================================================ */

  .section__inner,
  .hero__inner {
    max-width: var(--site-max-w);
    margin-inline: auto;
    padding-inline: var(--site-px);
  }

  .section {
    background: var(--color-page-bg);
  }

  .section .section__inner {
    padding-block: var(--section-py);
  }

  /* ============================================================
   HERO
   ============================================================ */

  .hero {
    position: relative;
    overflow: hidden;
    max-width: var(--site-max-w);
    margin-inline: auto;
  }

  .hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--hero-overlay);
    pointer-events: none;
    z-index: 1;
  }

  .hero__bg {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .hero__bg img {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  .hero__inner {
    position: relative;
    z-index: 2;
    padding-block: 8rem 6rem;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    align-items: center;
    gap: 2rem;
  }

  .hero__wave {
    position: absolute;
    inset-block-end: -1px;
    inset-inline: 0;
    z-index: 3;
    line-height: 0;
    pointer-events: none;
  }

  .hero__wave svg {
    display: block;
    inline-size: 100%;
    block-size: var(--hero-wave-h);
  }

  /* ============================================================
   HERO — COPY
   ============================================================ */

  .hero__copy {
    position: relative;
    max-width: 56ch;
  }

  .hero__copy::before {
    content: "";
    position: absolute;
    inset-block-start: -4rem;
    inset-inline-start: -5rem;
    inline-size: 28rem;
    block-size: 28rem;
    border-radius: 30% 70% 60% 40% / 40% 30% 70% 60%;
    background: var(--hero-blob-color);
    filter: blur(48px);
    pointer-events: none;
    z-index: -1;
  }

  .hero__eyebrow {
    display: inline-block;
    margin-block-end: 1rem;
    padding-block: 0.3rem;
    padding-inline: 0.9rem;
    border-radius: var(--radius-pill);
    border: 1px solid var(--hero-eyebrow-border);
    background: var(--hero-eyebrow-bg);
    color: var(--hero-eyebrow-color);
    font-size: var(--font-size-label);
    font-weight: 600;
    letter-spacing: var(--tracking-wider);
    text-transform: uppercase;
  }

  .hero__title {
    margin: 0;
    font-size: var(--font-size-hero);
    line-height: var(--line-height-tight);
    color: var(--hero-text);
    text-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
  }

  .hero__title-em {
    display: block;
    font-style: normal;
    color: var(--hero-accent);
  }

  .hero__description {
    margin-block: 1.5rem 0;
    max-width: 44ch;
    color: var(--hero-text-muted);
    line-height: var(--line-height-body);
  }

  .hero__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-block-start: 2.5rem;
  }

  .hero__note {
    margin-block-start: 1.25rem;
    margin-block-end: 0;
    color: var(--hero-text-note);
    font-size: var(--font-size-small);
    font-weight: 600;
  }

  /* ============================================================
   HERO — PANEL
   ============================================================ */

  .hero__panel {
    display: grid;
    place-items: center;
    padding: 2rem 0;
  }

  /* ============================================================
   PANEL CARD
   ============================================================ */

  .panel-card {
    position: relative;
    width: min(100%, 300px);
    min-height: 280px;
  }

  .panel-card:hover .panel-card__image-box {
    transform: translateY(-6px) rotate(-3deg);
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.2);
  }

  .panel-card:hover .panel-card__info-box {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.14);
  }

  .panel-card__image-box {
    position: absolute;
    top: -30px;
    left: -30px;
    width: 160px;
    height: 160px;
    margin: 0;
    background: #fff9f7;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.15);
    border: 4px solid var(--color-surface);
    z-index: 2;
    transition: all 0.3s ease;
  }

  .panel-card__image-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .panel-card__info-box {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--color-surface);
    border-radius: 16px;
    padding: 1.5rem 1.5rem 1.5rem;
    padding-top: 100px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .panel-card__tag {
    display: inline-block;
    padding: 0.25rem 0.7rem;
    background: var(--color-brand-subtle);
    color: var(--color-brand);
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border-radius: 12px;
    margin-bottom: 0.6rem;
  }

  .panel-card__name {
    margin: 0 0 0.6rem;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text-heading);
    line-height: 1.2;
  }

  .panel-card__description {
    margin: 0;
    color: var(--color-text-body);
    line-height: 1.55;
    font-size: 0.85rem;
  }

  /* ============================================================
   BUTTONS
   ============================================================ */

  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-block: 0.95rem;
    padding-inline: 2rem;
    border-radius: var(--radius-pill);
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition-base);
  }

  .btn:hover {
    transform: translateY(-2px);
  }

  .btn--primary {
    background: var(--color-brand);
    color: var(--hero-text);
    box-shadow: var(--shadow-btn-primary);
  }

  .btn--primary:hover {
    background: var(--color-brand-hover);
    box-shadow: var(--shadow-btn-primary-hover);
  }

  .btn--outline {
    background: rgba(255, 255, 255, 0.08);
    border: 1.5px solid rgba(255, 255, 255, 0.6);
    color: var(--hero-text);
  }

  .btn--outline:hover {
    background: rgba(255, 255, 255, 0.16);
    border-color: var(--hero-text);
  }

  /* ============================================================
   SECTION HEAD
   ============================================================ */

  .section-head {
    margin-block-end: 2.5rem;
  }

  .section-head h2 {
    margin: 0.6rem 0 0;
    font-size: var(--font-size-section-h2);
    line-height: var(--line-height-tight);
    color: var(--color-text-heading);
  }

  .section-head p {
    margin-block-start: 0.75rem;
    color: var(--color-text-body);
    line-height: var(--line-height-body);
    max-width: 60ch;
  }

  .eyebrow {
    display: inline-block;
    color: var(--color-brand);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: var(--tracking-widest);
    text-transform: uppercase;
  }

  /* ============================================================
   BENEFIT GRID
   ============================================================ */

  .benefit-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.75rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* ============================================================
   EXPERIENCE CARDS
   ============================================================ */

  .experience-card {
    position: relative;
    overflow: hidden;
    min-block-size: 280px;
    border-radius: 30px;
    background-size: cover;
    background-position: center;
    box-shadow: var(--shadow-section-card);
    transition:
      transform var(--duration-slow) var(--ease-base),
      box-shadow var(--duration-slow) var(--ease-base);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.8rem;
  }

  .experience-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.16),
      rgba(16, 8, 5, 0.92)
    );
    pointer-events: none;
  }

  .experience-card::after {
    content: "";
    position: absolute;
    inset: 6px;
    border-radius: var(--radius-card-inner);
    border: 1px solid rgba(255, 255, 255, 0.45);
    pointer-events: none;
  }

  .experience-card:hover {
    transform: translateY(-6px) perspective(1000px) rotateX(3deg);
    box-shadow: 0 38px 100px rgba(0, 0, 0, 0.18);
  }

  .experience-card__layer {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at top left,
      rgba(255, 255, 255, 0.35),
      transparent 25%
    );
    pointer-events: none;
  }

  .experience-card__copy {
    position: relative;
    z-index: 1;
  }

  .experience-card__copy strong {
    display: block;
    margin-block-end: 0.75rem;
    font-size: 1.25rem;
    color: var(--hero-text);
  }

  .experience-card__copy p {
    margin: 0;
    color: rgba(255, 255, 255, 0.92);
    line-height: var(--line-height-relaxed);
  }

  .experience-card__label {
    position: relative;
    z-index: 1;
    display: inline-flex;
    margin-block-start: 1.4rem;
    padding-block: 0.6rem;
    padding-inline: 1rem;
    border-radius: var(--radius-pill);
    background: rgba(255, 255, 255, 0.14);
    color: var(--hero-text);
    font-size: 0.8rem;
    letter-spacing: var(--tracking-wide);
    text-transform: uppercase;
    border: 1px solid rgba(255, 255, 255, 0.25);
  }

  /* ============================================================
   MEDIA QUERIES
   ============================================================ */

  @media (width <= 980px) {
    .hero__inner {
      grid-template-columns: 1fr;
    }

    .benefit-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (width <= 768px) {
    .hero__inner {
      padding-block: 6rem 4rem;
      gap: 1.5rem;
    }

    .hero__copy {
      margin-top: 200px;
      max-width: none;
    }

    .hero__panel {
      display: none;
    }

    .hero__actions {
      flex-direction: column;
    }

    .hero__wave svg {
      block-size: calc(var(--hero-wave-h) * 0.6);
    }

    .panel-card {
      width: 100%;
      max-width: 320px;
    }

    .btn {
      inline-size: 100%;
      text-align: center;
    }

    .benefit-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .experience-card {
      min-block-size: 240px;
    }
  }

  @media (width <= 480px) {
    .hero__inner {
      padding-block: 5rem 3rem;
    }

    .panel-card {
      max-width: 100%;
      min-height: 260px;
    }

    .panel-card__image-box {
      width: 140px;
      height: 140px;
      top: -15px;
      left: -10px;
    }

    .panel-card__info-box {
      padding: 1.25rem 1.25rem 1.25rem;
      padding-top: 85px;
    }

    .panel-card__name {
      font-size: 1.15rem;
    }

    .panel-card__description {
      font-size: 0.82rem;
    }

    .experience-card {
      min-block-size: 200px;
      padding: 1.5rem;
    }
  }
</style>
