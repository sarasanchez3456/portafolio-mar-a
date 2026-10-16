/**
 * Internationalization (ESP / ENG)
 * Personalized for Clara (@clairee_ph) — Medellín, Colombia
 */
const translations = {
  es: {
    navGallery: 'Galería',
    navAbout: 'Sobre mí',
    navContact: 'Contacto',
    btnBookSession: 'Agendar por WhatsApp',
    quoteBanner: 'Cada fotografía es una pausa para descubrir el arte y la poesía que ya habitan en ti.',
    galleryTag: 'Portafolio',
    galleryTitle: 'Galería de Fotografías',
    gallerySubtitle: 'Retratos, escenas urbanas, momentos documentales, conciertos y detalles de producto.',
    filterAll: 'Todos',
    filterPortraits: 'Retratos',
    filterBw: 'Blanco y negro',
    filterDocumental: 'Documental',
    filterUrbana: 'Urbana',
    filterEvento: 'Evento',
    filterConciertos: 'Conciertos',
    filterProductos: 'Productos',
    filterExploracionCreativa: 'Exploración creativa',
    seriesCountRetratos: '18 fotos',
    seriesCountBw: '14 fotos',
    seriesCountDocumental: '15 fotos',
    seriesCountUrbana: '9 fotos',
    seriesCountEvento: '7 fotos',
    seriesCountConciertos: '3 fotos',
    seriesCountProductos: '6 fotos',
    seriesCountExploracionCreativa: '4 fotos',
    seriesView: 'Ver fotos',
    aboutTag: 'Sobre mí',
    aboutTitle: 'Hola! Soy María Clara Bueno.',
    aboutBio: 'Fotógrafa radicada en Medellín, Colombia. Me apasiona transformar ideas abstractas en proyectos conceptuales y narrativas visuales con significado. Combino la técnica con la experimentación creativa para conectar emociones y estética en cada imagen, ya sea en proyectos personales, dirección de arte o creación de contenido para marcas.',
    aboutCard1Title: 'Mirada fresca y sensible',
    aboutCard1Desc: 'Un enfoque que valora la naturalidad y los gestos sinceros por encima de poses convencionales.',
    aboutCard2Title: 'Acompañamiento sin prisas',
    aboutCard2Desc: 'Te acompaño con paciencia para que olvides los nervios y disfrutes el momento como una experiencia agradable.',
    aboutCard3Title: 'Amor por los contrastes',
    aboutCard3Desc: 'El juego entre luces y sombras cálidas para crear imágenes con alma y calidez.',
    contactTag: 'Conversemos',
    contactTitle: 'Hablemos',
    contactSubtitle: 'Si quieres agendar una sesión, proponerme una idea o tienes alguna duda, escríbeme directamente y lo planeamos juntas.',
    contactWhatsapp: 'WhatsApp',
    contactInstagram: 'Instagram',
    contactEmail: 'Correo',
    contactCity: 'Ciudad',
    contactCityVal: 'Medellín - Colombia',
    contactCopyBtn: 'Copiar',
    footerTagline: 'Retratos honestos & luz natural'
  },
  en: {
    navGallery: 'Gallery',
    navAbout: 'About me',
    navContact: 'Contact',
    btnBookSession: 'Book via WhatsApp',
    quoteBanner: 'Every photograph is a pause to discover the art and poetry already living within you.',
    galleryTag: 'Portfolio',
    galleryTitle: 'Photography Gallery',
    gallerySubtitle: 'Portraits, urban scenes, documentary moments, concerts, and product details.',
    filterAll: 'All',
    filterPortraits: 'Portraits',
    filterBw: 'Black & White',
    filterDocumental: 'Documentary',
    filterUrbana: 'Urban',
    filterEvento: 'Event',
    filterConciertos: 'Concerts',
    filterProductos: 'Products',
    filterExploracionCreativa: 'Creative Exploration',
    seriesCountRetratos: '18 photos',
    seriesCountBw: '14 photos',
    seriesCountDocumental: '15 photos',
    seriesCountUrbana: '9 photos',
    seriesCountEvento: '7 photos',
    seriesCountConciertos: '3 photos',
    seriesCountProductos: '6 photos',
    seriesCountExploracionCreativa: '4 photos',
    seriesView: 'View photos',
    aboutTag: 'About me',
    aboutTitle: 'Hello! I am María Clara Bueno.',
    aboutBio: 'Photographer based in Medellín, Colombia. I am passionate about transforming abstract ideas into conceptual projects and meaningful visual narratives. I combine technique with creative experimentation to connect emotion and aesthetics in every image, whether in personal projects, art direction, or content creation for brands.',
    aboutCard1Title: 'Fresh and sensitive eye',
    aboutCard1Desc: 'Valuing natural gestures and candid emotion over conventional posing.',
    aboutCard2Title: 'Unhurried guidance',
    aboutCard2Desc: 'Patient, friendly support so you forget any camera anxiety and genuinely enjoy the moment.',
    aboutCard3Title: 'Love for contrast',
    aboutCard3Desc: 'Interplay of soft lights and deep shadows to craft images with soul and warmth.',
    contactTag: 'Direct Contact',
    contactTitle: "Let's talk",
    contactSubtitle: 'Whether you want to book a session, share an idea, or ask a question, message me directly and let’s plan it together.',
    contactWhatsapp: 'WhatsApp',
    contactInstagram: 'Instagram',
    contactEmail: 'Email',
    contactCity: 'Location',
    contactCityVal: 'Medellín - Colombia',
    contactCopyBtn: 'Copy',
    footerTagline: 'Honest portraits & natural light'
  }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'es';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  document.documentElement.lang = lang;

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update alt texts
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (translations[lang][key]) {
      el.setAttribute('alt', translations[lang][key]);
    }
  });

  // Update language buttons active state
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const btnLang = btn.getAttribute('data-lang');
    const isActive = btnLang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

function initI18n() {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang');
      setLanguage(targetLang);
    });
  });

  // Initial apply
  setLanguage(currentLang);
}

window.portfolioI18n = {
  setLanguage,
  initI18n,
  get currentLang() { return currentLang; },
  translations
};
