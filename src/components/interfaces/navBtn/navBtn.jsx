import Pegatina from "/pegatinaTopSolid.webp";

const url = window.location.href;

const Boton = ({ altura = 'full', anchoSm, alturaSm, alturaLg, anchoLg, border }) => (
    <div id="boton" className={`h-${altura} flex flex-row justify-end text-center`}>
        <a target="_blank" rel="noopener noreferrer" href={url + "formulario"}>
            <button
                id="brillo"
                className={`flex items-center h-${altura} justify-center bg-red text-white border-${border} border-border italic text-lg mobile:text-[12px] mobile:px-2 sm:text-[16px] sm:w-${anchoSm} sm:h-${alturaSm} lg:w-${anchoLg} lg:h-${alturaLg}`}
            >
                Agendar una Demo
            </button>
        </a>
    </div>
);

const Navbtn = () => (
    <nav id="bavbtn" className="bg-fondo bg-cover top-0 sticky z-20 mobile:h-12 sm:h-20">
        <div id="pegatina" className="absolute z-10 mobile:top-1 mobile:left-1 lg:top-[-35px] lg:left-6">
            <img className="mobile:w-[70px] sm:w-[100px] sm:top-0 lg:w-40" src={Pegatina} alt="" />
        </div>
        <Boton anchoSm="[180px]" />
    </nav>
);

export { Navbtn, Boton };
