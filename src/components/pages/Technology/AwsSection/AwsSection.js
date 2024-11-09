import React, { useState } from 'react';
import { Cloud, Database } from 'lucide-react';

const cloudSolutions = [
    {
        title: 'AWS Services',
        description: 'Amazon Web Services (AWS) offers a broad set of global cloud-based products including compute, storage, databases, analytics, networking, mobile, developer tools, management tools, IoT, security, and enterprise applications.',
        icon: Cloud
    },
    {
        title: 'Firebase',
        description: "Firebase is Google's mobile platform that helps you quickly develop high-quality apps and grow your business. It provides services like real-time database, authentication, cloud functions, and hosting.",
        icon: Database
    }
];

const CloudComputingSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="container mx-auto px-4 py-16 ">
            <h1 className="text-3xl font-bold text-center mb-12 text-whiteColor">
                Cloud Computing Solutions
            </h1>
            <div className="grid md:grid-cols-2 gap-8">
                {cloudSolutions.map((solution, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-lg shadow-lg overflow-hidden ml-10 mr-10 transform transition duration-300 ease-in-out ${
                            hoveredCard === index ? 'scale-105' : ''
                        }`}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <div className="p-6">
                            <div className="flex items-center justify-center mb-4">
                                {React.createElement(solution.icon, { className: "h-12 w-12 text-blue-500" })}
                            </div>
                            <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
                                {solution.title}
                            </h2>
                            <p className="text-gray-600 text-center">
                                {solution.description}
                            </p>
                        </div>
                        <div className="px-6 py-4 bg-gray-100">
                            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CloudComputingSection;