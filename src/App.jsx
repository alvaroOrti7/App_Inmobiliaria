import React from 'react'
import Landing from "./pages/landing/landing";
import Formulario from './pages/formulario/formulario';
import { Route, Routes } from 'react-router';
import Politicaprivacidad from './components/politicaPrivacidad/politicaPrivacidad';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="formulario" element={<Formulario />} />
      <Route path="politica-de-privacidad" element={<Politicaprivacidad />} />
    </Routes>
  )
}
export default App
