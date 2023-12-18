import Pegatina from "/logoejemplo.jpg";
import { NavLink } from "react-router-dom";

const Navbtn = (url) => (
  <nav
    id="bavbtn"
    className="bg-gray bg-cover top-0 sticky z-20 mobile:h-12 sm:h-20"
  >
    <div
      id="pegatina"
      className="absolute z-10 mobile:top-1 mobile:left-1 lg:top-[-35px] lg:left-6"
    >
      <img
        className="mobile:w-[70px] sm:w-[100px] sm:top-0 lg:w-40 rounded-full"
        src={Pegatina}
        alt=""
      />
    </div>

    <div id="boton" className={`h-full flex flex-row justify-end text-center`}>
      <NavLink to={"/formulario"}>
        <a target="_blank" rel="noopener noreferrer" href={url + "formulario"}>
          <button
            id="brillo"
            className={`flex items-center h-full justify-center bg-blueSky text-white border-border italic text-lg mobile:text-[12px] mobile:px-2 sm:text-[16px] sm:w-[180px]`}
          >
            Agendar una Cita
          </button>
        </a>
      </NavLink>
    </div>
  </nav>
);

export { Navbtn };
