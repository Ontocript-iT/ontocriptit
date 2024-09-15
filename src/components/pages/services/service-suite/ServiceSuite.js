import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
    {
        title: "Fullstack Development",
        description: "Comprehensive Fullstack Development Solutions",
        aosEffect: "fade-right"
    },
    {
        title: "UI/UX Design",
        description: "Innovative UI/UX Design Expertise",
        aosEffect: "fade-left"
    },
    {
        title: "Cloud Services",
        description: "Robust Cloud Solutions & Services",
        aosEffect: "fade-right"
    },
    {
        title: "Digital Marketing",
        description: "Strategic Digital Marketing Solutions",
        aosEffect: "fade-left"
    }
];

export default function ServiceSuite() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-4  mb-[400px] sm:mb-[250px]">
            <div className="container mx-auto pt-4">
                <h1 className="text-4xl font-bold text-center text-whiteColor mb-4">
                    Our Technology Services Suite
                </h1>
                <h2 className="text-xl text-center text-gray-600 mb-12">
                    We provide these digital services to grow your business
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
                            data-aos={service.aosEffect}
                        >
                            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}