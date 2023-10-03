import React from 'react';

const Testimonioslider = () => {
    const texts = [
        {
            img: '/LOGOS-TESTIMONIOS-03.webp',
            nombre: "Toni Sarabia",
            empresa: "MIPESA GRUPO EMPRESARIAL",
            parrafo: `TopSolid ha marcado un antes y un después en nuestra empresa, mejorando significativamente la eficiencia en nuestros procesos de diseño, gestión, y programación de máquinas CNC.\n
            Ahora somos capaces de reducir los tiempos en la preparación y ejecución del lanzamiento de una producción de piezas. Todo ello, gracias al trabajo integrado que realizamos con TopSolid. Desde el diseño propio o de nuestros clientes, hasta la producción sin duplicidad de procesos con los riesgos que ello conlleva.\n
            Estas mejoras han optimizado y reducido los costes operativos. Topsolid ha sido una pieza fundamental en nuestro éxito y crecimiento.`,
        },
        {
            img: '/LOGOS-TESTIMONIOS-01.webp',
            nombre: "Rubén Pleguezuelos",
            empresa: "MOLD-TECNIC R&D",
            parrafo: `TopSolid ha impulsado nuestra eficiencia. Tanto la oficina técnica como la producción han cambiado significativamente.\n
            Ahora nuestros procesos de diseño son ágiles reduciendo considerablemente los costes, mejorando y optimizando nuestro trabajo.\n
            La ventaja de trabajar en un solo sistema para realizar diseño de producto, diseño de moldes, programación CNC de centros de mecanizado, creación de electrodos y gestión de maquinas de electroerosión de hilo, entre otras muchas posibilidades, reducen a cero los errores que se producen pasando información entre distintas aplicaciones para realizar el trabajo.\n
            Gracias a la asociatividad de TopSolid, podemos garantizar que cuando recibimos alguna modificación del cliente, esta es repercutida a todo el trabajo realizado de forma automática garantizando la trazabilidad de los cambios.\n
            TopSolid también ha aportado un plus en la comunicación entre nuestros equipos de diseño y fabricación gracias al trabajo colaborativo que nos ofrece el PDM.\n
            Todas estas mejoras en la calidad de nuestro trabajo han consolidado nuestra posición en el mercado.`,
        },
        {
            img: '/LOGOS-TESTIMONIOS-02.webp',
            nombre: "Jose Ángel Herrero",
            empresa: "IMATRIC - TECDEM",
            parrafo: `Desde que implementamos TopSolid en nuestra oficina técnica, hemos experimentado un cambio transformador en nuestra empresa. TopSolid ha mejorado nuestra capacidad para diseñar y producir matrices de forma más rápida y precisa.\n
            Hemos simplificado los procesos y reducido los plazos de entrega. Esto ha aumentado nuestra eficiencia y calidad.\n
            A día de hoy, podemos decir que TopSolid ha sido una apuesta segura además de una inversión estratégica que ha impulsado nuestra capacidad de ofrecer matrices de alta calidad de manera más rápida.\n
            En definitiva, TopSolid ha cambiado de forma positiva la manera de afrontar el trabajo en nuestros proyectos.`,
        }
    ];

    return (
        <div className='bg-white'>
            <h1 className='font-impact text-[30px] p-5 bg-gradient-to-r from-gray-500'>TESTIMONIOS</h1>
            <ol className='flex flex-col p-4 md:p-12 xl:px-56 2xl:px-96'>
                {texts.map(({ img, nombre, empresa, parrafo }, key) => (
                    <li key={key} className='my-10'>
                        <div className='flex justify-center'>
                            <img className='w-[250px]' src={img} alt={nombre} />
                        </div>
                        <h3 className='text-center font-semibold italic text-border p-4'>{nombre}</h3>
                        <h4 className='uppercase font-semibold text-red pb-2'>{empresa}</h4>
                        {parrafo.split('\n').map((section, index) => (
                            <React.Fragment key={index}>
                                <p className='text-justify'>{section}</p>
                                {index < parrafo.split('\n').length - 1 && (
                                    <p className='text-justify intro-class h-[10px]'></p>
                                )}
                            </React.Fragment>
                        ))}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Testimonioslider;
