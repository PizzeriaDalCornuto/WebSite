import { chromium } from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const capturedData = [];
  
  // 1. Intercettiamo i dati dal WebSocket di Firebase
  page.on('websocket', ws => {
    console.log(`📡 WebSocket Connesso: ${ws.url()}`);
    ws.on('framereceived', frame => {
      const payloadString = frame.payload.toString();
      if (
        payloadString.includes('nome') || 
        payloadString.includes('prezzo') || 
        payloadString.includes('idCategoria') ||
        payloadString.includes('abbattuto')
      ) {
        try {
          capturedData.push(JSON.parse(payloadString));
        } catch (e) {
          capturedData.push({ rawText: payloadString });
        }
        console.log('🍕 Catturato frammento di database...');
      }
    });
  });
  
  console.log('🌐 Navigazione verso Pizzeria Roxy...');
  await page.goto('https://pizzeria-roxy.web.app/');
  await page.waitForTimeout(5000);

  console.log('♿ Attivazione modalità accessibilità di Flutter...');
  const accessibilityButton = await page.locator('flt-semantics-placeholder, [role="button"]').first();
  if (accessibilityButton) {
    await accessibilityButton.click({ force: true }).catch(() => {});
    await page.waitForTimeout(2000);
  }

  // Lista ordinata delle categorie da visitare una per una
  const categorie = [
    'Classiche', 'Gourmet', 'Vegane', 'Cornicione', 'Focacce', 
    'Farinate', 'Chiacchere', 'Fritti', 'Panuozzi', 'Fritte', 
    'Dolci', 'Bevande', 'Calzoni', 'Tegamino', 'Birre'
  ];

  // Giriamo la rotella all'inizio per assicurarci che la home carichi i primi elementi
  await page.mouse.move(600, 400);

  for (const cat of categorie) {
    console.log(`\n--- 📂 PROVO AD ENTRARE NELLA SEZIONE: ${cat} ---`);
    
    // Cerchiamo il bottone della categoria nella Home (insensibile a maiuscole/minuscole)
    const bottoneCategoria = page.locator(`text=${cat}`).first();
    
    // Se non lo vede subito, prova a fare un piccolo scroll sulla Home per cercarlo
    if (!(await bottoneCategoria.isVisible())) {
      console.log(`🔍 Bottone "${cat}" non visibile, scrollo la Home per cercarlo...`);
      await page.mouse.wheel(0, 400);
      await page.waitForTimeout(1500);
    }

    if (await bottoneCategoria.isVisible()) {
      console.log(`🎯 Bottone trovato! Clicco ed entro in -> ${cat}`);
      await bottoneCategoria.click({ force: true }).catch(() => {});
      await page.waitForTimeout(2500); // Aspetta il caricamento della nuova schermata

      // --- AZIONE DENTRO LA SEZIONE ("Fa tutto") ---
      console.log(`🔽 Avvio scroll profondo dentro la sezione: ${cat}`);
      for (let i = 0; i < 6; i++) {
        await page.mouse.wheel(0, 500);
        await page.waitForTimeout(1000);
      }

      // --- STRATEGIA DI USCITA ("Deve anche uscirci") ---
      console.log(`↩️ Finito lo scroll. Tento l'uscita da: ${cat}`);
      
      // Tentativo 1: Cerca un tasto grafico "Indietro" o "Menu"
      const tastoIndietro = page.locator('text="Indietro", text="Menu", [role="button"]').first();
      const haTastoSezione = await tastoIndietro.isVisible();
      
      if (haTastoSezione) {
        await tastoIndietro.click({ force: true }).catch(() => {});
        console.log("✅ Uscito premendo il tasto 'Indietro' dell'app.");
      } else {
        // Tentativo 2: Forza il "Back" nativo del browser (funziona come asso nella manica)
        await page.goBack().catch(() => {});
        console.log("✅ Uscito sfruttando il GoBack del browser.");
      }

      // Aspetta che la Home si ricarichi stabilmente prima di passare alla prossima categoria
      await page.waitForTimeout(3000);
      
    } else {
      console.log(`⚠️ Impossibile trovare il bottone per la categoria "${cat}". Salto alla prossima.`);
    }
  }

  console.log('\n🔄 Fine del tour delle sezioni. Torno in cima alla Home per sicurezza...');
  await page.mouse.wheel(0, -20000);
  await page.waitForTimeout(2000);
  
  // 2. Salvataggio definitivo del file JSON gigante
  if (capturedData.length > 0) {
    fs.writeFileSync('menu_extracted.json', JSON.stringify(capturedData, null, 2));
    console.log(`\n✅ Operazione conclusa con successo! Salvati ${capturedData.length} blocchi di dati.`);
  } else {
    console.log('❌ Nessun dato intercettato.');
  }
  
  await browser.close();
})();