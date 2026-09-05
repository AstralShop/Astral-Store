/* Astral Store - pedidos conectados a Supabase */

const LAST_ORDER_KEY = "astral_store_last_order";

function getOrders() {
  // Los pedidos reales están en Supabase. Esta función se conserva para compatibilidad.
  return [];
}

async function createOrder(data) {
  if (typeof supabase === "undefined") {
    throw new Error("No se cargó la librería de Supabase.");
  }

  const { data: result, error } = await supabase.rpc("crear_pedido", {
    p_producto: data.product,
    p_juego: data.game,
    p_precio: Number(data.price),
    p_id_free_fire: data.freeFireId || null,
  });

  if (error) {
    console.error("Error creando pedido en Supabase:", error);
    throw new Error(error.message || "No se pudo crear el pedido.");
  }

  const order = Array.isArray(result) ? result[0] : result;
  if (!order || !order.numero_compra) {
    throw new Error("Supabase no devolvió el número de compra.");
  }

  // Solo guardamos temporalmente la respuesta para mostrarla en confirmacion.html.
  // La fuente real del pedido es Supabase.
  const normalized = {
    orderNumber: order.numero_compra,
    product: order.producto,
    game: order.juego,
    price: Number(order.precio),
    freeFireId: order.id_free_fire || null,
    date: order.fecha,
    status: order.estado,
  };

  localStorage.setItem(LAST_ORDER_KEY, JSON.stringify(normalized));
  return normalized;
}

function getLastOrder() {
  try {
    const raw = localStorage.getItem(LAST_ORDER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error("Error leyendo el último pedido:", err);
    return null;
  }
}

function setSelectedProduct(productId) {
  try {
    sessionStorage.setItem("astral_store_selected_product", productId);
  } catch (err) {
    console.error("Error guardando producto seleccionado:", err);
  }
}

function getSelectedProduct() {
  try {
    return sessionStorage.getItem("astral_store_selected_product");
  } catch (err) {
    console.error("Error leyendo producto seleccionado:", err);
    return null;
  }
}
window.createOrder = createOrder;
