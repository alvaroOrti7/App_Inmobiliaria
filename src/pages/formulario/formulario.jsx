import { useEffect, useRef } from "react";
import "./Formulario.css";
import Header from "./header/header";

const Formulario = () => {
  const formularioRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = () => {
      if (formularioRef.current) {
        hbspt.forms.create({
          region: "eu1",
          portalId: "139725651",
          formId: "8f46d1de-7a7a-42bf-80e2-ebc8cc992081",
          target: "#formulario-container",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <Header />
      <h1 id="formu">Solicita una demo</h1>
      <section>
        <div id="formulario-container" ref={formularioRef}></div>
      </section>
    </div>
  );
};

export default Formulario;
