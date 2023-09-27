import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from 'react-icons/hi';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 2560, min: 2000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 2000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const Videoslider = () => {
    const carouselRef = useRef(null);

    const videos = [
        {
            url: 'https://www.youtube.com/embed/OSv1knskmtU?si=II0bAiPTl4PlPRjH',
        },
        {
            url: 'https://www.youtube.com/embed/kWcd5DeE17E?si=gBeAMqF4ZgzDoEf_',
        },
        {
            url: 'https://www.youtube.com/embed/HP0L3UJYjys?si=skckYdMNP5ek0PeO',
        },
        {
            url: 'https://www.youtube.com/embed/rXh7aR-FRa0?si=5Dy4UlCCHAQ-n3TT',
        },
        {
            url: 'https://www.youtube.com/embed/G026ovt6twE?si=vi_x37SXY64xIZSx',
        },
        {
            url: 'https://www.youtube.com/embed/uEpdM0s49v4?si=2c4kWajBtm0hdh4u',
        },
        {
            url: 'https://www.youtube.com/embed/hbMLX2-nG7M?si=O42lrpTWV_Eb8DUb'
        }
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
        <div className='relative flex flex-col'>
            <div className='font-impact p-5 pl-4 bg-gradient-to-r from-gray-500 mobile:text-[28px] md:text-[44px]'>
                VIDEOS TOPSOLID'STEEL
            </div>
            <div id="external-arrows-right" className='z-[1] absolute bottom-32 right-8 flex flex-row bg-slate-800/50 rounded-md mobile:bottom-60 sm:bottom-32 sm:right-4'>
                <HiOutlineArrowSmRight
                    id="right-arrow"
                    className='text-[40px] text-white cursor-pointer'
                    onClick={handleNext}
                />
            </div>
            <Carousel
                ref={carouselRef}
                responsive={responsive}
                draggable={false}
                swipeable
                arrows={false}
                containerClass="containerSlider"
                dotListClass="dots-slider"
                itemClass="itemSlider"
                customTransition="all .5s ease-in-out"
            >
                {videos.map(({ url }, key) => (
                    <div key={key} className='pb-20 pt-14 cursor-default grid place-content-center'>
                        <iframe
                            src={url}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                ))}
            </Carousel>
            <div id="external-arrows-left" className='absolute bottom-32 left-8 flex flex-row bg-slate-800/50 rounded-md mobile:bottom-60 sm:bottom-32 sm:left-4'>
                <HiOutlineArrowSmLeft
                    id="left-arrow"
                    className='text-[40px] text-white cursor-pointer'
                    onClick={handlePrevious}
                />
            </div>
        </div>
    );
};

export default Videoslider;
