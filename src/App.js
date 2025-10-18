import React from "react";

export default function App() {
  return (
    <>
      <main className="container my-5">
        <h1 className="hh-playfair text-success">HuertoHogar</h1>
        <p className="text-muted">Estructura base generada en .js</p>
      </main>
    </>
  );
}
// Importa React para definir componentes funcionales
import React from "react";


// -------------------------------------------------------
// Componente principal: App
// -------------------------------------------------------
// Este componente es el punto de entrada base de la aplicación React.
// Actualmente, sirve como estructura inicial o placeholder de la app.
// En versiones más avanzadas, puede actuar como envoltorio principal
// para las rutas, contextos o inicializaciones globales.
export default function App() {

  // Retorna la estructura visual básica
  return (
    <>
      {/* Elemento principal <main> para el contenido central */}
      {/* container: clase Bootstrap que centra y limita el ancho del contenido */}
      {/* my-5: margen vertical amplio */}
      <main className="container my-5">

        {/* Título principal de la aplicación */}
        {/* hh-playfair: clase personalizada de tipografía (Playfair Display)
            text-success: color verde institucional de HuertoHogar */}
        <h1 className="hh-playfair text-success">HuertoHogar</h1>

        {/* Texto descriptivo o mensaje temporal */}
        <p className="text-muted">
          Estructura base generada en .js
        </p>
      </main>
    </>
  );
}
