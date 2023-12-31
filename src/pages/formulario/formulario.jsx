import React, { useEffect, useRef } from "react";
import "./Formulario.css";

const Formulario = () => {
    const formularioRef = useRef(null);
  
    useEffect(() => {
      // Crear la etiqueta script para el formulario de HubSpot
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
      script.async = true; // Cargar el script de forma asíncrona
  
      // Agregar el script al head del documento
      document.head.appendChild(script);
  
      // Configurar el formulario de HubSpot cuando el script se cargue
      script.onload = () => {
        if (formularioRef.current) {
          window.hbspt.forms.create({
            region: "eu1",
            portalId: "139725651",
            formId: "8f46d1de-7a7a-42bf-80e2-ebc8cc992081",
            target: "#formulario-container",
          });
        }
      };
    }, []);
  
    return (
      <div>
        <h1 id="formu">Solicita una demo</h1>
        <section>
          <div id="formulario-container" ref={formularioRef}></div>
        </section>
      </div>
    );
  };
  
  export default Formulario;