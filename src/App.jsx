import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import { stack as Menu } from "react-burger-menu";

const App = () => {

  return (
    <>
      <BurgerMenu />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
};

const BurgerMenu = () => {
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "32px",
      height: "32px",
      right: "20px",
      top: "22px",
    },
    bmBurgerBars: {
      background: "#7f7679",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#7f7679",
    },
    bmMenu: {
      background: "#F6FAFD", // Fondo gris oscuro
      padding: "2em 1.5em 0",
      fontSize: "1.3em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItem: {
      paddingBottom: "0.5em",
    },
    bmItemList: {
      padding: "1em",
      color: "#7f7679",
      "&:hover": {
        color: "#a90000", // Cambia el color al hacer hover
      },
      bmOverlay: {
        background: "rgba(0, 0, 0, 0.3)",
      },
      
    },
  };
  return (
    <Menu styles={styles} right>
      {/* Contenido del menú aquí */}
      <h2 className="text-black italic font-[22px]">Nuestras Opciones:</h2>
      <a className="menu-item" href="/">
        TheBleisureHouseValencia
      </a>
      <a className="menu-item" href="/">
        Apartamentos
      </a>
      <a className="menu-item" href="/">
        Recomendaciones
      </a>
      <a className="menu-item" href="/">
        Contacto
      </a>
    </Menu>
  );
};

export default App;
