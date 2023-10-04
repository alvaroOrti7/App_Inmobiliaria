import { NavLink } from "react-router-dom";
const url = window.location.href;

const Banner1 = () => (
  <div className="h-80 flex flex-col justify-around items-center lg:justify-evenly">
    <h2
      id="brilloLetra"
      className="font-impact uppercase text-[40px] w-[460px] mobile:text-[24px] mobile:px-4 mobile:w-full mobile:text-center sm:text-[40px]"
    >
      Es hora de desmarcarte de tu competencia
    </h2>
    <NavLink
    to={"/formulario"}
    >
    <div id="boton" className={`flex flex-row justify-end text-center`}>
      <a target="_blank" rel="noopener noreferrer" href={url + "formulario"}>
        <button
          id="brillo"
          className={`flex items-center h-[80px] w-[200px] justify-center bg-red text-white border-border italic text-lg mobile:text-[12px] mobile:px-2 sm:text-[16px] sm:w-[220px] sm:h-[90px] lg:w-[240px] lg:h-[100px]`}
        >
          Agendar una Demo
        </button>
      </a>
    </div>
    </NavLink>
  </div>
);

export default Banner1;
