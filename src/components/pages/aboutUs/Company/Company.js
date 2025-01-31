import React, { useState } from 'react';
import {
    Compass,
    Layers,
    Target
} from 'lucide-react';

const CompanyAboutSection = () => {
    const [activeSection, setActiveSection] = useState(0);

    const sections = [
        {
            icon: <Compass className="w-14 h-14 stroke-1 text-blue-600" />,
            title: "Our Journey",
            description: "Driven by a bold vision, we are a startup dedicated to transforming technology with passion and innovation."
        },
        {
            icon: <Layers className="w-14 h-14 stroke-1 text-blue-600" />,
            title: "Our Approach",
            description: "We combine strategic insights with cutting-edge technology, creating tailored solutions that transform complex challenges into seamless opportunities for business growth and digital transformation."
        },
        {
            icon: <Target className="w-14 h-14 stroke-1 text-blue-600" />,
            title: "Our Mission",
            description: "Empowering businesses through innovative digital solutions, we aim to be the catalyst that drives meaningful technological progress, helping organizations unlock their full potential in the digital landscape."
        }
    ];

    return (
        <div className=" flex items-center justify-center  px-4 py-16 sm:mb-4">
            <div className="container mx-auto max-w-5xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Navigation Section */}
                    <div className="space-y-8">
                        <div className="text-left">
                            <h1 className="text-3xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                                Transforming
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blueColor to-blue-600">
                  Digital Futures
                </span>
                            </h1>
                            <p className="mt-4 text-md text-gray-600">
                                Innovative technology solutions that drive business evolution
                            </p>
                        </div>

                        {sections.map((section, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveSection(index)}
                                className={`
                  group 
                  cursor-pointer 
                  border-l-4 
                  pl-6 
                  py-4 
                  transition-all 
                  duration-300 
                  ${activeSection === index
                                    ? 'border-blue-600 bg-white/50'
                                    : 'border-transparent hover:border-blue-300'}
                `}
                            >
                                <div className="flex items-center space-x-4">
                                    {section.icon}
                                    <h3 className={`
                    text-2xl 
                    font-semibold 
                    transition-colors 
                    duration-300
                    ${activeSection === index
                                        ? 'text-blue-600'
                                        : 'text-gray-800 group-hover:text-blue-500'}
                  `}>
                                        {section.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Content Section */}
                    <div className="bg-white rounded-3xl shadow-2xl p-10 transform transition-all duration-500">
                        <div className="text-center">
                            <div className="flex justify-center mb-6 opacity-70">
                                {sections[activeSection].icon}
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                {sections[activeSection].title}
                            </h2>
                            <p className="text-md text-gray-600 leading-relaxed">
                                {sections[activeSection].description}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyAboutSection;