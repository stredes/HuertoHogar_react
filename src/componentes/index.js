// -------------------------------------------------------
// Archivo de exportación centralizada de componentes
// -------------------------------------------------------
// Este archivo actúa como punto de entrada (index) para exportar
// múltiples componentes desde un único lugar.
// Facilita las importaciones en el resto del proyecto,
// ya que permite importar varios componentes desde un solo módulo.
// Ejemplo de uso:
//    import { BarraNavegacion, Encabezado } from "../componentes";
// -------------------------------------------------------


// Exporta el componente BarraNavegacion desde su ruta original.
// El alias "default as" permite exportar el componente por su nombre,
// incluso si fue exportado como "default" en su archivo.
export { default as BarraNavegacion } from "./BarraNavegacion";

// Exporta el componente Encabezado (sección principal superior del sitio)
export { default as Encabezado } from "./Encabezado";

// Exporta el componente GrillaDestacados (grilla con productos destacados)
export { default as GrillaDestacados } from "./GrillaDestacados";

// Exporta el componente PieDePagina (footer del sitio con enlaces e información)
export { default as PieDePagina } from "./PieDePagina";

// Exporta el componente TarjetaProducto (representa cada producto individual)
export { default as TarjetaProducto } from "./TarjetaProducto";
