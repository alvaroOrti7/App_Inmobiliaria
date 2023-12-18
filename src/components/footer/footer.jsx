const Footer = () => {
  const url = window.location.href;

  return (
    <nav
      id="navRRSS"
      className={`p-2 flex flex-row justify-between items-center bg-white md:h-64`}
    >
      <div>
        <p className="mobile:text-[8px] sm:text-[14px]">
          <a
            className="hover:text-blueSky transition-all ml-10 mobile:ml-0"
            href={`${url}politica-de-privacidad`}
          >
            Politica de Privacidad
          </a>
        </p>
      </div>

      <div id="rrss" className={`flex flex-row items-center mr-4 mobile:m-0 `}>
        <div className="text-right mobile:hidden md:block">
          <h4 className="text-[24px]">Direccion</h4>
          <p>Direccion</p>
          <p>Direccion</p>
          <p>Direccion</p>
          <p>Direccion</p>
        </div>

        <div className="flex flex-row mobile:mr-8">
          <div id="logo" className="flex items-center ml-8">
            <a
              target="_blank"
              // href="https://prosolid3d.com/"
              rel="noopener noreferrer"
            >
              <img
                className="mobile:w-24 sm:w-44"
                // src={Prosolid}
              />
            </a>
          </div>
        </div>
      </div>

      <div id="iconos" className={`flex flex-row`}>
        {/* {iconos.map(({ Icono, link }, key) => (
          <a key={key} target="_blank" href={link} rel="noopener noreferrer">
            <Icono className="mr-4 hover:text-black/50 transition-all mobile:text-[12px] sm:text-[20px]" />
          </a>
        ))} */}
        a
      </div>
    </nav>
  );
};

export default Footer;
