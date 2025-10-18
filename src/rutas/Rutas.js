// Importa React para definir los componentes
import React from "react";

// Importa elementos de React Router para gestionar la navegación entre páginas:
// - BrowserRouter: componente principal que habilita el enrutamiento basado en URL del navegador.
// - Routes: contenedor que agrupa todas las rutas del sitio.
// - Route: define una ruta individual (path + componente a renderizar).
// - Outlet: marcador donde se renderiza el contenido de las rutas hijas dentro del layout.
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Importa el proveedor de contexto global del carrito.
// Este envuelve la aplicación para compartir el estado del carrito entre todas las páginas.
import { CarritoProveedor } from "../contextos/CarritoContexto";


// -------------------------------------------------------
// Importaciones de componentes globales
// -------------------------------------------------------
// Barra de navegación superior y pie de página común a todas las páginas.
import { BarraNavegacion, PieDePagina } from "../componentes";


// -------------------------------------------------------
// Importaciones de páginas del sitio
// -------------------------------------------------------
// Secciones principales del e-commerce HuertoHogar
import Inicio from "../paginas/Inicio";
import Productos from "../paginas/Productos";
import DetalleProducto from "../paginas/DetalleProducto";
import Nosotros from "../paginas/Nosotros";
import Blog from "../paginas/Blog";
import DetalleEntrada from "../paginas/DetalleEntrada";
import Contacto from "../paginas/Contacto";
import IniciarSesion from "../paginas/IniciarSesion";
import Registro from "../paginas/Registro";
import Carrito from "../paginas/Carrito";
import Pago from "../paginas/Pago";
import ConfirmacionPedido from "../paginas/ConfirmacionPedido";

// Páginas informativas y legales
import PoliticaPrivacidad from "../paginas/PoliticaPrivacidad";
import TerminosCondiciones from "../paginas/TerminosCondiciones";
import Accesibilidad from "../paginas/Accesibilidad";

// Página de error para rutas no encontradas
import NoEncontrado from "../paginas/NoEncontrado";


// -------------------------------------------------------
// Componente: Layout
// -------------------------------------------------------
// Este componente define la estructura común a todas las páginas.
// Incluye la barra de navegación superior, el contenido dinámico (Outlet)
// y el pie de página.
function Layout() {
  return (
    <>
      {/* Barra de navegación fija superior */}
      <BarraNavegacion />

      {/* Outlet: espacio donde se renderiza la página activa */}
      <Outlet />

      {/* Pie de página con enlaces legales y derechos reservados */}
      <PieDePagina />
    </>
  );
}


// -------------------------------------------------------
// Componente principal: Rutas
// -------------------------------------------------------
// Este componente define toda la estructura de navegación de la app.
// Incluye el contexto del carrito y las rutas de cada página.
export default function Rutas() {
  return (
    // BrowserRouter: Habilita el enrutamiento basado en historial del navegador
    <BrowserRouter>

      {/* CarritoProveedor: provee el contexto global del carrito a toda la app */}
      <CarritoProveedor>

        {/* Contenedor principal de rutas */}
        <Routes>

          {/* Ruta raíz: utiliza el layout común (barra + contenido + pie) */}
          <Route element={<Layout />}>

            {/* Páginas principales */}
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:id" element={<DetalleProducto />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<DetalleEntrada />} />
            <Route path="/contacto" element={<Contacto />} />

            {/* Autenticación */}
            <Route path="/iniciar-sesion" element={<IniciarSesion />} />
            <Route path="/registro" element={<Registro />} />

            {/* Flujo de compra */}
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/pago" element={<Pago />} />
            <Route path="/confirmacion/:pedidoId" element={<ConfirmacionPedido />} />

            {/* Páginas legales e informativas */}
            <Route path="/privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/terminos" element={<TerminosCondiciones />} />
            <Route path="/accesibilidad" element={<Accesibilidad />} />

            {/* Página para rutas inexistentes */}
            <Route path="*" element={<NoEncontrado />} />
          </Route>
        </Routes>
      </CarritoProveedor>
    </BrowserRouter>
  );
}
