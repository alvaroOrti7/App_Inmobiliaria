import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from 'react-icons/hi';

const responsive = {
    ultraLargeDesktop: {
        breakpoint: { max: 3560, min: 2000 },
        items: 4,
        slidesToSlide: 2,
    },
    superLargeDesktop: {
        breakpoint: { max: 2000, min: 1550 },
        items: 3,
        slidesToSlide: 2,
    },
    desktop: {
        breakpoint: { max: 1550, min: 1024 },
        items: 2,
        slidesToSlide: 2,
    },
    tablet: {
        breakpoint: { max: 1024, min: 1060 },
        items: 2,
        slidesToSlide: 2,
    },
    mobile: {
        breakpoint: { max: 1060, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const Steelslider = () => {
    const carouselRef = useRef(null);

    const texts = [
        {
            img: '/block1.webp',
            titulo: "Diseño sin límites",
            subtitulo: "Modele sus ideas sin restricciones, ¡expresando su creatividad!",
            puntos: [
                'Diseñe a partir de perfiles, chapas, piezas mecánicas, etc.',
                'Multimateriales (acero, madera, vidrio, composite, plástico, piedra, etc.)',
                'Pedidos por encargo (escaleras, barandillas, barras, etc.)',
                'Módulo completo de chapa (desdoblamiento, reglas de pérdida de curvatura, laminación con salida, etc.)',
                'Numerosas bibliotecas integradas:',
                'Perfiles, herrajes y materiales estándar',
                'Perfiles y accesorios de fabricantes de carpintería (Forster, Jansen, Rp Technic, etc.)',
                'Fabricantes de herrajes (Wurth, etc.)',
            ],
        },
        {
            img: '/block2.webp',
            titulo: "Componentes paramétricos",
            subtitulo: "Máxima capitalización de su know-how. ¡Cuando la rentabilidad se une a su innovación!",
            puntos: [
                'El motor de parametrización más completo del mercado, totalmente integrado y sin programación',
                'Campos de aplicación ilimitados (zancas curvas, peldaños de escaleras, relleno de barandillas, etc.)',
                'Procesos de mecanizado integrados',
            ],
        },
        {
            img: '/block3.webp',
            titulo: "Renderización realista",
            subtitulo: "Una inmersión sin igual para sus clientes. Evite los malentendidos y facilite la toma de decisiones.",
            puntos: [
                'Renderizado realista totalmente integrado',
                'Gestión en tiempo real de los materiales PBR (colores, rugosidad, normales, metalicidad, etc.)',
                'Gestión en tiempo real de reflejos, sombras y transparencias',
                'Posicionamiento de estructuras 3D sobre la foto',
            ],
        },
        {
            img: '/block4.webp',
            titulo: "Trabajar en el proceso BIM",
            subtitulo: "Integre los procesos BIM con serenidad gracias a una solución totalmente compatible.",
            puntos: [
                'Importación certificada de IFC y Revit© (Rvt)',
                'Gestión de capas, clases, grupos, etc.',
                'Bibliotecas integradas de clases, pset, qto IFC',
                'Comandos dedicados a IFC (gestión de la georreferenciación, tipo de estructura exportada, historial de propiedades IFC, etc.)',
                'Clasificaciones OmniClass 2012 y Uniformat II integradas',
                'Trabajo colaborativo en el mismo modelo con aislamiento de las áreas de trabajo, montaje automático de áreas, etc.',
                'Exportación IFC (2x3, 4)',
            ],
        },
        {
            img: '/block5.webp',
            titulo: "Diseño asociativo",
            subtitulo: "Ahorre tiempo en sus modificaciones y evite muchos errores",
            puntos: [
                'Modelado de estructuras directamente en el entorno',
                'La modificación del entorno lleva a la actualización de la obra respetando las reglas del diseñador y las restricciones de fabricación',
                'La actualización de la obra conlleva la actualización de los documentos de fabricación (bocetos, desdoblamientos, listas de materiales, etc.)',
            ],
        },
        {
            img: '/block6.webp',
            titulo: "Gestión medioambiental",
            subtitulo: "Desde lo más sencillo hasta lo más complejo, TopSolid se adaptará a sus limitaciones",
            puntos: [
                'Modelado asistido de edificios',
                'Importación de Step, Dxf/Dwg, Rvt (Revit©), Sldsam/Sldprt (Solidworks©), IFC (BIM), etc.',
                'Importación de nubes de puntos (xyz, pts, ply, etc.)',
            ],
        },
    ];

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next(1);
        }
    };

    const handlePrevious = () => {
        if (carouselRef.current) {
            carouselRef.current.previous(1);
        }
    };

    return (
        <div className='relative bg-blacky text-white'>
            <div className='pt-8 pl-16 pb-16 mobile:pl-4 mobile:pb-0'>
                <h1 className='font-impact text-[44px] mobile:text-[30px]'>TopSolid'Steel</h1>
                <h4 className='text-[20px] mobile:text-[18px]'>La referencia en software metalúrgico</h4>
            </div>
            <div id="external-arrows" className='absolute z-10 top-40 left-16 flex flex-row bg-slate-800/50 rounded-md mobile:top-44 mobile:left-4 mobile-steelArrows:top-8 mobile-steelArrows:left-52 sm:top-28 sm:left-14'>
                <HiOutlineArrowSmLeft
                    id="arrow left-arrow"
                    className='text-[50px] text-white cursor-pointer mobile:text-[40px]'
                    onClick={handlePrevious}
                />
                <HiOutlineArrowSmRight
                    id="arrow right-arrow"
                    className='text-[50px] text-white cursor-pointer mobile:text-[40px]'
                    onClick={handleNext}
                />
            </div>
            <Carousel
                ref={carouselRef}
                responsive={responsive}
                draggable={false}
                swipeable
                arrows={false}
                containerClass="container-slider"
                dotListClass="dots-slider"
                itemClass="items-slider"
                customTransition="all .5s ease-in-out" // Controla la transición personalizada
            >
                {texts.map(({ img, titulo, subtitulo, puntos }, key) => (
                    <div key={key}>
                        <div className='pt-16'>
                            <img id="hero" className='object-contain' src={img} alt="imagenes" style={{ height: "300px" }} />
                        </div>
                        <div className='ml-8 mobile:mx-2 mobile:mt-[-50px] sm:ml-10'>
                            <h2 className='font-impact mobile-steelTittle:mt-20 sm:text-[30px] lg:text-[28px]'>{titulo}</h2>
                            <h4 className='text-white/80 mb-4 mobile:text-[18px] xl:text-[20px]'>{subtitulo}</h4>
                            <ul className='list-disc ml-5 mobile:text-[14px] sm:text-[16px] 2xl:text-[18px]'>
                                {puntos.map((li, key) => (
                                    <li className='my-2' key={key}>
                                        {li}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Steelslider;
