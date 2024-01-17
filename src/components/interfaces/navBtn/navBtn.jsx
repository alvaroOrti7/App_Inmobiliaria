import Pegatina from "/logoejemplo.jpg";


const Navbtn = () => (
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
  </nav>
);

export { Navbtn };