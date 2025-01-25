import React from 'react';
import { Lightbulb, Target, Users } from 'lucide-react';

const features = [
    {
        title: "Trusted Solutions",
        description: "Let us guide you through tailor-made innovation. Rely on our expertise to ensure every challenge finds resolution in our hands with care.",
        icon: Lightbulb,
        bgPattern: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.3) 100%)", // Light to medium blue
        iconBg: "bg-blue-50"
    },
    {
        title: "Trusted Results",
        description: "Count on us to deliver what we promise, surpassing your expectations every time. With a proven history of success, we are dedicated to achieving flawless outcomes.",
        icon: Target,
        bgPattern: "linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(37, 99, 235, 0.3) 100%)", // Soft blue to deep blue
        iconBg: "bg-blue-100"
    },
    {
        title: "Trusted Team",
        description: "Meet our passionate experts, committed to your success. Working together seamlessly, we earn your trust with every interaction, empowering you to reach greater heights.",
        icon: Users,
        bgPattern: "linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(29, 78, 216, 0.3) 100%)", // Medium to dark blue
        iconBg: "bg-blue-200"
    }
];


const FeatureCard = ({ title, description, icon: Icon, bgPattern, iconBg }) => (
    <div
        className="relative rounded-xl shadow-lg overflow-hidden w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        style={{
            background: bgPattern
        }}
    >
        <div className="absolute inset-0 opacity-10">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
                className="w-full h-full"
            >
                <path
                    fill="#000"
                    fillOpacity="0.05"
                    d="M100 0C44.77 0 0 44.77 0 100s44.77 100 100 100 100-44.77 100-100S155.23 0 100 0zm0 180c-44.112 0-80-35.888-80-80s35.888-80 80-80 80 35.888 80 80-35.888 80-80 80z"
                />
            </svg>
        </div>

        <div className="relative p-6 z-10">
            <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center ${iconBg}`}>
                <Icon className="w-8 h-8 text-[#F14902]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
            <p className="text-gray-600 text-base">{description}</p>

            <div className="mt-4 flex justify-end">
                <div className="w-12 h-1 bg-[#F14902] rounded-full"></div>
            </div>
        </div>
    </div>
);

export default function WhyChoose() {
    return (
        <section className="bg-gray-50 py-16 px-4 overflow-hidden sm:pb-[60px] pb-[800px]">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-3xl font-extrabold text-blueColor mb-4 tracking-tight">
                        Why Choose Us?
                    </h1>
                    <p className="text-md text-gray-600 max-w-2xl mx-auto">
                        Discover the unique ways we deliver exceptional value
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}