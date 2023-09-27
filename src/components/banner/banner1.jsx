import { Boton } from "../interfaces/navBtn/navBtn";

const Banner1 = () => (
    <div className="h-80 flex flex-col justify-around items-center lg:justify-evenly">
        <h2
            id="brilloLetra"
            className="font-impact uppercase text-[40px] w-[460px] mobile:text-[24px] mobile:px-4 mobile:w-full mobile:text-center sm:text-[40px]"
        >
            Es hora de desmarcarte de tu competencia
        </h2>
        <Boton
            anchoSm="[220px]"
            alturaSm="[90px]"
            anchoLg="[240px]"
            alturaLg="[100px]"
            altura="[80px]"
            ancho="[200px]"
        />
    </div>
);

export default Banner1;
