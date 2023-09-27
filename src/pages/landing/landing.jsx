import Banner1 from "../../components/banner/banner1"
import Banner2 from "../../components/banner/banner2"
import { Navbtn } from "../../components/interfaces/navBtn/navBtn"
import Navrrss from "../../components/interfaces/navRRSS/navRRSS"
import Lista from "../../components/list/lista"
import Heroslider from "../../components/sliders/heroSlider/heroSlider"
import Steelslider from "../../components/sliders/steelSlider/steelSlider"
import Testimonioslider from "../../components/sliders/testimoniosSlider/testimonioSlider"
import Videoslider from "../../components/sliders/videoSlider/videoSlider"


const Landing = () => (
    <div className="relative">
        <Navrrss altura={'16'} politica={false} />
        <Navbtn />
        <Heroslider />
        <Banner1 />
        <Lista />
        <Videoslider />
        <Steelslider />
        <Testimonioslider />
        <Banner2 />
        <Navrrss altura={'64'} politica={true} />
    </div>
)

export default Landing