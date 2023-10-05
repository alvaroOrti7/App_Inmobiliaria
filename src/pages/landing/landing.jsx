import Banner1 from "../../components/banner/banner1";
import Banner2 from "../../components/banner/banner2";
import { Navbtn } from "../../components/interfaces/navBtn/navBtn";
import { Navrrss, Footer } from "../../components/interfaces/navRRSS/navRRSS";
import Lista from "../../components/list/lista";
import Heroslider from "../../components/sliders/heroSlider/heroSlider";
import Steelslider from "../../components/sliders/steelSlider/steelSlider";
import Testimonios from "../../components/testimonios/testimonios";
import Videoslider from "../../components/sliders/videoSlider/videoSlider";

const Landing = (url) => {
  const nuevaURL = url.nuevaURL;

  return (
    <div className="relative">
      <Navrrss />
      <Navbtn nuevaUrl={nuevaURL} />
      <Heroslider />
      <Banner1 nuevaUrl={nuevaURL} />
      <Lista />
      <Videoslider />
      <Steelslider />
      <Testimonios />
      <Banner2 nuevaUrl={nuevaURL} />
      <Footer />
    </div>
  );
};

export default Landing;
