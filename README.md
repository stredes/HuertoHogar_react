# HuertoHogar 🍏 — Frescura del campo a tu mesa

Aplicación React creada con [Create React App](https://github.com/facebook/create-react-app), estilada con **Bootstrap 5** / **React-Bootstrap**, y organizada en componentes y páginas **en español**. Incluye contexto de **Carrito**, ruteo con **React Router v6**, y utilidades para catálogo en **CLP**.

---

## 🚀 Requisitos

- Node.js 18+ y npm.
- (Opcional) VS Code.

> **Windows / PowerShell**: si `npm`/`npx` dan error de scripts, ejecuta PowerShell como **Administrador**:
>
> ```powershell
> Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
> ```
> (o temporal en la sesión)
> ```powershell
> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
> ```

---

## 📦 Instalación

```bash
npm install
npm i react-bootstrap bootstrap react-router-dom
```

Bootstrap ya se carga por **CDN** en `public/index.html`.  
Si prefieres CSS por npm, elimina el `<link>` en `public/index.html` y agrega en `src/index.js`:
```js
import "bootstrap/dist/css/bootstrap.min.css";
```

---

## ▶️ Scripts disponibles

En el directorio del proyecto:

- `npm start` — Modo desarrollo (http://localhost:3000).
- `npm test` — Ejecuta pruebas en modo watch.
- `npm run build` — Compila para producción en `build/`.
- `npm run eject` — **Irreversible**: expone configuración (webpack, Babel, ESLint, etc).

Documentación CRA:
- Tests: https://facebook.github.io/create-react-app/docs/running-tests  
- Build y Deploy: https://facebook.github.io/create-react-app/docs/deployment

---

## 🧱 Estructura (src/)

```
src/
├─ componentes/
│  ├─ BarraNavegacion.js
│  ├─ Encabezado.js
│  ├─ TarjetaProducto.js
│  ├─ GrillaDestacados.js
│  ├─ PieDePagina.js
│  └─ index.js
│
├─ paginas/
│  ├─ Inicio.js
│  ├─ Productos.js
│  ├─ DetalleProducto.js
│  ├─ Nosotros.js
│  ├─ Blog.js
│  ├─ DetalleEntrada.js
│  ├─ Contacto.js
│  ├─ IniciarSesion.js
│  ├─ Registro.js
│  ├─ Carrito.js
│  ├─ Pago.js
│  ├─ ConfirmacionPedido.js
│  ├─ PoliticaPrivacidad.js
│  ├─ TerminosCondiciones.js
│  ├─ Accesibilidad.js
│  └─ NoEncontrado.js
│
├─ datos/
│  └─ productos.js           # catálogo de ejemplo + formatoCLP
│
├─ contextos/
│  └─ CarritoContexto.js     # estado global del carrito
│
├─ rutas/
│  └─ Rutas.js               # React Router v6 + Layout
│
├─ App.js                    # alias de Inicio
└─ index.js                  # entrada y montaje de Rutas
```

---

## 🧭 Rutas principales

- `/` Inicio (Encabezado + Destacados)
- `/productos` Catálogo con filtros
- `/productos/:id` Detalle de producto
- `/nosotros`, `/blog`, `/blog/:slug`, `/contacto`
- `/iniciar-sesion`, `/registro`
- `/carrito` → `/pago` → `/confirmacion/:pedidoId`
- `/privacidad`, `/terminos`, `/accesibilidad`
- `*` 404

---

## 🛒 Carrito (Context API)

`contextos/CarritoContexto.js` expone:
- `items`, `total`, `cantidadTotal`
- `añadirAlCarrito(producto, cantidad)`
- `quitarDelCarrito(codigo)`
- `limpiarCarrito()`

El layout envuelve la app con `<CarritoProveedor>` en `rutas/Rutas.js`.

---

## 🧪 Pruebas (sugeridas)

Ejemplos con React Testing Library:
- `TarjetaProducto` — render de nombre, código, precio CLP, stock, botones.
- `Productos` — filtros (búsqueda, precio, stock).
- `Carrito` — totales, añadir/quitar.

Ejecutar:
```bash
npm test
```

---

## 🌱 Datos y moneda

- Catálogo de ejemplo en `datos/productos.js` (`productosDestacados`).
- Utilidad `formatoCLP(number)` usa `Intl.NumberFormat("es-CL")`.

Para producción, reemplaza por llamadas `fetch` a tu API.

---

## 🧩 Estilos

- Tipografías Montserrat/Playfair y Bootstrap 5 (CDN en `public/index.html`).
- Puedes añadir `public/css/styles.css` y enlazarlo con `%PUBLIC_URL%/css/styles.css`.

---

## 🗺️ Roadmap (sugerido)

- Conectar API real (productos, auth, órdenes).
- Paginación/ordenamiento en catálogo.
- Persistir carrito en `localStorage`.
- Rutas protegidas (checkout).
- SEO (`react-helmet-async`).
- Accesibilidad (roles ARIA, focus management).

---

## 📄 Licencia

Uso interno/educativo. Adáptala según tus necesidades.
