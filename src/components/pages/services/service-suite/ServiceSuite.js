import React, { useEffect } from 'react';
import image1 from './Assets/p1.png';
import image2 from './Assets/p2.jpg';
import image3 from './Assets/p3.jpg';
import image4 from './Assets/p4.jpg';
import image5 from './Assets/p5.jpg';
import image6 from './Assets/image7.png';
import image8 from './Assets/image8.png';
import image9 from './Assets/image9.png';
import image10 from './Assets/image10.png';
import icon1 from './Assets/i1.png';
import icon2 from './Assets/i2.png';
import icon3 from './Assets/i3.png';
import icon4 from './Assets/i4.png';
import icon5 from './Assets/i5.png';
import icon6 from './Assets/i6.png';
import icon7 from './Assets/icon7.png';
import icon8 from './Assets/icon8.png';
import icon9 from './Assets/icon9.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
    {
        image: image1,
        icon: icon1,
        title: "Design & Development",
        description: "We deliver exceptional designs and cutting-edge development solutions, transforming your ideas into functional, innovative digital products that drive business success.",
        aosEffect: "fade-up"
    },
    {
        image: image2,
        icon: icon2,
        title: "UI/UX Design",
        description: "Our expert team creates visually appealing, user-focused designs to ensure seamless navigation and exceptional user experiences across digital platforms",
        aosEffect: "fade-up"
    },
    {
        image: image3,
        icon: icon3,
        title: "Software Development",
        description: "We specialize in building tailored, scalable software solutions to meet specific business needs, ensuring reliability and efficiency in operations.",
        aosEffect: "fade-up"
    },
    {
        image: image10,
        icon: icon4,
        title: "Digital Marketing",
        description: "Boost your online visibility with our result-oriented digital marketing strategies, including SEO, content creation, social media, and targeted campaigns.",
        aosEffect: "fade-up"
    },
    {
        image: image5,
        icon: icon5,
        title: "App Development",
        description: "We develop high-performing, feature-rich mobile applications for Android and iOS, tailored to enhance user engagement and business growth.",
        aosEffect: "fade-up"
    },
    {
        image: image6,
        icon: icon7,
        title: "E-Commerce Solutions",
        description: "Empower your online store with secure, user-friendly e-commerce platforms designed to optimize sales and streamline business processes.",
        aosEffect: "fade-up"
    },
    {
        image: image8,
        icon: icon8,
        title: "E-Learning Solutions",
        description: "Revolutionize education with our engaging, interactive e-learning platforms, offering innovative solutions for diverse learning needs.",
        aosEffect: "fade-up"
    },
    {
        image: image9,
        icon: icon9,
        title: "IT Consultancy",
        description: "Gain strategic IT advice and solutions from our experts to enhance your technology infrastructure and achieve operational excellence.",
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
                    Our Services Suite
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
                            <div className="absolute inset-0 bg-black bg-opacity-90 p-6 flex flex-col justify-center items-center space-y-4 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-out">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="w-16 h-16 object-cover transition-transform duration-500 ease-in-out transform scale-100"
                                />
                                <h3 className="text-2xl font-semibold text-white text-center transition-transform duration-500 ease-in-out transform scale-100">
                                    {service.title}
                                </h3>
                                <p className="text-md font-light text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out transform scale-100">
                                    {service.description}
                                </p>
                            </div>

                            {/* Original div with icon and title */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 flex justify-between items-center transition-opacity duration-500 ease-in-out group-hover:opacity-0">
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
