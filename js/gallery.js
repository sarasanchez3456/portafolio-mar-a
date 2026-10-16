/**
 * Gallery interactive features & Lightbox modal
 */

const galleryItems = [
  // ── HERO / PORTADA ──
  {
    id: 'hero-portrait',
    src: 'assets/images/retratos/retratos-01.jpg',
    titleEs: 'Sonrisa íntima · María entre sábanas blancas',
    titleEn: 'Intimate Smile · María in White Sheets',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'hero-detail',
    src: 'assets/images/documental/documental-01.jpg',
    titleEs: 'Estampado floral · pintada a mano',
    titleEn: 'Floral Print · Artisan Fabric',
    category: 'details',
    categoryNameEs: 'Detalles',
    categoryNameEn: 'Details'
  },
  {
    id: 'hero-color',
    src: 'assets/images/productos/productos-03.jpg',
    titleEs: 'Labial rosa · Belleza sobre fondo blanco',
    titleEn: 'Pink Lip Gloss · Beauty on White Background',
    category: 'color',
    categoryNameEs: 'Color',
    categoryNameEn: 'Color'
  },
  {
    id: 'series-bw',
    src: 'assets/images/retratos/retratos-03.jpg',
    titleEs: 'Sesión de estudio · Pose con boina negra en blanco y negro',
    titleEn: 'Studio Session · Black Beret Pose in Black and White',
    category: 'bw',
    categoryNameEs: 'Blanco y negro',
    categoryNameEn: 'Black & White'
  },
  {
    id: 'series-pets',
    src: 'assets/images/retratos/retratos-02.jpg',
    titleEs: 'Mirada intensa · Retrato íntimo en blanco y negro',
    titleEn: 'Intense Gaze · Intimate Black and White Portrait',
    category: 'pets',
    categoryNameEs: 'Mascotas',
    categoryNameEn: 'Pets'
  },
  {
    id: 'session-esencial',
    src: 'assets/images/retratos/retratos-06.jpg',
    titleEs: 'Risas, luz natural y autenticidad',
    titleEn: 'Joy, Natural Light & Authenticity',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'about-artist',
    src: 'assets/images/retratos/retratos-06.jpg',
    titleEs: 'Contraluz dorada · Retrato al atardecer con sombrero de piel',
    titleEn: 'Golden Backlight · Sunset Portrait with Fur Hat',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },

  // ── RETRATOS (17) ──
  {
    id: 'retratos-01',
    src: 'assets/images/retratos/retratos-01.jpg',
    titleEs: 'Sonrisa cómplice · María en blanco y negro',
    titleEn: 'Complicit Smile · María in Black and White',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'retratos-02',
    src: 'assets/images/retratos/retratos-02.jpg',
    titleEs: 'Mirada directa · Retrato íntimo en sábanas blancas',
    titleEn: 'Direct Gaze · Intimate Portrait in White Sheets',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'retratos-03',
    src: 'assets/images/retratos/retratos-03.jpg',
    titleEs: 'Sesión de estudio · Pose con boina negra en blanco y negro',
    titleEn: 'Studio Session · Black Beret Pose in Black and White',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'retratos-04',
    src: 'assets/images/retratos/retratos-04.jpg',
    titleEs: 'Elegancia editorial · Boina y atuendo negro en estudio',
    titleEn: 'Editorial Elegance · Beret and Black Outfit in Studio',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'retratos-05',
    src: 'assets/images/retratos/retratos-05.jpg',
    titleEs: 'Postura íntima · Estudio analógico en blanco y negro',
    titleEn: 'Intimate Pose · Analog Studio in Black and White',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'retratos-06',
    src: 'assets/images/retratos/retratos-06.jpg',
    titleEs: 'Labios rojos y sonrisa · Envuelta en sábanas blancas',
    titleEn: 'Red Lips and Smile · Wrapped in White Sheets',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'retratos-07',
    src: 'assets/images/retratos/retratos-07.jpg',
    titleEs: 'Corredor colonial · Luz dorada y silueta entre cortinas',
    titleEn: 'Colonial Corridor · Golden Light and Silhouette Behind Curtains',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'retratos-08',
    src: 'assets/images/retratos/retratos-08.jpg',
    titleEs: 'A través del ventanal · Silueta en corredor colonial dorado',
    titleEn: 'Through the Window · Silhouette in Golden Colonial Corridor',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'retratos-09',
    src: 'assets/images/retratos/retratos-09.jpg',
    titleEs: 'Mirada retadora · Luz cálida en el corredor',
    titleEn: 'Challenging Gaze · Warm Light in the Corridor',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'retratos-10',
    src: 'assets/images/retratos/retratos-10.jpg',
    titleEs: 'Claroscuro dramático · Labial rojo y fondo oscuro',
    titleEn: 'Dramatic Chiaroscuro · Red Lips on Dark Background',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'retratos-11',
    src: 'assets/images/retratos/retratos-11.jpg',
    titleEs: 'Fondo rojo intenso · Retrato editorial con medias de red',
    titleEn: 'Intense Red Background · Editorial Portrait with Fishnet',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'retratos-12',
    src: 'assets/images/retratos/retratos-12.jpg',
    titleEs: 'Elegancia en verde · Figura recostada con tacones negros',
    titleEn: 'Elegance in Green · Figure Lying Down with Black Heels',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'retratos-13',
    src: 'assets/images/retratos/retratos-13.jpg',
    titleEs: 'Figura en negro · Recostada con mirada serena en estudio',
    titleEn: 'Figure in Black · Lying Down with Serene Gaze in Studio',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'retratos-14',
    src: 'assets/images/retratos/retratos-14.jpg',
    titleEs: 'Detalle de tacón · Manos ajustando zapato negro de aguja',
    titleEn: 'Heel Detail · Hands Adjusting Black Stiletto',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'retratos-15',
    src: 'assets/images/retratos/retratos-15.jpg',
    titleEs: 'Vista cenital · Cabello castaño extendido sobre el suelo',
    titleEn: "Bird's Eye View · Brown Hair Spread on the Floor",
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'retratos-16',
    src: 'assets/images/retratos/retratos-16.jpg',
    titleEs: 'Contraluz dorada · Retrato al atardecer con sombrero de piel',
    titleEn: 'Golden Backlight · Sunset Portrait with Fur Hat',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },
  {
    id: 'retratos-17',
    src: 'assets/images/retratos/retratos-17.jpg',
    titleEs: 'Fondo rojo y poder femenino · Boina negra y harness',
    titleEn: 'Red Background and Feminine Power · Black Beret and Harness',
    category: 'portraits',
    categoryNameEs: 'Retratos',
    categoryNameEn: 'Portraits'
  },

  // ── DOCUMENTAL (15) ──
  {
    id: 'documental-01',
    src: 'assets/images/documental/documental-01.jpg',
    titleEs: 'Estampado floral · Tela artesanal pintada a mano',
    titleEn: 'Floral Print · Hand-Painted Artisan Fabric',
    category: 'documental',
    categoryNameEs: 'Documental',
    categoryNameEn: 'Documentary'
  },
  {
    id: 'documental-02',
    src: 'assets/images/documental/documental-02.jpg',
    titleEs: 'Patio de cerámica · Platos en muro de ladrillo de El Carmen',
    titleEn: 'Ceramics Patio · Plates on Brick Wall at El Carmen',
    category: 'documental',
    categoryNameEs: 'Documental',
    categoryNameEn: 'Documentary'
  },
  {
    id: 'documental-03',
    src: 'assets/images/documental/documental-03.jpg',
    titleEs: 'Taza pintada · Cerámica artesanal de El Carmen de Viboral',
    titleEn: 'Painted Cup · Handcrafted Ceramics from El Carmen de Viboral',
    category: 'documental',
    categoryNameEs: 'Documental',
    categoryNameEn: 'Documentary'
  },
  {
    id: 'documental-04',
    src: 'assets/images/documental/documental-04.jpg',
    titleEs: 'Mesa de trabajo · Pigmentos y piezas crudas en el taller',
    titleEn: 'Work Table · Pigments and Raw Pieces in the Workshop',
    category: 'documental',
    categoryNameEs: 'Documental',
    categoryNameEn: 'Documentary'
  },
  {
    id: 'documental-05',
    src: 'assets/images/documental/documental-05.jpg',
    titleEs: 'Maestra pintando · Alegría en el taller de cerámica',
    titleEn: 'Master Painting · Joy in the Ceramics Workshop',
    category: 'documental',
    categoryNameEs: 'Documental',
    categoryNameEn: 'Documentary'
  },
  {
    id: 'documental-06',
    src: 'assets/images/documental/documental-06.jpg',
    titleEs: 'Manos y pincel · Detalle de pintura sobre cerámica',
    titleEn: 'Hands and Brush · Close-Up of Painting on Ceramics',
    category: 'documental',
    categoryNameEs: 'Documental',
    categoryNameEn: 'Documentary'
  },
  {
    id: 'documental-07',
    src: 'assets/images/documental/documental-07.jpg',
    titleEs: 'Artesana moldeando arcilla · Concentración en el oficio',
    titleEn: 'Artisan Molding Clay · Focused on the Craft',
    category: 'documental',
    categoryNameEs: 'Documental',
    categoryNameEn: 'Documentary'
  },
  {
    id: 'documental-08',
    src: 'assets/images/documental/documental-08.jpg',
    titleEs: 'Catálogo de diseños · Pintas Esmaltarte en tablero',
    titleEn: 'Design Catalog · Pintas Esmaltarte Display Board',
    category: 'documental',
    categoryNameEs: 'Documental',
    categoryNameEn: 'Documentary'
  },
  {
    id: 'documental-09',
    src: 'assets/images/documental/documental-09.jpg',
    titleEs: 'Risa en el taller · Artesana trabajando la arcilla',
    titleEn: 'Laughter in the Workshop · Artisan Working the Clay',
    category: 'documental',
    categoryNameEs: 'Documental',
    categoryNameEn: 'Documentary'
  },
  {
    id: 'documental-10',
    src: 'assets/images/documental/documental-10.jpg',
    titleEs: 'Vertiendo engobe · Proceso de fundición en moldes de arcilla',
    titleEn: 'Pouring Slip · Casting Process in Clay Molds',
    category: 'documental',
    categoryNameEs: 'Documental',
    categoryNameEn: 'Documentary'
  },
  {
    id: 'documental-11',
    src: 'assets/images/documental/documental-11.jpg',
    titleEs: 'Estante Berez · Cerámica pintada a mano en el local',
    titleEn: 'Berez Shelf · Hand-Painted Ceramics at the Shop',
    category: 'documental',
    categoryNameEs: 'Documental',
    categoryNameEn: 'Documentary'
  },
  {
    id: 'documental-12',
    src: 'assets/images/documental/documental-12.jpg',
    titleEs: 'Maestra en Berez · Explicando el proceso de cerámica',
    titleEn: 'Master at Berez · Explaining the Ceramics Process',
    category: 'documental',
    categoryNameEs: 'Documental',
    categoryNameEn: 'Documentary'
  },
  {
    id: 'documental-13',
    src: 'assets/images/documental/documental-13.jpg',
    titleEs: 'Clase de cerámica · Compartiendo el oficio en Berez',
    titleEn: 'Ceramics Class · Sharing the Craft at Berez',
    category: 'documental',
    categoryNameEs: 'Documental',
    categoryNameEn: 'Documentary'
  },
  {
    id: 'documental-14',
    src: 'assets/images/documental/documental-14.jpg',
    titleEs: 'Manos en arcilla · Delantal de El Carmen de Viboral',
    titleEn: 'Hands in Clay · El Carmen de Viboral Apron',
    category: 'documental',
    categoryNameEs: 'Documental',
    categoryNameEn: 'Documentary'
  },
  {
    id: 'documental-15',
    src: 'assets/images/documental/documental-15.jpg',
    titleEs: 'Oficio en blanco y negro · Artesana trabajando moldes de arcilla',
    titleEn: 'Craft in Black and White · Artisan Working Clay Molds',
    category: 'documental',
    categoryNameEs: 'Documental',
    categoryNameEn: 'Documentary'
  },

  // ── URBANA (9) ──
  {
    id: 'urbana-01',
    src: 'assets/images/urbana/urbana-01.jpg',
    titleEs: 'Edificio entre siluetas · Medellín desde abajo',
    titleEn: 'Building Among Silhouettes · Medellín from Below',
    category: 'urbana',
    categoryNameEs: 'Urbana',
    categoryNameEn: 'Urban'
  },
  {
    id: 'urbana-02',
    src: 'assets/images/urbana/urbana-02.jpg',
    titleEs: 'Flor rosa con gota · Después de la lluvia',
    titleEn: 'Pink Flower with Raindrop · After the Rain',
    category: 'urbana',
    categoryNameEs: 'Urbana',
    categoryNameEn: 'Urban'
  },
  {
    id: 'urbana-03',
    src: 'assets/images/urbana/urbana-03.jpg',
    titleEs: 'Cabina roja con stickers · Arte urbano entre árboles',
    titleEn: 'Red Phone Booth with Stickers · Urban Art Among Trees',
    category: 'urbana',
    categoryNameEs: 'Urbana',
    categoryNameEn: 'Urban'
  },
  {
    id: 'urbana-04',
    src: 'assets/images/urbana/urbana-04.jpg',
    titleEs: 'Arte callejero feminista · Déjeme Quieta, Déjeme Sana',
    titleEn: 'Feminist Street Art · Leave Me in Peace, Leave Me Healthy',
    category: 'urbana',
    categoryNameEs: 'Urbana',
    categoryNameEn: 'Urban'
  },
  {
    id: 'urbana-05',
    src: 'assets/images/urbana/urbana-05.jpg',
    titleEs: 'Perro en la plaza · Blanco y negro con arnés rojo',
    titleEn: 'Dog on the Square · Black and White with Red Harness',
    category: 'urbana',
    categoryNameEs: 'Urbana',
    categoryNameEn: 'Urban'
  },
  {
    id: 'urbana-06',
    src: 'assets/images/urbana/urbana-06.jpg',
    titleEs: 'Avión entre nubes · Cielo en blanco y negro',
    titleEn: 'Plane Among Clouds · Black and White Sky',
    category: 'urbana',
    categoryNameEs: 'Urbana',
    categoryNameEn: 'Urban'
  },
  {
    id: 'urbana-07',
    src: 'assets/images/urbana/urbana-07.jpg',
    titleEs: 'Perro callejero con collar · Fachada con graffiti',
    titleEn: 'Street Dog with Collar · Graffiti Facade',
    category: 'urbana',
    categoryNameEs: 'Urbana',
    categoryNameEn: 'Urban'
  },
  {
    id: 'urbana-08',
    src: 'assets/images/urbana/urbana-08.jpg',
    titleEs: 'Transeúnte de espaldas · Taxis amarillos en Medellín',
    titleEn: 'Passerby from Behind · Yellow Taxis in Medellín',
    category: 'urbana',
    categoryNameEs: 'Urbana',
    categoryNameEn: 'Urban'
  },
  {
    id: 'urbana-09',
    src: 'assets/images/urbana/urbana-09.jpg',
    titleEs: 'Pájaro en vuelo · Vista entre dos árboles al cielo',
    titleEn: 'Bird in Flight · Looking Up Between Two Trees',
    category: 'urbana',
    categoryNameEs: 'Urbana',
    categoryNameEn: 'Urban'
  },

  // ── EVENTO (7) ──
  {
    id: 'evento-01',
    src: 'assets/images/evento/evento-01.jpg',
    titleEs: 'Momento de evento · Celebración',
    titleEn: 'Event Moment · Celebration',
    category: 'evento',
    categoryNameEs: 'Evento',
    categoryNameEn: 'Event'
  },
  {
    id: 'evento-02',
    src: 'assets/images/evento/evento-02.jpg',
    titleEs: 'Risa compartida · Instante alegre',
    titleEn: 'Shared Laughter · Joyful Moment',
    category: 'evento',
    categoryNameEs: 'Evento',
    categoryNameEn: 'Event'
  },
  {
    id: 'evento-03',
    src: 'assets/images/evento/evento-03.jpg',
    titleEs: 'Detalle de mesa · Ambiente',
    titleEn: 'Table Detail · Atmosphere',
    category: 'evento',
    categoryNameEs: 'Evento',
    categoryNameEn: 'Event'
  },
  {
    id: 'evento-04',
    src: 'assets/images/evento/evento-04.jpg',
    titleEs: 'Abrazo emotivo · Vínculo',
    titleEn: 'Emotional Hug · Bond',
    category: 'evento',
    categoryNameEs: 'Evento',
    categoryNameEn: 'Event'
  },
  {
    id: 'evento-05',
    src: 'assets/images/evento/evento-05.jpg',
    titleEs: 'Brindis · Instante festivo',
    titleEn: 'Toast · Festive Moment',
    category: 'evento',
    categoryNameEs: 'Evento',
    categoryNameEn: 'Event'
  },
  {
    id: 'evento-06',
    src: 'assets/images/evento/evento-06.jpg',
    titleEs: 'Baile y movimiento · Energía',
    titleEn: 'Dance & Movement · Energy',
    category: 'evento',
    categoryNameEs: 'Evento',
    categoryNameEn: 'Event'
  },
  {
    id: 'evento-07',
    src: 'assets/images/evento/evento-07.jpg',
    titleEs: 'Cierre de evento · Luz tenue',
    titleEn: 'Event Close · Dim Light',
    category: 'evento',
    categoryNameEs: 'Evento',
    categoryNameEn: 'Event'
  },

  // ── CONCIERTOS (3) ──
  {
    id: 'conciertos-01',
    src: 'assets/images/conciertos/conciertos-01.jpg',
    titleEs: 'Música en vivo · Escenario',
    titleEn: 'Live Music · Stage',
    category: 'conciertos',
    categoryNameEs: 'Conciertos',
    categoryNameEn: 'Concerts'
  },
  {
    id: 'conciertos-02',
    src: 'assets/images/conciertos/conciertos-02.jpg',
    titleEs: 'Artista actuando · Luz de escenario',
    titleEn: 'Artist Performing · Stage Light',
    category: 'conciertos',
    categoryNameEs: 'Conciertos',
    categoryNameEn: 'Concerts'
  },
  {
    id: 'conciertos-03',
    src: 'assets/images/conciertos/conciertos-03.jpg',
    titleEs: 'Público vibrando · Energía musical',
    titleEn: 'Crowd Vibing · Musical Energy',
    category: 'conciertos',
    categoryNameEs: 'Conciertos',
    categoryNameEn: 'Concerts'
  },

  // ── PRODUCTOS (6) ──
  {
    id: 'productos-01',
    src: 'assets/images/productos/productos-01.jpg',
    titleEs: 'Bodegón de producto · Artesanía',
    titleEn: 'Product Still Life · Craft',
    category: 'productos',
    categoryNameEs: 'Productos',
    categoryNameEn: 'Products'
  },
  {
    id: 'productos-02',
    src: 'assets/images/productos/productos-02.jpg',
    titleEs: 'Detalle de objeto hecho a mano',
    titleEn: 'Handmade Object Detail',
    category: 'productos',
    categoryNameEs: 'Productos',
    categoryNameEn: 'Products'
  },
  {
    id: 'productos-03',
    src: 'assets/images/productos/productos-03.jpg',
    titleEs: 'Labial rosa · Detalle de producto',
    titleEn: 'Pink Lip Gloss · Product Detail',
    category: 'productos',
    categoryNameEs: 'Productos',
    categoryNameEn: 'Products'
  },
  {
    id: 'productos-04',
    src: 'assets/images/productos/productos-04.jpg',
    titleEs: 'Textura de producto · Material noble',
    titleEn: 'Product Texture · Noble Material',
    category: 'productos',
    categoryNameEs: 'Productos',
    categoryNameEn: 'Products'
  },
  {
    id: 'productos-05',
    src: 'assets/images/productos/productos-05.jpg',
    titleEs: 'Producto bajo luz suave · Estudio',
    titleEn: 'Product Under Soft Light · Studio',
    category: 'productos',
    categoryNameEs: 'Productos',
    categoryNameEn: 'Products'
  },
  {
    id: 'productos-06',
    src: 'assets/images/productos/productos-06.jpg',
    titleEs: 'Detalle de empaque · Diseño',
    titleEn: 'Packaging Detail · Design',
    category: 'productos',
    categoryNameEs: 'Productos',
    categoryNameEn: 'Products'
  },

  // ── EXPLORACIÓN CREATIVA (4) ──
  {
    id: 'exploracion-creativa-01',
    src: 'assets/images/exploracion-creativa/exploracion-creativa-01.jpg',
    titleEs: 'Exploración creativa · Luz y sombra',
    titleEn: 'Creative Exploration · Light & Shadow',
    category: 'exploracion-creativa',
    categoryNameEs: 'Exploración creativa',
    categoryNameEn: 'Creative Exploration'
  },
  {
    id: 'exploracion-creativa-02',
    src: 'assets/images/exploracion-creativa/exploracion-creativa-02.jpg',
    titleEs: 'Exploración creativa · Textura abstracta',
    titleEn: 'Creative Exploration · Abstract Texture',
    category: 'exploracion-creativa',
    categoryNameEs: 'Exploración creativa',
    categoryNameEn: 'Creative Exploration'
  },
  {
    id: 'exploracion-creativa-03',
    src: 'assets/images/exploracion-creativa/exploracion-creativa-03.jpg',
    titleEs: 'Exploración creativa · Composición',
    titleEn: 'Creative Exploration · Composition',
    category: 'exploracion-creativa',
    categoryNameEs: 'Exploración creativa',
    categoryNameEn: 'Creative Exploration'
  },
  {
    id: 'exploracion-creativa-04',
    src: 'assets/images/exploracion-creativa/exploracion-creativa-04.jpg',
    titleEs: 'Exploración creativa · Momento íntimo',
    titleEn: 'Creative Exploration · Intimate Moment',
    category: 'exploracion-creativa',
    categoryNameEs: 'Exploración creativa',
    categoryNameEn: 'Creative Exploration'
  }
];

let activeLightboxIndex = 0;

function openLightbox(index) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-image');

  if (!lightbox || !img) return;

  activeLightboxIndex = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[activeLightboxIndex];
  const lang = window.portfolioI18n ? window.portfolioI18n.currentLang : 'es';

  img.src = item.src;
  img.alt = lang === 'es' ? item.titleEs : item.titleEn;

  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const closeBtn = document.getElementById('lightbox-close');
  if (closeBtn) closeBtn.focus();
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function nextLightbox() {
  openLightbox(activeLightboxIndex + 1);
}

function prevLightbox() {
  openLightbox(activeLightboxIndex - 1);
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!lightbox) return;

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', prevLightbox);
  if (nextBtn) nextBtn.addEventListener('click', nextLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
  });

  document.querySelectorAll('[data-gallery-idx]').forEach((el) => {
    el.addEventListener('click', (e) => {
      // Don't intercept clicks on inner links/buttons unless requested
      if (e.target.tagName.toLowerCase() === 'a' && !e.target.classList.contains('tile')) return;
      e.preventDefault();
      const idx = parseInt(el.getAttribute('data-gallery-idx'), 10);
      if (!isNaN(idx)) {
        openLightbox(idx);
      }
    });
  });
}

function initFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const filterableItems = document.querySelectorAll('[data-category]');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      filterableItems.forEach((item) => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
          item.style.display = '';
          item.style.opacity = '1';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function initGallery() {
  initLightbox();
  initFilters();
}

window.portfolioGallery = {
  initGallery,
  openLightbox,
  closeLightbox,
  galleryItems
};