import React, { useRef, useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from 'react-icons/hi'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Heroslider = () => {
    const carouselRef = useRef(null);

    const texts = [
        {
            img: '/hero1.webp',
            titulo: "lorem ipsum",
            parrafo: "lorem ipsum"
        },
        {
            img: '/hero2.webp',
            titulo: "lorem ipsum",
            parrafo: "lorem ipsum"
        },
        {
            img: '/hero3.webp',
            titulo: "lorem ipsum",
            parrafo: "lorem ipsum"
        },
        {
            img: '/hero4.webp',
            titulo: "lorem ipsum",
            parrafo: "lorem ipsum"
        },
        {
            img: '/hero5.webp',
            titulo: "lorem ipsum",
            parrafo: "lorem ipsum"
        }
    ]

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.next(1); // Avanza al siguiente elemento
        }
    };

    const handlePrevious = () => {
        if (carouselRef.current) {
            carouselRef.current.previous(1); // Retrocede al elemento anterior
        }
    };

    const [windows, setWindows] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindows(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className='relative'>
            <Carousel
                ref={carouselRef}
                responsive={responsive}
                draggable={false}
                swipeable
                arrows={false}
                infinite={true}
                containerClass="container-slider"
                dotListClass="dots-slider"
                itemClass="items-slider"
                customTransition="all .5s ease-in-out"
            >
                {texts.map(({ img, titulo, parrafo }, key) => (
                    <div key={key}>
                        <img id={windows >= 640 ? 'hero' : 'mobile-hero'} className='w-full object-cover' src={img} alt="imagenes" />
                        <div id={windows >= 640 ? 'hero' : 'mobile-hero'} className='absolute top-0 right-0 w-[30%] bg-slate-800/70 mobile:w-[100%] sm:w-[40%]'>
                            <div className='mt-12 m-4 h-full flex flex-col items-left justify-end mobile:mt-0'>
                                <h1 className='mb-10 font-impact text-white mobile:text-[22px] sm:text-[36px] xl:text-[42px] 2xl:text-[50px]'>{titulo}</h1>
                                <p className='font-catamaran text-white mobile:text-[14px] mobile:mb-8 sm:mb-32 sm:text-[18px] xl:text-[20px] 2xl:text-[24px]'>{parrafo}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
            <div id="external-arrows" className='absolute bottom-8 right-96 flex flex-row bg-slate-800/50 mobile:right-0 mobile:bottom-0'>
                <HiOutlineArrowSmLeft
                    id="arrow left-arrow"
                    className='text-[50px] text-white cursor-pointer mobile:text-[30px] md:text-[45px]'
                    onClick={handlePrevious}
                />
                <HiOutlineArrowSmRight
                    id="arrow right-arrow"
                    className='text-[50px] text-white cursor-pointer mobile:text-[30px] md:text-[45px]'
                    onClick={handleNext}
                />
            </div>
        </div>
    );
};

export default Heroslider;
