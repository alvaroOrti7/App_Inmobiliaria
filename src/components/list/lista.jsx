const list = [
    "Modele sus ideas sin restricciones gracias a las ilimitadas capacidades de diseño de TopSolid'Steel.",
    "Aproveche sus conocimientos creando sus propios componentes paramétricos e inteligentes.",
    "Sea reactivo y evite los errores con una asociatividad total entre los documentos de diseño 3D y de fabricación.",
    "Sumerja a sus clientes en su universo artístico con el renderizado realista integrado.",
    "Céntrese en lo esencial automatizando las tareas repetitivas y tediosas en la creación de sus documentos.",
    "Integre los procesos BIM con serenidad gracias a una solución totalmente compatible."
];

const Lista = () => (
    <div id="titulos" className="bg-gray">
        <div className="p-14 mobile:p-8">
            <h1 className="font-impact text-5xl mobile:text-3xl">TOPSOLID'STEEL</h1>
            <h3 className="font-impact text-lg text-border">La referencia en software de diseño metalúrgico</h3>
            <ol className="mt-10 lg:grid lg:grid-cols-2 lg:gap-8">
                {list.map((parrafo, key) => (
                    <li key={key} className="flex flex-row mb-4 hover:scale-105 transition-all cursor-default mobile:flex-col sm:flex-row lg:">
                        <span className="mr-6 font-impact text-red text-3xl">{"0" + (key + 1)}</span>
                        <p className="flex self-center text-lg font-semibold text-justify mobile:text-base lg:text-lg">{parrafo}</p>
                    </li>
                ))}
            </ol>
        </div>
    </div>
);

export default Lista;
