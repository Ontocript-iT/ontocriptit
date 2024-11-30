import React, { useEffect } from 'react';
import image1 from './Assets/p1.png';
import image2 from './Assets/p2.jpg';
import image3 from './Assets/p3.jpg';
import image4 from './Assets/p4.jpg';
import image5 from './Assets/p5.jpg';
import image6 from './Assets/p6.png';
import icon1 from './Assets/i1.png';
import icon2 from './Assets/i2.png';
import icon3 from './Assets/i3.png';
import icon4 from './Assets/i4.png';
import icon5 from './Assets/i5.png';
import icon6 from './Assets/i6.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
    {
        image: image1,
        icon: icon1,
        title: "Design & Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        aosEffect: "fade-up"
    },
    {
        image: image2,
        icon: icon2,
        title: "UI/UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        aosEffect: "fade-up"
    },
    {
        image: image3,
        icon: icon3,
        title: "Software Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        aosEffect: "fade-up"
    },
    {
        image: image4,
        icon: icon4,
        title: "Digital Marketing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        aosEffect: "fade-up"
    },
    {
        image: image5,
        icon: icon5,
        title: "App Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        aosEffect: "fade-up"
    },
    {
        image: image6,
        icon: icon6,
        title: "Cyber Security",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        aosEffect: "fade-up"
    }
];

export default function ServiceSuite() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-4 mb-24 sm:mb-12">
            <div className="mx-auto pt-4">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
                    Our Technology Services Suite
                </h1>
                <h2 className="text-center text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                    We provide these digital services to grow your business
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:mx-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105"
                            data-aos={service.aosEffect}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                            />

                            {/* The new div that appears when hovered */}
                            <div className="absolute inset-0 bg-black bg-opacity-70 p-6 flex flex-col justify-center items-center space-y-4 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-out">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="w-16 h-16 object-cover transition-transform duration-500 ease-in-out transform scale-100"
                                />
                                <h3 className="text-2xl font-semibold text-white text-center transition-transform duration-500 ease-in-out transform scale-100">
                                    {service.title}
                                </h3>
                                <p className="text-sm font-light text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out transform scale-100">
                                    {service.description}
                                </p>
                            </div>

                            {/* Original div with icon and title */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-4 flex justify-between items-center transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="w-1/6 h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-125"
                                />
                                <h3 className="text-xl font-semibold text-white text-center flex-grow px-4">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
