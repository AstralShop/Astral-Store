# Astral Store + Supabase + GitHub Pages

## 1. Crear la base de datos

En Supabase abre **SQL Editor > New query** y ejecuta el archivo `supabase_pedidos_astral_store.sql` que acompaña este proyecto.

## 2. Obtener las credenciales públicas

En Supabase abre **Project Settings > Data API** y copia:
- Project URL
- Publishable key (si tu proyecto muestra la opción) o la clave pública `anon`

Abre `js/supabase-config.js` y reemplaza:

```js
const SUPABASE_URL = "https://TU-PROYECTO.supabase.co";
const SUPABASE_KEY = "TU-PUBLISHABLE-KEY";
```

No pongas la clave `service_role` en GitHub.

## 3. Qué ocurre al comprar

`compra-freefire.html` y `compra-roblox.html` llaman a la función `crear_pedido` de Supabase.
Supabase genera el número de compra (1000, 1001, 1002...) y devuelve los datos del pedido.
`confirmacion.html` muestra ese número y el producto.

## 4. Publicar

Sube el contenido de esta carpeta a tu repositorio de GitHub Pages. `index.html` debe quedar en la raíz del repositorio.

## 5. Seguridad

La página usa únicamente la clave pública de Supabase. La base de datos está protegida por RLS y los pedidos se crean mediante la función `crear_pedido`.

Para una tienda real conviene validar el producto/precio en el servidor y añadir autenticación para el panel administrativo antes de aceptar pagos reales.
