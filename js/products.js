/* ==========================================================================
   products.js
   Catálogo de productos de Astral Store.

   -> Este archivo es la "fuente de verdad" del catálogo mientras no exista
      backend. Cuando se conecte una API real, estas constantes deberían
      reemplazarse por una petición al servidor, por ejemplo:

      async function getFreeFireProducts() {
        const res = await fetch(`${API_BASE_URL}/products/freefire`);
        return res.json();
      }

      Los precios que se muestran aquí son solo referenciales para el
      frontend. La validación y el cobro definitivo de precios SIEMPRE
      deben calcularse en el backend, nunca confiar en lo que envía el
      navegador.
   ========================================================================== */

const FREEFIRE_PRODUCTS = [
  {
    id: "ff-100",
    name: "100 + 10 Diamantes",
    bonus: "+10 Diamantes de regalo",
    price: 0.85,
    image: "assets/ff-100.png",
  },
  {
    id: "ff-310",
    name: "310 + 31 Diamantes",
    bonus: "+31 Diamantes de regalo",
    price: 2.55,
    image: "assets/ff-310.png",
  },
  {
    id: "ff-520",
    name: "520 + 52 Diamantes",
    bonus: "+52 Diamantes de regalo",
    price: 4.25,
    image: "assets/ff-520.png",
  },
  {
    id: "ff-1060",
    name: "1060 + 106 Diamantes",
    bonus: "+106 Diamantes de regalo",
    price: 8.50,
    image: "assets/ff-1060.png",
  },
  {
    id: "ff-2160",
    name: "2160 + 218 Diamantes",
    bonus: "+218 Diamantes de regalo",
    price: 17.00,
    image: "assets/ff-2160.png",
  },
  {
    id: "ff-5600",
    name: "5600 + 560 Diamantes",
    bonus: "+560 Diamantes de regalo",
    price: 42.50,
    image: "assets/ff-5600.png",
  },
  {
    id: "ff-caja-evolutiva",
    name: "1 Caja Evolutiva",
    bonus: "Producto especial",
    price: 0.40,
    image: "assets/caja-evolutiva.png",
  },
];

const ROBLOX_PRODUCTS = [
  {
    id: "rb-giftcard-10",
    name: "Gift Card $10 USD",
    bonus: "Valor: $10 USD",
    price: 11.00,
    image: "assets/giftcard-10.png",
  },
  /* Deja este array preparado para agregar más Gift Cards en el futuro.
     Ejemplo:
     {
       id: "rb-giftcard-25",
       name: "Gift Card $25 USD",
       bonus: "Valor: $25 USD",
       price: 27.00,
       image: "assets/giftcard-25.png",
     },
  */
];

/**
 * Busca un producto por su id, en Free Fire o en Roblox.
 * @param {string} id
 * @returns {{product: object, game: "freefire"|"roblox"} | null}
 */
function findProductById(id) {
  const ff = FREEFIRE_PRODUCTS.find((p) => p.id === id);
  if (ff) return { product: ff, game: "freefire" };

  const rb = ROBLOX_PRODUCTS.find((p) => p.id === id);
  if (rb) return { product: rb, game: "roblox" };

  return null;
}

/**
 * Formatea un número como precio en dólares.
 * @param {number} value
 */
function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}
window.getSelectedProduct = getSelectedProduct;
window.findProductById = findProductById;
window.formatPrice = formatPrice;
