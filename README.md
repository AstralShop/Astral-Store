# Astral Store

Tienda digital de recargas de Diamantes de Free Fire y Gift Cards de Roblox.
HTML5 + CSS3 + JavaScript vanilla, sin frameworks.

## Cómo usarlo

Abre `index.html` directamente en el navegador (doble clic), o sirve la
carpeta con cualquier servidor estático, por ejemplo:

```bash
npx serve .
# o
python3 -m http.server 8080
```

## Antes de publicar

1. **Imágenes**: reemplaza los archivos en `assets/` (ver `assets/README.txt`
   para la lista de nombres esperados). Mientras falten, se muestra un
   placeholder elegante automáticamente.
2. **WhatsApp**: abre `confirmacion.html` y edita la constante
   `WHATSAPP_URL` con tu enlace real (ej. `https://wa.me/593999999999`).
3. **Backend / base de datos**: el proyecto usa `localStorage` únicamente
   como almacenamiento temporal de demostración. Antes de operar con
   pedidos reales, conecta un backend — revisa los comentarios marcados
   con `>>> ... <<<` en `js/orders.js` y en las páginas de compra, que
   indican exactamente dónde reemplazar las llamadas a `localStorage` por
   peticiones a una API real.

## Estructura

```
astral-store/
├── index.html            Inicio (selección de juego)
├── freefire.html          Catálogo de recargas Free Fire
├── roblox.html              Catálogo de Gift Cards Roblox
├── compra-freefire.html       Compra de un producto Free Fire (pide ID)
├── compra-roblox.html           Compra de una Gift Card Roblox (sin ID)
├── confirmacion.html              Confirmación + número de compra + WhatsApp
├── css/style.css                    Estilos (tema oscuro + morado suave)
├── js/products.js                     Catálogo de productos
├── js/orders.js                         Lógica de pedidos (localStorage)
├── js/main.js                             Navbar, placeholders, utilidades
└── assets/                                  Imágenes del sitio
```

## Notas de diseño

- Paleta: negro (`#0b0b0f` / `#12121a`) + morado suave (`#9b7ede` /
  `#7659b8` / `#b8a5e8`), con glow sutil, sin neón saturado.
- Tipografía: Space Grotesk (títulos) + Inter (texto).
- Totalmente responsive, con menú hamburguesa en móvil.
- El número de compra comienza en `1000` y aumenta con cada pedido
  (guardado en `localStorage` solo como demo).
