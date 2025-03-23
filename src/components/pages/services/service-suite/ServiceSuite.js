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
        title: "Web Development",
        description: "We deliver exceptional designs and cutting-edge web development solutions, transforming your ideas into functional, innovative digital products that drive business success.",
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
        title: "Mobile App Development",
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
        <section className="px-4 py-16 bg-gradient-to-b from-gray-100 to-white">
            <div className="pt-4 mx-auto">
                <h1 className="mb-4 text-3xl font-bold text-center text-gray-800">
                    Our Services Suite
                </h1>
                <h2 className="max-w-2xl mx-auto mb-6 text-center text-gray-600 sm:mb-8">
                    We provide these digital services to grow your business
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 sm:mx-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden transition-transform duration-300 bg-white rounded-lg shadow-lg group hover:shadow-xl hover:scale-105"
                            data-aos={service.aosEffect}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="object-cover w-full h-64 transition-transform duration-500 ease-in-out transform group-hover:scale-105"
                            />

                            {/* The new div that appears when hovered */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 space-y-4 transition-all duration-700 ease-out transform scale-0 bg-black opacity-0 bg-opacity-90 group-hover:scale-100 group-hover:opacity-100">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="object-cover w-16 h-16 transition-transform duration-500 ease-in-out transform scale-100"
                                />
                                <h3 className="text-2xl font-semibold text-center text-white transition-transform duration-500 ease-in-out transform scale-100">
                                    {service.title}
                                </h3>
                                <p className="font-light text-center text-white transition-opacity duration-700 ease-out transform scale-100 opacity-0 text-md group-hover:opacity-100">
                                    {service.description}
                                </p>
                            </div>

                            {/* Original div with icon and title */}
                            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4 transition-opacity duration-500 ease-in-out bg-black bg-opacity-60 group-hover:opacity-0">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="object-cover w-1/6 h-auto transition-transform duration-500 ease-in-out transform hover:scale-125"
                                />
                                <h3 className="flex-grow px-4 text-xl font-semibold text-center text-white">
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
