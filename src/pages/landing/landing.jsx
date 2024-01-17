import { Navbtn } from "../../components/interfaces/navBtn/navBtn";
import Footer from "../../components/footer/footer"
import Lista from "../../components/list/lista";
import Heroslider from "../../components/sliders/heroSlider/heroSlider";
import React from 'react'


const Landing = () => {
  return (
    <div className="relative">
      <Navbtn />
      <Heroslider />
      <Lista />
      <Footer />
    </div>
  );
};

export default Landing;