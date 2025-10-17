import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { CarritoProveedor } from "../contextos/CarritoContexto";

// Layout con barra y pie
import { BarraNavegacion, PieDePagina } from "../componentes";

// Páginas
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
import PoliticaPrivacidad from "../paginas/PoliticaPrivacidad";
import TerminosCondiciones from "../paginas/TerminosCondiciones";
import Accesibilidad from "../paginas/Accesibilidad";
import NoEncontrado from "../paginas/NoEncontrado";

function Layout() {
  return (
    <>
      <BarraNavegacion />
      <Outlet />
      <PieDePagina />
    </>
  );
}

export default function Rutas() {
  return (
    <BrowserRouter>
      <CarritoProveedor>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:id" element={<DetalleProducto />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<DetalleEntrada />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/iniciar-sesion" element={<IniciarSesion />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/pago" element={<Pago />} />
            <Route path="/confirmacion/:pedidoId" element={<ConfirmacionPedido />} />
            <Route path="/privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/terminos" element={<TerminosCondiciones />} />
            <Route path="/accesibilidad" element={<Accesibilidad />} />
            <Route path="*" element={<NoEncontrado />} />
          </Route>
        </Routes>
      </CarritoProveedor>
    </BrowserRouter>
  );
}
