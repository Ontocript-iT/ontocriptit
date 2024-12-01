import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const reasons = [
    {
        title: "Expertise",
        description: "We bring years of industry experience and expertise to deliver top-notch solutions",
        icon: "M13 10V3L4 14h7v7l9-11h-7z" // Lightning bolt icon path
    },
    {
        title: "Innovation",
        description: "We stay on the cutting edge of technology, ensuring your website is modern and future-ready",
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" // Lightbulb icon path
    },
    {
        title: "Solutions",
        description: "We customize every project to fit your unique needs and goals",
        icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" // Code icon path
    },
    {
        title: "Timely Delivery",
        description: "We are committed to delivering projects on time and within budget",
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" // Clock icon path
    },
    {
        title: "Quality Assurance",
        description: "Our rigorous testing and quality control guarantee a flawless end product",
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" // Check circle icon path
    },
    {
        title: "Affordability",
        description: "We offer competitive pricing without compromising on quality",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" // Currency dollar icon path
    }
];

function WhyUs() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg-gray-100 pb-[720px] sm:-mb-[600px] pt-10 ">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center pt-4 mb-4 text-blueColor">
                    Why Choose Us?
                </h2>
                <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
                    Choose us as your digital partner for unmatched innovation,
                    reliability, and transformative solutions
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((reason, index) => (
                        <div
                            key={reason.title}
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-orangeColor mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={reason.icon} />
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-800">{reason.title}</h3>
                            </div>
                            <p className="text-gray-600 text-center text-sm">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WhyUs;
