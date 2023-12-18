import Banner1 from "../../components/banner/banner1";
import { Navbtn } from "../../components/interfaces/navBtn/navBtn";
import Footer from "../../components/footer/footer"
import Lista from "../../components/list/lista";
import Heroslider from "../../components/sliders/heroSlider/heroSlider";


const Landing = (url) => {
  const nuevaURL = url.nuevaURL;

  return (
    <div className="relative">
      <Navbtn nuevaUrl={nuevaURL} />
      <Heroslider />
      <Banner1 nuevaUrl={nuevaURL} />
      <Lista />
      <Footer />
    </div>
  );
};

export default Landing;