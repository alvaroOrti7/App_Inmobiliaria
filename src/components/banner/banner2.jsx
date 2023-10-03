
const url = window.location.href;

const Banner2 = () => (
  <div className="relative">
    <div className="h-[280px] absolute top-0 left-0 w-[40%] bg-slate-800/70 mobile:w-[50%]">
      <p className="h-full flex flex-row text-center justify-center items-center font-impact text-white mobile:text-[22px] lg:text-[34px]">
        DOMINA EL SECTOR METALÚRGICO CON TOPSOLID'STEEL
      </p>
    </div>
    <img className="w-full h-[280px] object-cover" src="/hero6.webp" alt="" />
    <div className="absolute right-[170px] top-[100px] mobile:right-1 mobile:top-[120px] sm:right-16 sm:top-24 md:right-28 lg:right-36 xl:right-52 2xl:right-72">
      <div id="boton" className={`flex flex-row justify-end text-center`}>
      <a target="_blank" rel="noopener noreferrer" href={url + "formulario"}>
        <button
          id="brillo"
          className={`flex items-center h-[50px] w-[130px] justify-center bg-red text-white border-border italic text-lg mobile:text-[12px] mobile:px-2 sm:text-[16px] sm:w-[190px] sm:h-[90px]`}
        >
          Agendar una Demo
        </button>
      </a>
    </div>
    </div>
  </div>
);

export default Banner2;
