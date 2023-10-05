import React from "react";
import Landing from "./pages/landing/landing";
import Formulario from "./pages/formulario/formulario";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Politicaprivacidad from "./components/politicaPrivacidad/politicaPrivacidad";

const App = () => {
  let location = useLocation();
  const [nuevaURL, setNuevaURL] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("spa", "true");
    const newSearchParams = searchParams.toString();
    const nuevaURL = `${location.pathname}?${newSearchParams}`;
    setNuevaURL(nuevaURL);
    console.log(nuevaURL)
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Landing nuevaURL={nuevaURL} />} />
      <Route path="formulario" element={<Formulario />} />
      <Route path="politica-de-privacidad" element={<Politicaprivacidad />} />
    </Routes>
  );
};
export default App;
