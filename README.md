# Portafolio — clairee_ph (Medellín, Colombia)

Portafolio web editorial y minimalista para **María Clara Bueno**, fotógrafa radicada en **Medellín, Colombia**. Construido con HTML5 semántico, CSS Vanilla modular y JavaScript Vanilla, con una voz auténtica, fresca e íntima: *"Retratos honestos, luz natural y sombras vivas"*.

---

## 🌿 Identidad, Tono y Filosofía

El sitio refleja la visión personal y genuina de María en sus inicios:

- **Tono honesto y cercano**: En lugar de discursos grandilocuentes, se expresa la ilusión y la curiosidad de quien ama los detalles cotidianos, la luz de Medellín y los retratos sin artificios.
- **Paleta de Color Cálida**:
  - Tono papel orgánico de fondo (`#FAF8F2`)
  - Vino borgoña profundo (`#68002C`)
  - Tono lima mantequilla suave (`#E5E8B3`) para botones principales con sutil transición a magenta
  - Magenta vivo (`#F04AAE`) para realces y acentos visuales
  - Lavanda suave (`#DBD9FF`) y azul cielo (`#A6C9DD`)
- **Tipografía Editorial**:
  - Titulares: *Cormorant Garamond* (clásico, editorial)
  - Cuerpo e interfaz: *Poppins* (moderno, geométrico y limpio)
  - Badges y metadatos: *IBM Plex Mono*
- **Un enfoque con tres pilares** (presentado en la sección *Sobre mí*):
  - *Mirada fresca y sensible* (Naturalidad y gestos sinceros por encima de poses convencionales).
  - *Acompañamiento sin prisas* (Paciencia para que la sesión fluya como una experiencia agradable).
  - *Amor por los contrastes* (Luces y sombras cálidas para crear imágenes con alma y calidez).

---

## 📁 Estructura del Proyecto

```text
Portafolio-kk/
│
├── index.html                 # Punto de entrada principal (HTML5 semántico, SEO, OpenGraph)
├── README.md                  # Documentación del proyecto
│
├── css/                       # Sistema de estilos modular (CSS Vanilla)
│   ├── variables.css          # Tokens de diseño (colores, tipografía, radios, sombras)
│   ├── base.css               # Resets, tipografía base, utilidades de accesibilidad
│   ├── components.css         # Botones, filtros, tarjetas, selector de idioma, modal lightbox
│   ├── layout.css             # Header sticky, sobre mí, galería, contacto, footer, responsive
│   └── style.css              # Hoja maestra que consolida los módulos
│
├── js/                        # Lógica interactiva en Vanilla JS
│   ├── i18n.js                # Sistema bilingüe (Español / Inglés)
│   ├── gallery.js             # Lightbox modal interactivo y filtros de categorías
│   └── main.js                # Menú móvil, scroll suave, cambio de idioma, copiado de contacto
│
└── assets/                    # Recursos estáticos
    ├── images/                # Fotografías organizadas por serie
    │   ├── retratos/              # 17 fotos · Retratos
    │   ├── documental/            # 15 fotos · Documental
    │   ├── urbana/                # 9 fotos  · Urbana
    │   ├── evento/                # 7 fotos  · Evento
    │   ├── productos/             # 6 fotos  · Productos
    │   ├── conciertos/            # 3 fotos  · Conciertos
    │   └── exploracion-creativa/  # 4 fotos  · Exploración creativa
    │
    └── icons/                 # Iconos vectoriales SVG
        ├── whatsapp.svg
        ├── instagram.svg
        ├── email.svg
        └── map-pin.svg
```

---

## 🗂 Orden de las secciones

La página se compone, de arriba a abajo, de:

1. **Header** (sticky) — Logo, navegación, agendamiento por WhatsApp e interruptor de idioma ESP/ENG.
2. **Sobre mí** — Presentación, retrato y los tres pilares del enfoque.
3. **Banner de cita** — Frase editorial que sirve de puente visual.
4. **Galería** — Rejilla de series con filtros por categoría y lightbox a pantalla completa.
5. **Contacto** — Tarjeta con WhatsApp, Instagram, correo (con botón de copiar) y ciudad.
6. **Footer** — Firma con círculos concéntricos animados.

---

## 🌐 Bilingüe (ES / EN)

Todo el texto visible usa atributos `data-i18n` / `data-i18n-alt` resueltos por `js/i18n.js`, con paridad completa de claves entre ambos idiomas. El selector **ESP / ENG** en el header cambia el idioma en caliente y persiste la preferencia.

---

## 📲 Contacto y WhatsApp

El número de contacto configurado en todo el proyecto es:
**+57 320 517 7677** (`https://wa.me/573205177677`)

- **Botones de agendamiento**: El botón del header y el de la sección de contacto abren un chat de WhatsApp con un mensaje predefinido.
- **Botón flotante**: En la esquina inferior derecha para contacto rápido directo.
- **Ficha de contacto**: Incluye enlace directo y botón de **Copiar** para el correo.

Instagram: [@clairee_ph](https://www.instagram.com/clairee_ph/)
Ubicación: **Medellín - Colombia**

---

## 🚀 Cómo ejecutar el proyecto

Al ser un sitio **estático**, no requiere build ni dependencias. Basta con abrir `index.html`:

```bash
# Opción 1 — directo en el navegador
start index.html

# Opción 2 — con un servidor local (recomendado para probar el cambio de idioma)
python -m http.server 8000
# y luego abrir http://localhost:8000
```

---

## 📱 Responsive

Verificado en ancho real de dispositivo mediante emulación:

| Dispositivo | Ancho | Comportamiento |
|---|---|---|
| Celular vertical | 375px | Menú hamburguesa, CTA del header oculto (usa botón flotante), tarjetas apiladas |
| Celular horizontal | 667px | Encabezado compacto completo |
| Tablet | 768px | *Sobre mí* en columna, galería a 2 columnas |
| Escritorio | 1440px | Navegación completa, *Sobre mí* a 2 columnas, rejilla de anchos mixtos |

Los breakpoints principales son `900px` y `768px`, definidos en `css/layout.css`.
