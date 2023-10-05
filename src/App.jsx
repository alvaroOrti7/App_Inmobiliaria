import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Formulario from "./pages/formulario/formulario";
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
  }, [location]);

  if (location.search.includes("spa=true")) {
    return <Navigate to="/formulario" />;
  }

  return (
    <Routes>
      <Route path="/" element={<Landing nuevaURL={nuevaURL} />} />
      <Route path="formulario" element={<Formulario />} />
      <Route path="politica-de-privacidad" element={<Politicaprivacidad />} />
    </Routes>
  );
};

export default App;
