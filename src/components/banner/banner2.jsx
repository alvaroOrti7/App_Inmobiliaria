import { Boton } from "../interfaces/navBtn/navBtn";

const Banner2 = () => (
    <div className="relative">
        <div className="h-[280px] absolute top-0 left-0 w-[40%] bg-slate-800/70 mobile:w-[50%]">
            <p className="h-full flex flex-row text-center justify-center items-center font-impact text-white mobile:text-[22px] lg:text-[34px]">
                DOMINA EL SECTOR METALÚRGICO CON TOPSOLID'STEEL
            </p>
        </div>
        <img className="w-full h-[280px] object-cover" src="src/assets/hero6.webp" alt="" />
        <div className="absolute right-[170px] top-[100px] mobile:right-1 mobile:top-[120px] sm:right-16 sm:top-24 md:right-28 lg:right-36 xl:right-52 2xl:right-72">
            <Boton anchoSm="[190px]" alturaSm="[90px]" altura="[50px]" ancho="[130px]" />
        </div>
    </div>
);

export default Banner2;
