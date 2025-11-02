import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import your partner logos
import partner1 from "../../../../Assets/gsc.png";
import partner2 from "../../../../Assets/bsc.png";
import partner3 from "../../../../Assets/rg.png";
import partner4 from "../../../../Assets/fde.png";
import partner5 from "../../../../Assets/kba.png";

const partners = [
    { id: 1, logo: partner1, name: 'Partner 1' },
    { id: 2, logo: partner2, name: 'Partner 2' },
    { id: 3, logo: partner3, name: 'Partner 3' },
    { id: 4, logo: partner4, name: 'Partner 4' },
    { id: 5, logo: partner5, name: 'Partner 5' },
];

const OurPartners = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="w-full py-6 bg-white md:py-6">
            <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-20">
                <div className="mx-auto">
                    {/* Heading */}
                    <h2 
                        className="mb-4 text-2xl font-bold text-center text-gray-800 md:text-3xl"
                        data-aos="fade-up"
                    >
                        Our Clients
                    </h2>
                    <p 
                        className="max-w-2xl mx-auto mb-12 text-base text-center text-gray-600 md:text-md"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Trusted partners who believe in our innovation, reliability, and commitment to delivering quality IT solutions
                    </p>

                    {/* Partners Slider */}
                    <div 
                        className="py-8"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <Slider {...settings}>
                            {partners.map((partner) => (
                                <div 
                                    key={partner.id} 
                                    className="flex items-center justify-center h-40 px-4"
                                >
                                    <div className="flex items-center justify-center w-full h-full">
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="object-contain h-24 transition-all duration-500 ease-in-out cursor-pointer md:h-28 filter grayscale hover:grayscale-0 hover:scale-110"
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPartners;
